using System.Net;
using System.Text;
using Decisions.Api.ApiInfrastructure;
using Decisions.Api.Models;
using Decisions.Api.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;

namespace DecisionsApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.RegisterSwagger();
            if (Configuration.GetValue<StorageType>("StorageType") == StorageType.FileSystem) {
                services.AddTransient<IStaticPageRepository, FileSystemRepository>();
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler(appError =>
                {
                    appError.Run(async context => {
                        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                        context.Response.ContentType = "application/json";

                        var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
                        if (contextFeature != null) {
                            var errorResponse = JsonConvert.SerializeObject(new {
                                StatusCode = context.Response.StatusCode,
                                Message = $"Internal Server Error. {contextFeature.Error.Message}"
                            });
                            context.Response.ContentLength = errorResponse.Length;
                            await context.Response.WriteAsync(errorResponse, Encoding.UTF8);
                        }
                    });
                });
            }

            app.UseHttpsRedirection();

            app.ConfigureSwaggerMiddleware();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
