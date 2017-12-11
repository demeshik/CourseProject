using CourseProject.Data;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

//TODO: Rewrite users

namespace CourseProject.Web.Infrastructure
{
    public class Initializer
    {
        public static async Task InitializeAsync(UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            if (await roleManager.FindByNameAsync("administrator") == null)
            {
                await roleManager.CreateAsync(new IdentityRole("administrator"));
            }
            if (await roleManager.FindByNameAsync("doctor") == null)
            {
                await roleManager.CreateAsync(new IdentityRole("doctor"));
            }
            if (await roleManager.FindByNameAsync("nurse") == null)
            {
                await roleManager.CreateAsync(new IdentityRole("nurse"));
            }

            User appUser = await userManager.FindByNameAsync("demeshchik");
            User docUser = await userManager.FindByNameAsync("koptevich");

            await userManager.AddToRoleAsync(appUser, "administrator");
            await userManager.AddToRoleAsync(docUser, "doctor");

        }
    }
}
