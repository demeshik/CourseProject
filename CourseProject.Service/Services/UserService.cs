using AutoMapper;
using CourseProject.Data;
using CourseProject.Service.Interfaces;
using CourseProject.Service.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CourseProject.Service.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<User> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly SignInManager<User> signInManager;
        private readonly IMapper mapper;

        public UserService(UserManager<User> userManager, SignInManager<User> signInManager, 
            RoleManager<IdentityRole> roleManager, IMapper mapper)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.signInManager = signInManager;
            this.mapper = mapper;
        }

        public async Task<UserInfo> GetCurrentUserInfo(string username)
        {
            var user = await userManager.FindByNameAsync(username);
            var userRoles = await userManager.GetRolesAsync(user);
            return new UserInfo
            {
                Username = username,
                Roles = (List<string>)userRoles
            };
        }

        public async Task<UserInfo> Login(UserLoginViewModel loginModel)
        {
            var result = await signInManager.PasswordSignInAsync(loginModel.Username, loginModel.Password, loginModel.RememberMe, false);

            if (result.Succeeded)
            {
                var user = await userManager.FindByNameAsync(loginModel.Username);
                var roles = await userManager.GetRolesAsync(user);

                return new UserInfo
                {
                    Username = loginModel.Username,
                    Roles = (List<string>)roles
                };
            }
            else
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
