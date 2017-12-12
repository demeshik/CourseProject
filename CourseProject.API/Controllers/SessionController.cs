using CourseProject.Service.Interfaces;
using CourseProject.Service.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using System.Threading.Tasks;

namespace CourseProject.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Session")]
    public class SessionController : Controller
    {
        private readonly IUserService userService;

        public SessionController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet]
        public async Task<IActionResult> Me()
        {
            if (User.Identity.IsAuthenticated)
            {
                var result = await userService.GetCurrentUserInfo(User.Identity.Name);

                return Ok(result);
            }

            return StatusCode((int)HttpStatusCode.Unauthorized);
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody]UserLoginViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var userInfo = await userService.Login(model);

                    return Ok(userInfo);
                }

                return BadRequest();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Logout()
        {
            await userService.Logout();
            return RedirectToAction("Index", "Home");
        }
    }
}