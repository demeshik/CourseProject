using CourseProject.Service.Models;
using CourseProject.Service.Models.Analyze;
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
        void AddCaptures(MedicalCapturesUploadModel captures);
        void AddAnalyzes(AnalyzesUploadModel analyzes);
    }
}
