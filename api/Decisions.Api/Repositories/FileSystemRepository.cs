using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Decisions.Api.Models;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;

namespace Decisions.Api.Repositories {
    public class FileSystemRepository : IStaticPageRepository
    {
        private readonly string rootFolder;

        public FileSystemRepository(IWebHostEnvironment environment)
        {
            rootFolder = Path.Combine(environment.ContentRootPath, "staticPages");
            if (!Directory.Exists(rootFolder))
                Directory.CreateDirectory(rootFolder);
        }

        private long NewId() {
            var buffer = Guid.NewGuid().ToByteArray();
            return BitConverter.ToInt64(buffer, 0);
        }

        public async Task<IEnumerable<StaticPage>> GetAll()
        {
            var result = new List<StaticPage>();
            foreach (var file in Directory.GetFiles(rootFolder))
            {
                using var fileReader = File.OpenText(file);
                var fileObject = JsonConvert.DeserializeObject<StaticPage>(await fileReader.ReadToEndAsync());
                if (fileObject == null) break;
                fileObject.Id = new FileInfo(file).Name;
                result.Add(fileObject);
            }

            return result;
        }

        public async Task<StaticPage> Get(string id)
        {
            var filePath = $"{Path.Combine(rootFolder, id)}.json";
            if (!File.Exists(filePath)) return null;
            using var file = File.OpenText(filePath);
            var result = JsonConvert.DeserializeObject<StaticPage>(await file.ReadToEndAsync());
            return result;
        }

        public async Task<string> Add(StaticPage page)
        {
            var id = NewId();
            await using (var file = File.CreateText($"{Path.Combine(rootFolder, id.ToString())}.json"))
            {
                var content = JsonConvert.SerializeObject(page);
                await file.WriteAsync(content);
            }

            return id.ToString();
        }

        public async Task Update(StaticPage page)
        {
            var filePath = $"{Path.Combine(rootFolder, page.Id)}.json";
            if (!File.Exists(filePath)) return;
            using (var file = File.CreateText(filePath))
            {
                await file.WriteAsync(JsonConvert.SerializeObject(page));
            }
        }
    }
}
