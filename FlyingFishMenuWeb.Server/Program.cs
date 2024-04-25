using FlyingFishMenuWeb.Server;
using FlyingFishMenuWeb.Server.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.Sqlite;
using Windows.Storage;
using FlyingFishMenuWeb.Server.Repository;
using FlyingFishMenuWeb.Server.Service;
using Azure.Identity;
using FlyingFishMenuWeb.Server.Logger;
using Microsoft.Extensions.DependencyInjection;
using Windows.UI.Xaml;

var builder = WebApplication.CreateBuilder(args);


//Add Azure Key Vault
var clientId = builder.Configuration["AzureAD:ClientId"];
var clientSecret = builder.Configuration["AzureAD:ClientSecret"];
var tenantId = builder.Configuration["AzureAD:TenantId"];

builder.Configuration.AddAzureKeyVault(
    new Uri($"https://{builder.Configuration["AzureAD:KeyVaultName"]}.vault.azure.net/"),
    new ClientSecretCredential(tenantId, clientId, clientSecret));

//Database logger
builder.Logging.AddDbLogger(options =>
{
    builder.Configuration.GetSection("Logging").GetSection("Database").GetSection("Options").Bind(options);
});


SqliteConnectionStringBuilder sqliteConnectionString = new SqliteConnectionStringBuilder();
sqliteConnectionString.DataSource = $"{Directory.GetCurrentDirectory()}\\flyingfishsqlite.db";
sqliteConnectionString.DefaultTimeout = 5000;

//Dependency Injections
builder.Services.AddDbContext<FlyingFishContext>(options =>
                   options.UseSqlite(sqliteConnectionString.ConnectionString)//builder.Configuration["FlyingFishDatabaseConnection"])
                   , optionsLifetime: ServiceLifetime.Scoped);


builder.Services.AddScoped<IMenuItemRepository, MenuItemRepository>();
builder.Services.AddScoped<IMenuItemService,MenuItemService>();
builder.Services.AddScoped<IMenuCategoryRepository, MenuCategoryRepository>();
builder.Services.AddScoped<IMenuCategoryService, MenuCategoryService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "FlyingFish API",
        Version = "v1"
    });
});

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: Consts.MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:5173", "http://localhost:5174")
            .AllowAnyMethod()
            .AllowAnyHeader();
        }
    );
});
builder.Services.AddApplicationInsightsTelemetry(new Microsoft.ApplicationInsights.AspNetCore.Extensions.ApplicationInsightsServiceOptions
{
    ConnectionString = builder.Configuration["APPLICATIONINSIGHTS_CONNECTION_STRING"]
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors(Consts.MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.MapGet("/", () => "Hello World!")
.WithName("flyingfish")
.WithOpenApi();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");


app.Run();
