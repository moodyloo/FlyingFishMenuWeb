using FlyingFishMenuWeb.Server;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using FlyingFishMenuWeb.Server.Model;
using FlyingFishMenuWeb.Server.Service;

using HttpResponseMessage = System.Net.Http.HttpResponseMessage;
using HttpStatusCode = System.Net.HttpStatusCode;
using HttpResponseException = System.Web.Http.HttpResponseException;

namespace FlyingFish.server.Controllers
{
    [EnableCors(Consts.MyAllowSpecificOrigins)]
    [ApiController]
    [Route("api/[controller]")]
    public class MenuCategoryController : ControllerBase
    {
        private readonly ILogger<MenuCategoryController> _logger;
        private readonly IMenuCategoryService _menuCategoryService;

        public MenuCategoryController(ILogger<MenuCategoryController> logger, IMenuCategoryService menuCategoryService)
        {
            _logger = logger;
            _menuCategoryService = menuCategoryService;
        }

        [HttpGet("GetMenuCategories")]
        public async Task<ActionResult<IEnumerable<ItemCategory>>> GetMenuCategory()
        {
            var result = await _menuCategoryService.GetMenuItemCategories();

            if (result.Count() == 0) return NoContent();

            return Ok(result);
        }
    }
}
