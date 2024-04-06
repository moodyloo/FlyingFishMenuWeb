using FlyingFishMenuWeb.Server.Model;

namespace FlyingFishMenuWeb.Server.Service
{
    public interface IMenuItemService
    {
        Task<IEnumerable<MenuItem>> GetMenuItemsOrderByIsVegetarianAndPrice();
        Task<int> DeleteMenuItem(string id);
        Task<int> UpdateMenuItem(MenuItem newMenuItem);
    }
}
