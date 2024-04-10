using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FlyingFishMenuWeb.Server.Migrations
{
    /// <inheritdoc />
    public partial class Addisunavailablecolumntomenuitemvariant : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsUnavailable",
                table: "MenuItemVariants",
                type: "BIT",
                defaultValue: false,
                nullable: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
        }
    }
}
