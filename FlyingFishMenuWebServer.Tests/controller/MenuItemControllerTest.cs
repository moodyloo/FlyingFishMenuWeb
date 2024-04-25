using FlyingFish.server.Controllers;
using FlyingFishMenuWeb.Server.Data;
using FlyingFishMenuWeb.Server.Model;
using FlyingFishMenuWeb.Server.Repository;
using FlyingFishMenuWeb.Server.Service;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using Moq.EntityFrameworkCore;
using System.Collections.Generic;
using System.Web.Http;

namespace FlyingFishMenuWebServer.Tests.controller
{
    public class MenuItemControllerTest
    {
        private Mock<IMenuItemService> menuItemServiceMock;
        private Mock<ILogger<MenuItemController>> loggerMock;
        private MenuItemController menuItemController;

        List<MenuItem> menuItemsTest = new List<MenuItem>()
        {
            new MenuItem
            {
                Id = "1",
                Name = "Fish",
                Category = new ItemCategory
                {
                    Id = 1, CategoryName = "Fish & Chips",IsSetMeal = false,ImageUrl = "fish&chips.webp"
                },
                CategoryId = 1,
                Description = "yummy fish",
                IsPopular = true,
                IsVegetarian = false,
                MenuItemVariants = new List<MenuItemVariant>()
                {
                    new MenuItemVariant
                    {
                        Id = "1S",
                        IsUnavailable = false,
                        IsVegetarian = false,
                        MenuItemId = "1",
                        Price = 5,
                        VariantName = "Small Fish"
                    }
                }
            }
        };

        [SetUp]
        public void Setup()
        {
            loggerMock = new Mock<ILogger<MenuItemController>>();
            menuItemServiceMock = new Mock<IMenuItemService>();
            menuItemServiceMock.Setup(x => x.GetMenuItemsOrderByIsVegetarianAndPrice()).ReturnsAsync(menuItemsTest);

            menuItemController = new MenuItemController(loggerMock.Object, menuItemServiceMock.Object);
        }

        [Test]
        public async Task GetMenuItems_ShouldReturnAllItems()
        {
            var response = await menuItemController.GetMenuItems();
            var result = response.Result as OkObjectResult;

            Assert.That(result, Is.Not.Null);
            Assert.That(result.Value, Is.EqualTo(menuItemsTest));
        }

        [Test]
        [TestCase("1")]
        public async Task GetMenuItem_ShouldReturnCorrectItemById(string id)
        {
            var response = await menuItemController.GetMenuItem(id);
            var result = response.Result as OkObjectResult;

            Assert.That(result, Is.Not.Null);
            Assert.That(result.Value, Is.EqualTo(menuItemsTest));
        }

        [Test]
        [TestCase("wrong")]
        public async Task GetMenuItem_ShouldReturnNothingForNonExistingItem(string id)
        {
            var response = await menuItemController.GetMenuItem(id);
            var result = response.Result as NotFoundResult;

            Assert.That(result, Is.Not.Null);
        }
    }
}