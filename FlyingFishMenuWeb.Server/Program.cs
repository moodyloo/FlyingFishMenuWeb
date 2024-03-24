using FlyingFishMenuWeb.Server;
using FlyingFishMenuWeb.Server.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.Sqlite;
using Windows.Storage;

var builder = WebApplication.CreateBuilder(args);

/**
var clientId = builder.Configuration["AzureAD:ClientId"];
var clientSecret = builder.Configuration["AzureAD:ClientSecret"];
var tenantId = builder.Configuration["AzureAD:TenantId"];

//Add Azure Key Vault
if (builder.Environment.IsProduction())
{
    builder.Logging.AddConsole();
    builder.Logging.AddDebug();
    builder.Logging.AddAzureWebAppDiagnostics();

    builder.Services.Configure<AzureFileLoggerOptions>(builder.Configuration.GetSection("AzureLogging"));
}

builder.Configuration.AddAzureKeyVault(
    new Uri($"https://{builder.Configuration["AzureAD:KeyVaultName"]}.vault.azure.net/"),
    new ClientSecretCredential(tenantId, clientId, clientSecret));

*/

SqliteConnectionStringBuilder sqliteConnectionString = new SqliteConnectionStringBuilder();
sqliteConnectionString.DataSource = $"{Directory.GetCurrentDirectory()}\\flyingfishsqlite.db";
sqliteConnectionString.DefaultTimeout = 5000;

//Add Db Context
builder.Services.AddDbContext<FlyingFishContext>(options =>
                   options.UseSqlite(sqliteConnectionString.ConnectionString)//builder.Configuration["FlyingFishDatabaseConnection"])
                   , optionsLifetime: ServiceLifetime.Scoped);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
    {
        Title = "Minimal API",
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
