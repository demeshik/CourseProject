using CourseProject.Service.Interfaces;
using CourseProject.Service.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CourseProject.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Patients")]
    public class PatientsController : Controller
    {
        private readonly IPatientService patientService;

        public PatientsController(IPatientService patientService)
        {
            this.patientService = patientService;
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult Get(int id)
        {
            if (id <= 0) return BadRequest("Invalid argument");

            var patientInfo = patientService.Get(id);

            return Ok(patientInfo);
        }

        [HttpGet]
        public IActionResult Get(int count, int page)
        {
            if (count < 0 || page <= 0) return BadRequest("Invalid arguments");

            var data = patientService.Get(count, page);
            return Ok(data);
        }

        [HttpPost]
        public IActionResult Index([FromBody]PatientCreationModel newPatient)
        {
            if (ModelState.IsValid)
            {
                var patientInfo = patientService.Add(newPatient);
                return Ok(patientInfo);
            }

            return BadRequest(ModelState);
        }

        [HttpPost]
        [Route("[action]")]
        public async Task<IActionResult> Captures([FromBody]MedicalCapturesUploadModel newCaptures)
        {
            await patientService.AddCaptures(newCaptures);
            return Ok();
        }
    }
}