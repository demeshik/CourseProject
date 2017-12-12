using AutoMapper;
using CourseProject.Data;
using CourseProject.Service.Models;
using CourseProject.Service.Models.Patient;

namespace CourseProject.Service.Infrastructure
{
    public class ServiceProfile:Profile
    {
        public ServiceProfile()
        {
            CreateMap<UserProfileViewModel, UserProfile>();
            CreateMap<UserRegistrationModel, User>();
            CreateMap<User, UserViewModel>();
            CreateMap<UserProfile, UserProfileViewModel>();

            CreateMap<PatientCreationModel, Patient>();
            CreateMap<Patient, PatientCreationModel>();

            CreateMap<Patient, PatientInfoModel>();

            CreateMap<HistoryViewModel, History>();
            CreateMap<History, HistoryViewModel>();

            CreateMap<AnalyzeViewModel, Analyze>();
            CreateMap<Analyze, AnalyzeViewModel>();

            CreateMap<MedicalCaptureViewModel, MedicalCapture>();
            CreateMap<MedicalCapture, MedicalCaptureViewModel>();
        }
    }
}
