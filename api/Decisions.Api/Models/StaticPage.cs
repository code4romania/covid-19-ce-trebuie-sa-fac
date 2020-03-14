using System.Collections.Generic;
using Newtonsoft.Json;

namespace Decisions.Api.Models {
    public class StaticPage {
        [JsonIgnore]
        public string Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }  
        public bool Active { get; set; }
        public List<StaticPageLink> Links { get; set; }
    }
}
