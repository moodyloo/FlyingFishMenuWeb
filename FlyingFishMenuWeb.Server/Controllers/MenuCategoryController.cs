using FlyingFish.server.Model;
using FlyingFishMenuWeb.Server;
using FlyingFishMenuWeb.Server.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FlyingFish.server.Controllers
{
    [EnableCors(Consts.MyAllowSpecificOrigins)]
    [ApiController]
    [Route("api/[controller]")]
    public class MenuCategoryController : ControllerBase
    {
        private readonly ILogger<MenuCategoryController> _logger;
        private readonly AppDbContext _appDbContext;

        public MenuCategoryController(ILogger<MenuCategoryController> logger, AppDbContext context)
        {
            _logger = logger;
            _appDbContext = context;
        }

        [HttpGet("GetMenuCategories")]
        public async Task<IEnumerable<ItemCategory>> GetMenuCategory()
        {
            try
            {
                return await _appDbContext.ItemCategories.ToListAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return null;
            }
        }
    }
}
