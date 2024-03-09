using FlyingFishMenuWeb.Server;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace FlyingFish.server.Controllers
{
    enum MenuCategoryEnum
    {
        fishandchips,
        setmeals,
        tapas
    }

    [EnableCors(Consts.MyAllowSpecificOrigins)]
    [ApiController]
    [Route("api/[controller]")]
    public class MenuItemController : ControllerBase
    {
        private static readonly MenuItem[] Items = new MenuItem[]
        {
            new MenuItem
            {
                Id = "86" ,
                Name = "Cod",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "Deep fried battered cod",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "86", Size = "Regular", SizeDescription = "Regular size cod", Price = 6.80M}
                }
            },
            new MenuItem
            {
                Id = "A" ,
                Name = "Banquet Dinner A",
                Category = MenuCategoryEnum.setmeals.ToString(),
                Description = "Beef with white mushroom,Sweet & sour pork,Chicken mixed vegetables,Egg fried rice",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "A", Size = "Standard", SizeDescription = "For 2 person", Price = 25.90M}
                }
            }
        };

        private readonly ILogger<MenuItemController> _logger;

        public MenuItemController(ILogger<MenuItemController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetMenuItems")]
        public IEnumerable<MenuItem> Get()
        {
            return Items;
        }
    }

    public class MenuItem
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public List<PriceDetail> PriceDetails { get; set; }
        public string? Description { get; set; }
        public string Category { get; set; }
    }

    public class PriceDetail
    {
        public string Id { get; set; }
        public string Size { get; set; }
        public string? SizeDescription { get; set; }
        public decimal Price { get; set; }
    }
}
