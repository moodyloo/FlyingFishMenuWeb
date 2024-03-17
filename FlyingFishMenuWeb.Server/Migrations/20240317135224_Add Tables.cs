using FlyingFish.server.Model;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FlyingFishMenuWeb.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddTables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ItemCategories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Category_Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemCategories", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MenuItems",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Category_Id = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MenuItems_ItemCategories_Category_Id",
                        column: x => x.Category_Id,
                        principalTable: "ItemCategories",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "MenuItemVariants",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Variant_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<decimal>(type: "decimal(19,4)", nullable: true),
                    MenuItem_Id = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuItemVariants", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MenuItemVariants_MenuItems_MenuItem_Id",
                        column: x => x.MenuItem_Id,
                        principalTable: "MenuItems",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_MenuItems_Category_Id",
                table: "MenuItems",
                column: "Category_Id");

            migrationBuilder.CreateIndex(
                name: "IX_MenuItemVariants_MenuItem_Id",
                table: "MenuItemVariants",
                column: "MenuItem_Id");

            migrationBuilder.InsertData(
                table: "ItemCategories",
                columns: new[] { nameof(ItemCategory.Id), nameof(ItemCategory.Category_Name) },
                values: new object[,] {
                    {1,"fishandchips"},
                    {2, "setmeals"},
                    {3, "tapas"},
                    {4, "drinks"},
                    {5, "sauces" }
                }
            );
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MenuItemVariants");

            migrationBuilder.DropTable(
                name: "MenuItems");

            migrationBuilder.DropTable(
                name: "ItemCategories");
        }
    }
}
