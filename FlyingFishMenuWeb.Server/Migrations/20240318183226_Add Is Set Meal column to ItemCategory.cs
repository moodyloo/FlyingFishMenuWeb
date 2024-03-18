using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FlyingFishMenuWeb.Server.Migrations
{
    /// <inheritdoc />
    public partial class AddIsSetMealcolumntoItemCategory : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>("IsSetMeal","ItemCategories",nullable: false,type: "bit", defaultValue: "0");
           
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
        }
    }
}
