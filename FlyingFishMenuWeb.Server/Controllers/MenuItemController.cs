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
            try
            {
                var result = await _menuItemService.GetMenuItemsOrderByIsVegetarianAndPrice();
                if (result.Count() == 0) return NoContent();

                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.ToString());
                var response = new HttpResponseMessage(HttpStatusCode.InternalServerError)
                {
                    Content = new StringContent(string.Format(ex.ToString())),
                    ReasonPhrase = "Exception in backend"
                };
                throw new HttpResponseException(response);
            }
        }
    }
}
