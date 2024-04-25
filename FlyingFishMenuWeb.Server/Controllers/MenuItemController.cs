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
    public class MenuItemController : ControllerBase
    {
        private readonly ILogger<MenuItemController> _logger;
        private readonly IMenuItemService _menuItemService;

        public MenuItemController(ILogger<MenuItemController> logger, IMenuItemService menuItemService)
        {
            _logger = logger;
            _menuItemService = menuItemService;
        }

        [HttpGet("GetMenuItems")]
        public async Task<ActionResult<IEnumerable<MenuItem>>> GetMenuItems()
        {
            var result = await _menuItemService.GetMenuItemsOrderByIsVegetarianAndPrice();
            if (result.Count() == 0) return NoContent();

            return Ok(result);
        }

        [HttpGet("GetMenuItem/{id}")]
        public async Task<ActionResult<MenuItem>> GetMenuItem(string id)
        {
            var result = await _menuItemService.GetMenuItem(id);
            if (result != null)
            {
                return Ok(result);
            }
            else return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<MenuItem>> PostMenuItem([FromBody]MenuItem newMenuItem)
        {
            var success = await _menuItemService.AddNewMenuItem(newMenuItem);
            if (success)
            {
                return CreatedAtAction("GetMenuItem", new { id = newMenuItem.Id });
            }
            else
            {
                return Conflict();
            }
        }
    }
}
