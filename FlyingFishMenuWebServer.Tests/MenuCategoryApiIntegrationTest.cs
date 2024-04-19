namespace FlyingFishMenuWebServer.Tests
{
    public class MenuCategoryApiIntegrationTest : IDisposable
    {
        private IntegrationTestWebApplicationFactory _factory;
        private HttpClient _client;

        [OneTimeSetUp]
        public void OneTimeSetup()
        {
            _factory = new IntegrationTestWebApplicationFactory();
        }

        [SetUp]
        public void Setup()
        {
            _client = _factory.CreateClient();
        }

        public void Dispose()
        {
            _factory?.Dispose();
        }

        [Test]
        public async Task GetMenuCategory_ShouldReturn200IfValid()
        {
            string path = "/api/MenuCategory/GetMenuCategories";
            HttpResponseMessage result = await _client.GetAsync(path);
            Assert.True(result.IsSuccessStatusCode);
        }
    }
}