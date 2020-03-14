using System.Collections.Generic;
using System.Threading.Tasks;
using Decisions.Api.Models;
using Decisions.Api.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Decisions.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaticPageController : ControllerBase
    {
        public StaticPageController(IStaticPageRepository repository)
        {
            _staticPageRepository = repository;
        }

        private readonly IStaticPageRepository _staticPageRepository;

        [HttpGet]
        [Produces(typeof(IEnumerable<StaticPage>))]
        public async Task<IEnumerable<StaticPage>> Get()
        {
            return await _staticPageRepository.GetAll();
        }

        [HttpGet("{id}")]
        [Produces(typeof(StaticPage))]
        public async Task<StaticPage> Get(string id) {
            return await _staticPageRepository.Get(id);
        }

        [HttpPost]
        [Produces(typeof(long))]
        public async Task<string> Post(StaticPage page) {
            return await _staticPageRepository.Add(page);
        }

        [HttpPut]
        [Produces(typeof(long))]
        public async Task Put(StaticPage page) {
            await _staticPageRepository.Update(page);
        }
    }
}