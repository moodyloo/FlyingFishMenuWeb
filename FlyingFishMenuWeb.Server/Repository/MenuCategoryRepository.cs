using FlyingFishMenuWeb.Server.Data;
using FlyingFishMenuWeb.Server.Model;
using Microsoft.EntityFrameworkCore;

namespace FlyingFishMenuWeb.Server.Repository
{
    public class MenuCategoryRepository : IMenuCategoryRepository
    {
        private readonly FlyingFishContext _dbContext;
        public MenuCategoryRepository(FlyingFishContext dbContext) 
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ItemCategory>> GetMenuItemCategories()
        {
            return await _dbContext.ItemCategories.ToListAsync();
        }
    }
}
