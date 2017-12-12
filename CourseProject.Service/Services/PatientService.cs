using AutoMapper;
using CourseProject.Data;
using CourseProject.Repo;
using CourseProject.Service.Interfaces;
using CourseProject.Service.Models;
using CourseProject.Service.Models.Patient;
using System.Threading.Tasks;

namespace CourseProject.Service.Services
{
    public class PatientService : IPatientService
    {
        private IPatientRepository repository;
        private readonly IMapper mapper;

        public PatientService(IPatientRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        public PatientInfoModel Add(PatientCreationModel patient)
        {
            var appPatient = Mapper.Map<PatientCreationModel, Patient>(patient);

            repository.Insert(appPatient);

            var infoPatient = Mapper.Map<Patient, PatientInfoModel>(appPatient);

            return infoPatient;
        }

        public async Task AddCaptures(MedicalCapturesUploadModel captures)
        {
            var appPatient = await repository.GetPatientByName(captures.Patientname);

            foreach (var capture in captures.Captures)
            {
                var appCapture = Mapper.Map<MedicalCaptureViewModel, MedicalCapture>(capture);
                appCapture.Patient = appPatient;

                appPatient.MedicalCaptures.Add(appCapture);
            }

            repository.Update(appPatient);
            repository.SaveChanges();
        }
    }
}
