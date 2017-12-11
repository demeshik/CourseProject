using CourseProject.Data;
using CourseProject.Service;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CourseProject.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Patients")]
    public class PatientsController : Controller
    {
        private readonly IEntityService<Patient> entityService;

        public PatientsController(IEntityService<Patient> entityService)
        {
            this.entityService = entityService;
        }

        [HttpGet]
        public IActionResult Index()
        {
            var str = "hello, my dear passengers!";
            return Ok();
        }
    }
}