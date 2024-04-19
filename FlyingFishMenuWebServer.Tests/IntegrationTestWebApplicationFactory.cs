using FlyingFishMenuWeb.Server;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.Configuration;

namespace FlyingFishMenuWebServer.Tests
{
    internal class IntegrationTestWebApplicationFactory : WebApplicationFactory<Program>
    {
        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureAppConfiguration((host, configurationBuilder) =>
            {
                configurationBuilder.Sources.Clear();

                configurationBuilder.AddInMemoryCollection(
                    new Dictionary<string, string?>
                    {
                        { "urls", "http://localhost" }
                    });
            });
        }
    }
}
