using FlyingFishMenuWeb.Server.Model;

namespace FlyingFishMenuWeb.Server.Repository
{
    public interface IMenuCategoryRepository
    {
        Task<IEnumerable<ItemCategory>> GetMenuItemCategories();
    }
}
