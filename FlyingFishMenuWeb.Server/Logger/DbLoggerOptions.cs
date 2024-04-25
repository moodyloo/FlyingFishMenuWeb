namespace FlyingFishMenuWeb.Server.Logger
{
    public class DbLoggerOptions
    {
        public string FlyingFishDatabaseConnection { get; init; }
        public string[] LogFields { get; init; }
        public string LogTable { get; init; }
        public DbLoggerOptions()
        {

        }
    }
}
