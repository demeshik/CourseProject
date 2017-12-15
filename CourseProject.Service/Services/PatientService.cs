using AutoMapper;
using CourseProject.Data;
using CourseProject.Repo;
using CourseProject.Service.Interfaces;
using CourseProject.Service.Models;
using CourseProject.Service.Models.Analyze;
using CourseProject.Service.Models.Patient;
using System.Collections.Generic;
using System.Linq;
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

        public void AddCaptures(MedicalCapturesUploadModel captures)
        {
            var appPatient = repository.Get(captures.PatientId);

            foreach (var capture in captures.Captures)
            {
                var appCapture = Mapper.Map<MedicalCaptureViewModel, MedicalCapture>(capture);
                appCapture.Patient = appPatient;

                appPatient.MedicalCaptures.Add(appCapture);
            }

            repository.Update(appPatient);
            repository.SaveChanges();
        }

        public void AddAnalyzes(AnalyzesUploadModel analyzes)
        {
            var appPatient = repository.Get(analyzes.PatientId);

            foreach (var analyze in analyzes.Analyzes)
            {
                var appAnalyze = Mapper.Map<AnalyzeViewModel, Analyze>(analyze);
                appAnalyze.Patient = appPatient;

                appPatient.Analyzes.Add(appAnalyze);
            }

            repository.Update(appPatient);
            repository.SaveChanges();
        }

        public PatientViewModel Get(int id)
        {
            Patient patient = repository.Get(id);
            return mapper.Map<Patient, PatientViewModel>(patient);
        }

        public List<PatientInfoModel> Get(int count, int page)
        {
            var patients = repository.GetAll().Skip((page - 1) * count).Take(count).ToList();
            var patientsInfo = new List<PatientInfoModel>();

            foreach (Patient patient in patients)
            {
                patientsInfo.Add(mapper.Map<Patient, PatientInfoModel>(patient));
            }

            return patientsInfo;
        }

    }
}
