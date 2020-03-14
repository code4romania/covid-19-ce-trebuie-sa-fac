using System.Collections.Generic;
using System.Threading.Tasks;
using Decisions.Api.Models;

namespace Decisions.Api.Repositories {
    public interface IStaticPageRepository
    {
        Task<IEnumerable<StaticPage>> GetAll();
        Task<StaticPage> Get(string id);
        Task<string> Add(StaticPage page);
        Task Update(StaticPage page);
    }
}