using CourseProject.Service.Models;
using CourseProject.Service.Models.Patient;
using System.Threading.Tasks;

namespace CourseProject.Service.Interfaces
{
    public interface IPatientService
    {
        PatientInfoModel Add(PatientCreationModel patient);
        Task AddCaptures(MedicalCapturesUploadModel captures);
    }
}
