using FlyingFish.server.Model;
using Microsoft.EntityFrameworkCore;

namespace FlyingFishMenuWeb.Server.Data
{
    public class AppDbContext : DbContext
    {
        public IConfiguration _config { get; set; }
        public AppDbContext(IConfiguration config)
        {
            _config = config;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseSqlServer(_config["FlyingFishDatabaseConnection"]);
        }

        public DbSet<MenuItem> MenuItems { get; set; }
        public DbSet<MenuItemVariant> MenuItemVariants { get; set; }
        public DbSet<ItemCategory> ItemCategories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MenuItem>()
                .HasMany(e => e.ItemVariants)
                .WithOne(e => e.MenuItem)
                .HasForeignKey(e => e.MenuItem_Id);


            modelBuilder.Entity<MenuItem>()
                .HasOne(e => e.Category)
                .WithMany(e => e.MenuItems)
                .HasForeignKey(e => e.Category_Id)
                .HasPrincipalKey(e => e.Id);
        }
    }
}
