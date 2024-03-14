using FlyingFishMenuWeb.Server;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace FlyingFish.server.Controllers
{
    enum MenuCategoryEnum
    {
        fishandchips,
        setmeals,
        tapas,
        drinks
    }

    [EnableCors(Consts.MyAllowSpecificOrigins)]
    [ApiController]
    [Route("api/[controller]")]
    public class MenuItemController : ControllerBase
    {
        private static readonly MenuItem[] FishAndChipsItems = new MenuItem[]
        {
            new MenuItem
            {
                Id = "86" ,
                Name = "Cod",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "86", Size = "Regular", SizeDescription = "Regular size cod", Price = 6.80M},
                    new PriceDetail {Id = "87", Size = "Large", SizeDescription = "Large Cod", Price = 8.00M}
                }
            },
            new MenuItem
            {
                Id = "88" ,
                Name = "Rock",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "88", Size = "Regular", SizeDescription = "", Price = 7.00M},
}
            },
            new MenuItem
            {
                Id = "89" ,
                Name = "Haddock",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "89", Size = "Regular", SizeDescription = "", Price = 8.00M},
}
            },
            new MenuItem
            {
                Id = "90" ,
                Name = "Plaice",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "90", Size = "Regular", SizeDescription = "", Price = 8.00M},
}
            },
            new MenuItem
            {
                Id = "91" ,
                Name = "Scampi",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "91", Size = "Regular(14 pieces)", SizeDescription = "", Price = 8.50M},
                }
            },
            new MenuItem
            {
                Id = "92" ,
                Name = "Fish Cake",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "92", Size = "Regular", SizeDescription = "", Price = 2.20M},
                }
            },
            new MenuItem
            {
                Id = "93" ,
                Name = "Code Roe",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "93", Size = "Regular", SizeDescription = "", Price = 2.20M},
                }
            },
            new MenuItem
            {
                Id = "94" ,
                Name = "Pea Fritter",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "94", Size = "Regular", SizeDescription = "", Price = 2.20M},
                }
            },
            new MenuItem
            {
                Id = "95" ,
                Name = "Butter Roll",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "Bread roll with butter applied",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "95", Size = "Regular", SizeDescription = "", Price = 0.80M},
                }
            },
            new MenuItem
            {
                Id = "96" ,
                Name = "Chips",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "96", Size = "Regular", SizeDescription = "", Price = 3.00M},
                    new PriceDetail {Id = "97", Size = "Large", SizeDescription = "", Price = 4.20M},
                }
            },
            new MenuItem
            {
                Id = "98" ,
                Name = "Sausage",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "98", Size = "Plain", SizeDescription = "", Price = 2.60M},
                    new PriceDetail {Id = "98", Size = "Battered", SizeDescription = "", Price = 2.60M},
                    new PriceDetail {Id = "99", Size = "Saveloy", SizeDescription = "", Price = 2.60M},
                }
            },
            new MenuItem
            {
                Id = "100" ,
                Name = "Pie",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "Pukka pie",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "100", Size = "Chicken & Mushroom", SizeDescription = "", Price = 4.00M},
                    new PriceDetail {Id = "101", Size = "Steak & Kidney", SizeDescription = "", Price = 4.00M},
                    new PriceDetail {Id = "102", Size = "Beef & Onion", SizeDescription = "", Price = 4.00M},
                }
            },
            new MenuItem
            {
                Id = "103" ,
                Name = "Pickled product",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "103", Size = "Pickled Onion", SizeDescription = "", Price = 0.80M},
                    new PriceDetail {Id = "104", Size = "Pickled Gherkin", SizeDescription = "", Price = 0.80M},
                    new PriceDetail {Id = "105", Size = "Pickled Egg", SizeDescription = "", Price = 0.80M},
                }
            },
            new MenuItem
            {
                Id = "106" ,
                Name = "Onion Rings",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "106", Size = "7 pieces", SizeDescription = "", Price = 2.20M},
                }
            },
            new MenuItem
            {
                Id = "107" ,
                Name = "Mushy Peas",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "107", Size = "1 Cup", SizeDescription = "", Price = 2.00M},
                }
            },
            new MenuItem
            {
                Id = "108" ,
                Name = "Chicken Nuggets",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "108", Size = "7 pieces", SizeDescription = "", Price = 4.60M},
                }
            },
            new MenuItem
            {
                Id = "109" ,
                Name = "Chicken Leg",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "Quarter Roast Chicken on the bone",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "109", Size = "1 piece", SizeDescription = "", Price = 4.80M},
                }
            },
            new MenuItem
            {
                Id = "110" ,
                Name = "Chicken Wing",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "Quarter Roast Chicken on the bone",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "110", Size = "1 piece", SizeDescription = "", Price = 4.80M},
                }
            },
            new MenuItem
            {
                Id = "111" ,
                Name = "Kids Meal",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "Small Fish Or Fish Cake OR 1/2 Plain Sausage OR 1/2 Batter Sausage OR 4 pieces of chicken nuggets"
                             +" + Kids sized Chips" 
                             +" + Any one soft drink",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "111", Size = "1 kids meal", SizeDescription = "", Price = 5.00M},
                }
            },
            new MenuItem
            {
                Id = "112" ,
                Name = "OAP Meal",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "112", Size = "Fish & Chips (Regular)", SizeDescription = "", Price = 8.00M},
                    new PriceDetail {Id = "112", Size = "1/4 chicken(leg or wing) & chips & curry sauce", SizeDescription = "", Price = 7.50M},
                }
            },
            new MenuItem
            {
                Id = "115" ,
                Name = "Extra Sauce",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "115A", Size = "Sweet & Sour Sauce", SizeDescription = "", Price = 2.00M},
                    new PriceDetail {Id = "115B", Size = "Curry Sauce", SizeDescription = "", Price = 2.00M},
                    new PriceDetail {Id = "115C", Size = "BBQ Sauce", SizeDescription = "", Price = 2.00M},
                    new PriceDetail {Id = "115D", Size = "Black Bean Sauce", SizeDescription = "", Price = 2.00M},
                    new PriceDetail {Id = "115E", Size = "Hoi Sin Sauce", SizeDescription = "", Price = 2.00M},
                    new PriceDetail {Id = "115F", Size = "Satay Sauce", SizeDescription = "", Price = 2.00M},
                    new PriceDetail {Id = "115G", Size = "Gravy", SizeDescription = "", Price = 2.00M},
                    new PriceDetail {Id = "115K", Size = "Sweet Chilli Sauce", SizeDescription = "", Price = 2.00M},
                    new PriceDetail {Id = "115N", Size = "Cashew Nuts", SizeDescription = "", Price = 2.00M},
                }
            },
            new MenuItem
            {
                Id = "116" ,
                Name = "Pineapple Fritter",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "116", Size = "1 slice", SizeDescription = "", Price = 0.80M},
                }
            },
            new MenuItem
            {
                Id = "117" ,
                Name = "Banana Fritter",
                Category = MenuCategoryEnum.fishandchips.ToString(),
                Description = "Banana covered in batter and sweet syrup",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "117", Size = "2 Banana", SizeDescription = "", Price = 4.20M},
                }
            },
            new MenuItem
            {
                Id = "118" ,
                Name = "Drinks",
                Category = MenuCategoryEnum.drinks.ToString(),
                Description = "",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "118A", Size = "Coke", SizeDescription = "", Price = 1.30M},
                    new PriceDetail {Id = "118B", Size = "Diet Coke", SizeDescription = "", Price = 1.30M},
                    new PriceDetail {Id = "118C", Size = "Tango", SizeDescription = "", Price = 1.30M},
                    new PriceDetail {Id = "118D", Size = "7-Up", SizeDescription = "", Price = 1.30M},
                }
            }
        };
        private static readonly MenuItem[] SetMealItems = new MenuItem[]
        {
            new MenuItem
            {
                Id = "A" ,
                Name = "Banquet Dinner A",
                Category = MenuCategoryEnum.setmeals.ToString(),
                Description = "Beef with white mushroom,Sweet & sour pork,Chicken mixed vegetables,Egg fried rice",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "AS", Size = "Standard(2 persons)", SizeDescription = "For 2 persons", Price = 25.90M},
                    new PriceDetail {Id = "AL", Size = "Large(3 persons)", SizeDescription = "For 3 persons", Price = 25.90M}
                }
            },
            new MenuItem
            {
                Id = "B" ,
                Name = "Banquet Dinner B",
                Category = MenuCategoryEnum.setmeals.ToString(),
                Description = "Crispy chilli pork,Chicken with seasonal greens(in oyster sauce),Beef with green pepper in black bean sauce,Egg fried rice,Prawn crackers",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "BS", Size = "Standard(2 persons)", SizeDescription = "For 2 persons", Price = 28.90M},
                    new PriceDetail {Id = "BL", Size = "Large(3 persons)", SizeDescription = "For 3 persons", Price = 35.90M}
                }
            },
            new MenuItem
            {
                Id = "C" ,
                Name = "Banquet Dinner C",
                Category = MenuCategoryEnum.setmeals.ToString(),
                Description = "Tender pork ribs in mandarin sauce,Sweet & sour king prawn(Hong Kong Style),Chicken with cashewnuts(in a light oyster sauce),Beef in black peppercorn sauce,Egg fried rice,Prawn crackers",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "CS", Size = "Standard(2 persons)", SizeDescription = "For 2 persons", Price = 36.90M},
                    new PriceDetail {Id = "CL", Size = "Large(3 persons)", SizeDescription = "For 3 persons", Price = 46.90M}
                }
            },
            new MenuItem
            {
                Id = "D" ,
                Name = "Banquet Dinner D",
                Category = MenuCategoryEnum.setmeals.ToString(),
                Description = "Crispy szechuan aromatic duck(served with spring onions & cucumbers & hoi sin sauce and pancakes),Kung po chilli king prawn(with peanuts),Shredded crispy chilli beef,Grilled peking style chicken,Four vegetable ensemble,Yung chow special egg fried rice",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "DS", Size = "Standard(2-3 persons)", SizeDescription = "For 2-3 persons", Price = 46.90M},
                    new PriceDetail {Id = "DL", Size = "Large(3-4 persons)", SizeDescription = "For 3-4 persons", Price = 56.90M}
                }
            },
            new MenuItem
            {
                Id = "E" ,
                Name = "Banquet Dinner E",
                Category = MenuCategoryEnum.setmeals.ToString(),
                Description = "Crispy szechuan aromatic duck(served with spring onions & cucumbers & hoi sin sauce and pancakes),Prawn toast with sesame seeds, Chicken with cashewnuts, Mou shu pork(Peking Style Egg Foo Yung),Beef with green pepper in black bean sauce, Shredded crispy chilli beef, Sweet & sour king prawn(Hong Kong Style), Seasonal vegetable in oyster sauce,Yung chow special egg fried rice",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "ES", Size = "Standard(4-5 persons)", SizeDescription = "For 4-5 persons", Price = 95.90M},
                    new PriceDetail {Id = "EL", Size = "Large(6-8 persons)", SizeDescription = "For 6-8 persons", Price = 125.90M}
                }
            },
            new MenuItem
            {
                Id = "F" ,
                Name = "Banquet Dinner F",
                Category = MenuCategoryEnum.setmeals.ToString(),
                Description = "Crispy chilli chicken,Thai style green and red chilli curry with beef,Stir fried king prawn in black peppercorn sauce,Singapore style vegetable vermicelli(Rice Noodles),Prawn crackers",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "FS", Size = "Standard(2 persons)", SizeDescription = "For 2 persons", Price = 29.90M},
                    new PriceDetail {Id = "FL", Size = "Large(3 persons)", SizeDescription = "For 3 persons", Price = 39.90M}
                }
            },
            new MenuItem
            {
                Id = "SET1" ,
                Name = "Set meal 1 for one person",
                Category = MenuCategoryEnum.setmeals.ToString(),
                Description = "Sweet & sour pork,Chicken with mushrooms,Egg fried rice",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "SET1", Size = "Standard(1 person)", SizeDescription = "", Price = 10.20M},
                }
            },
            new MenuItem
            {
                Id = "SET2" ,
                Name = "Set meal 2 for one person",
                Category = MenuCategoryEnum.setmeals.ToString(),
                Description = "Sweet & sour chicken,King prawn with black bean sauce,Egg fried rice",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "SET2", Size = "Standard(1 person)", SizeDescription = "", Price = 11.50M},
                }
            },
            new MenuItem
            {
                Id = "SET3" ,
                Name = "Set meal 3 for one person",
                Category = MenuCategoryEnum.setmeals.ToString(),
                Description = "Sweet & sour pork,Chicken egg fried rice",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "SET3", Size = "Standard(1 person)", SizeDescription = "", Price = 8.50M},
                }
            },
            new MenuItem
            {
                Id = "SET4" ,
                Name = "Set meal 4 for one person",
                Category = MenuCategoryEnum.setmeals.ToString(),
                Description = "Four vegetables in crystal sauce(Straw muchrooms & babycorns & chinese leaf & sugar snaps in a light garlic sauce),Steamed rice",
                PriceDetails = new List<PriceDetail>
                {
                    new PriceDetail {Id = "SET4", Size = "Standard(1 person)", SizeDescription = "", Price = 8.00M},
                }
            },
        };

        private readonly ILogger<MenuItemController> _logger;

        public MenuItemController(ILogger<MenuItemController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetMenuItems")]
        public IEnumerable<MenuItem> Get()
        {
            return FishAndChipsItems.Concat<MenuItem>(SetMealItems);
        }
    }

    public class MenuItem
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public List<PriceDetail>? PriceDetails { get; set; }
        public string? Description { get; set; }
        public string? Category { get; set; }
    }

    public class PriceDetail
    {
        public string? Id { get; set; }
        public string? Size { get; set; }
        public string? SizeDescription { get; set; }
        public decimal? Price { get; set; }
    }
}
