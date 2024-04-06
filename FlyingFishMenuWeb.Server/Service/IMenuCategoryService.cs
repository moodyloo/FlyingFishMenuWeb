using FlyingFishMenuWeb.Server.Model;

namespace FlyingFishMenuWeb.Server.Service
{
    public interface IMenuCategoryService
    {
        Task<IEnumerable<ItemCategory>> GetMenuItemCategories();
    }
}
