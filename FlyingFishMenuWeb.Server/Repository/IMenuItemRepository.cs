using FlyingFishMenuWeb.Server.Model;

namespace FlyingFishMenuWeb.Server.Repository
{
    public interface IMenuItemRepository
    {
        Task<IEnumerable<MenuItem>> GetMenuItemsOrderByIsVegetarianAndPrice();
        Task<int> DeleteMenuItem(string id);
        Task<int> UpdateMenuItem(MenuItem newMenuItem);
    }
}
