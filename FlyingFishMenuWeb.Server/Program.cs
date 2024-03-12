using FlyingFishMenuWeb.Server;
using Microsoft.AspNetCore.OpenApi;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

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
            policy.WithOrigins("http://localhost:5055", "https://localhost:5173")
            .AllowAnyMethod()
            .AllowAnyHeader();
        }
    );
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

 
app.UseSwagger();
app.UseSwaggerUI();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
}

//app.UseHttpsRedirection();

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
