using FlyingFish.server.Controllers;
using FlyingFishMenuWeb.Server.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FlyingFishMenuWeb.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GoogleMapApiController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly ILogger<GoogleMapApiController> _logger;

        public GoogleMapApiController(ILogger<GoogleMapApiController> logger,IConfiguration config)
        {
            _config = config;
            _logger = logger;
        }

        [HttpGet("GetApiKey")]
        public string GetApiKey()
        {
            try
            {
                return _config.GetValue<string>("GoogleMap:Api") ?? "";
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return "";
            }
        }
    }
}
