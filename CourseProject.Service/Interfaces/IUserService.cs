using CourseProject.Service.Models;
using System.Threading.Tasks;

namespace CourseProject.Service
{
    public interface IUserService
    {
        Task<UserInfo> GetCurrentUserInfo(string username);
        Task<UserViewModel> Register(UserRegistrationModel newUser);
        Task<UserInfo> Login(UserLoginViewModel loginModel);
        Task Logout();
    }
}
