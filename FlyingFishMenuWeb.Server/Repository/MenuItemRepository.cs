using FlyingFishMenuWeb.Server.Data;
using FlyingFishMenuWeb.Server.Model;
using Microsoft.EntityFrameworkCore;
using System.Text.RegularExpressions;

namespace FlyingFishMenuWeb.Server.Repository
{
    public class MenuItemRepository : IMenuItemRepository
    {
        private readonly FlyingFishContext _dbContext;

        public MenuItemRepository(FlyingFishContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<int> DeleteMenuItem(string id)
        {
            var numberOfRowsDeleted = _dbContext.MenuItems.Where(x => x.Id == id).ExecuteDelete();
            await _dbContext.SaveChangesAsync();
            return numberOfRowsDeleted;
        }

        public async Task<IEnumerable<MenuItem>> GetMenuItemsOrderByIsVegetarianAndPrice()
        {
            return await _dbContext.MenuItems
                    .Include(e => e.Category)
                    .Include(i => i.MenuItemVariants.OrderBy(v => v.IsVegetarian).ThenBy(v => v.Price))
                    .ToListAsync();
        }

        public async Task<int> UpdateMenuItem(MenuItem newMenuItem)
        {
            var numberOfUpdated = _dbContext.MenuItems.ExecuteUpdate(setters => setters
            .SetProperty(b => b.Id, newMenuItem.Id)
            .SetProperty(b => b.Name, newMenuItem.Name)
            .SetProperty(b => b.IsVegetarian, newMenuItem.IsVegetarian)
            .SetProperty(b => b.MenuItemVariants, newMenuItem.MenuItemVariants)
            .SetProperty(b => b.IsPopular, newMenuItem.IsPopular)
            .SetProperty(b => b.Description, newMenuItem.Description)
            .SetProperty(b => b.CategoryId, newMenuItem.CategoryId)
            .SetProperty(b => b.Category, newMenuItem.Category));
            await _dbContext.SaveChangesAsync();
            return numberOfUpdated;
        }
    }
}
