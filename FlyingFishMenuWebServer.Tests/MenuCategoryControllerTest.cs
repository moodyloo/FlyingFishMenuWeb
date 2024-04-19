using FlyingFish.server.Controllers;
using FlyingFishMenuWeb.Server.Data;
using FlyingFishMenuWeb.Server.Model;
using FlyingFishMenuWeb.Server.Repository;
using FlyingFishMenuWeb.Server.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;

namespace FlyingFishMenuWebServer.Tests
{
    public class MenuCategoryControllerTest
    {
        private Mock<IMenuCategoryService> menuCategoryServiceMock;
        private Mock<ILogger<MenuCategoryController>> loggerMock;
        private MenuCategoryController menuCategoryController;

        List<ItemCategory> menuCategoriesTest = new List<ItemCategory>()
        {
            new ItemCategory
            {
                Id = 1,
                CategoryName = "Fish & Chips",
                IsSetMeal = false,
                ImageUrl = "fish&chips.webp"
            } 
        };

        [SetUp]
        public void Setup()
        {
            loggerMock = new Mock<ILogger<MenuCategoryController>>();
            menuCategoryServiceMock = new Mock<IMenuCategoryService>();
            menuCategoryServiceMock.Setup(x => x.GetMenuItemCategories()).ReturnsAsync(menuCategoriesTest);

            menuCategoryController = new MenuCategoryController(loggerMock.Object,menuCategoryServiceMock.Object);
        }

        [Test]
        public async Task GetMenuCategory_ShouldReturnAllCategories()
        {
            var response = await menuCategoryController.GetMenuCategory();
            var result = response.Result as OkObjectResult;

            Assert.IsNotNull(result);
            Assert.That(result.Value, Is.EqualTo(menuCategoriesTest));
        }
    }
}