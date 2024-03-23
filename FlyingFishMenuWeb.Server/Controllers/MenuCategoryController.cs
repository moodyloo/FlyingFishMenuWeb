using FlyingFishMenuWeb.Server;
using FlyingFishMenuWeb.Server.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FlyingFishMenuWeb.Server.Model;

namespace FlyingFish.server.Controllers
{
    [EnableCors(Consts.MyAllowSpecificOrigins)]
    [ApiController]
    [Route("api/[controller]")]
    public class MenuCategoryController : ControllerBase
    {
        private readonly ILogger<MenuCategoryController> _logger;
        private readonly FlyingFishContext _appDbContext;

        public MenuCategoryController(ILogger<MenuCategoryController> logger, FlyingFishContext context)
        {
            _logger = logger;
            _appDbContext = context;
        }

        [HttpGet("GetMenuCategories")]
        public async Task<IEnumerable<ItemCategory>> GetMenuCategory()
        {
            try
            {
                var result = await _appDbContext.ItemCategories.ToListAsync();
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return new ItemCategory[0];
            }
        }
    }
}
