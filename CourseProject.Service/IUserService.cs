using CourseProject.Service.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CourseProject.Service
{
    public interface IUserService
    {
        Task<UserViewModel> Register(UserRegistrationModel newUser);
        Task Login(UserLoginViewModel loginModel);
        Task Logout();
    }
}
