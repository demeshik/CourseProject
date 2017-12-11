using AutoMapper;
using CourseProject.Data;
using CourseProject.Service.Models;

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
        }
    }
}
