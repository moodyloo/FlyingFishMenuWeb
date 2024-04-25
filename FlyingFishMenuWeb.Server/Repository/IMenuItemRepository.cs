using FlyingFishMenuWeb.Server.Model;

namespace FlyingFishMenuWeb.Server.Repository
{
    public interface IMenuItemRepository
    {
        Task<MenuItem> GetMenuItem(string id);
        Task<IEnumerable<MenuItem>> GetMenuItemsOrderByIsVegetarianAndPrice();
        Task<int> DeleteMenuItem(string id);
        Task<int> UpdateMenuItem(MenuItem newMenuItem);

        Task<bool> AddNewMenuItem(MenuItem newMenuItem);
    }
}
