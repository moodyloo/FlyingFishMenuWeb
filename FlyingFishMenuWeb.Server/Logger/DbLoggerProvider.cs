using Microsoft.Extensions.Options;

namespace FlyingFishMenuWeb.Server.Logger
{
    [ProviderAlias("Database")]
    public class DbLoggerProvider : ILoggerProvider
    {
        public readonly DbLoggerOptions Options;

        public DbLoggerProvider(IOptions<DbLoggerOptions> options)
        {
            Options = options.Value;
        }

        public ILogger CreateLogger(string categoryName)
        {
            return new DbLogger(this);
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
