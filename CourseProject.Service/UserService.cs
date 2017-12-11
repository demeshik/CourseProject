using AutoMapper;
using CourseProject.Data;
using CourseProject.Service.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;

namespace CourseProject.Service
{
    public class UserService : IUserService
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly IMapper mapper;

        public UserService(UserManager<User> userManager, SignInManager<User> signInManager, IMapper mapper)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.mapper = mapper;
        }

        public async Task Login(UserLoginViewModel loginModel)
        {
            var result = await signInManager.PasswordSignInAsync(loginModel.Username, loginModel.Password, loginModel.RememberMe, false);

            if (!result.Succeeded)
            {
                throw new ArgumentException("Invalid user credentials");
            }
        }

        public async Task Logout()
        {
            await signInManager.SignOutAsync();
        }

        public async Task<UserViewModel> Register(UserRegistrationModel model)
        {
            var user = mapper.Map<UserRegistrationModel, User>(model);

            var result = await userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                await signInManager.SignInAsync(user, false);
                return mapper.Map<User, UserViewModel>(user);
            }
            else
            {
                throw new ArgumentException("Registration wasn't successfull");
            }
        }
    }
}
