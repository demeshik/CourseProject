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