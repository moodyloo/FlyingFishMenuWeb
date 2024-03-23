using FlyingFishMenuWeb.Server;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FlyingFishMenuWeb.Server.Model;
using FlyingFishMenuWeb.Server.Data;

namespace FlyingFish.server.Controllers
{
    [EnableCors(Consts.MyAllowSpecificOrigins)]
    [ApiController]
    [Route("api/[controller]")]
    public class MenuItemController : ControllerBase
    {
        private readonly ILogger<MenuItemController> _logger;
        private readonly FlyingFishContext _appDbContext;

        public MenuItemController(ILogger<MenuItemController> logger, FlyingFishContext context)
        {
            _logger = logger;
            _appDbContext = context;
        }

        [HttpGet("GetMenuItems")]
        public async Task<IEnumerable<MenuItem>> GetMenuItems()
        {
            try
            {
                var result = await _appDbContext.MenuItems
                    .Include(e => e.MenuItemVariants)
                    .Include(e => e.Category)
                    .ToListAsync();

                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return new MenuItem[0];
            }
        }
    }
}
