using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace FlyingFish.server.Model
{
    public class MenuItem
    {
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string Description { get; set; }
        public bool? IsPopular { get; set; }
        public ICollection<MenuItemVariant>? ItemVariants { get; set; }
        public int? Category_Id { get; set; }
        public ItemCategory? Category { get; set; }
    }

    public class ItemCategory
    {
        public int? Id { get; set; }
        public string? Category_Name { get; set; }
        public bool? IsSetMeal { get; set; }
        public string? ImageUrl { get; set; }
        [JsonIgnore]
        public ICollection<MenuItem>? MenuItems { get; set; }
    }

    public class MenuItemVariant
    {
        public string? Id { get; set; }
        public string? Variant_Name { get; set; }
        [Column(TypeName = "decimal(19,4)")]
        public decimal? Price { get; set; }


        public string? MenuItem_Id { get; set; }
        [JsonIgnore]
        public MenuItem? MenuItem { get; set; }
    }
}