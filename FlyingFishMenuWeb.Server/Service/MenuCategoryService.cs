using FlyingFishMenuWeb.Server.Model;
using FlyingFishMenuWeb.Server.Repository;

namespace FlyingFishMenuWeb.Server.Service
{
    public class MenuCategoryService : IMenuCategoryService
    {
        private readonly IMenuCategoryRepository _menuCategoryRepository;

        public MenuCategoryService(IMenuCategoryRepository menuCategoryRepository) 
        {
            _menuCategoryRepository = menuCategoryRepository;
        }

        public async Task<IEnumerable<ItemCategory>> GetMenuItemCategories()
        {
            return await _menuCategoryRepository.GetMenuItemCategories();
        }
    }
}
