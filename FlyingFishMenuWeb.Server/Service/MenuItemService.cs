using FlyingFishMenuWeb.Server.Model;
using FlyingFishMenuWeb.Server.Repository;
using System.Text.RegularExpressions;

namespace FlyingFishMenuWeb.Server.Service
{
    public class MenuItemService : IMenuItemService
    {
        private readonly IMenuItemRepository _menuItemRepository;

        public MenuItemService(IMenuItemRepository menuItemRepository)
        {
            _menuItemRepository = menuItemRepository;
        }

        public Task<int> DeleteMenuItem(string id)
        {
            throw new NotImplementedException();
        }

        public async Task<MenuItem> GetMenuItem(string id)
        {
            return await _menuItemRepository.GetMenuItem(id);
        }

        public async Task<IEnumerable<MenuItem>> GetMenuItemsOrderByIsVegetarianAndPrice()
        {
            var result = await _menuItemRepository.GetMenuItemsOrderByIsVegetarianAndPrice();

            return result.OrderBy(m => ConvertMenuItemIdToNumerical(m.Id));
        }

        public Task<int> UpdateMenuItem(MenuItem newMenuItem)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> AddNewMenuItem(MenuItem newMenuItem)
        {
            var existingMenuItem = await GetMenuItem(newMenuItem.Id);
            if (existingMenuItem != null)
            {
                return false;
            }
            else
            {
                await _menuItemRepository.AddNewMenuItem(newMenuItem);
                return true;
            }
        }


        //Convert Menu item id to numerical value
        private int ConvertMenuItemIdToNumerical(string menuItemId)
        {
            var regex = new Regex("([a-z]|[A-Z]|[-])+");

            if (int.TryParse(regex.Replace(menuItemId, ""), out int result))
            {
                return result;
            }
            else
            {
                return int.MaxValue;
            }
        }
    }
}
