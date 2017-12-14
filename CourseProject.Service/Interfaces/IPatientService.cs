using CourseProject.Service.Models;
using CourseProject.Service.Models.Patient;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CourseProject.Service.Interfaces
{
    public interface IPatientService
    {
        PatientViewModel Get(int id);
        List<PatientInfoModel> Get(int count, int page);
        PatientInfoModel Add(PatientCreationModel patient);
        Task AddCaptures(MedicalCapturesUploadModel captures);
    }
}
