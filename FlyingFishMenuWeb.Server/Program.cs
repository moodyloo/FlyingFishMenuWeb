using FlyingFishMenuWeb.Server;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
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

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
        options.RoutePrefix = string.Empty;
    });
}

//app.UseHttpsRedirection();

app.UseCors(Consts.MyAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.Run();
