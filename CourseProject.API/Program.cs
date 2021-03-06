using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace CourseProject.API
{
    public class Program
    {
        public static void Main(string[] args)
        {

            BuildWebHost(args).Run();

            /* var host = BuildWebHost(args);

            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    var userManager = services.GetRequiredService<UserManager<User>>();
                    var rolesManager = services.GetRequiredService<RoleManager<IdentityRole>>();
                    Task.Run(async () =>
                    {
                        await Initializer.InitializeAsync(userManager, rolesManager);
                    }).GetAwaiter().GetResult();
                    
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occured while seeding the database");
                }
            }

            host.Run(); 
            */
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
