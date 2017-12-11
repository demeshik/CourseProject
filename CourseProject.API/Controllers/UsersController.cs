using CourseProject.Service;
using CourseProject.Service.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace CourseProject.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    public class UsersController : Controller
    {
        private readonly IUserService userService;

        public UsersController(IUserService userService)
        {
            this.userService = userService;
        }
        
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]UserRegistrationModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var result = await userService.Register(model);

                    return RedirectToAction("Index", "Home");
                }

                return BadRequest();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

    }
}
