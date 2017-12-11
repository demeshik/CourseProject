using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CourseProject.Service.Models
{
    public class UserRegistrationModel
    {
        [Required]
        public string Avatar { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public UserProfileViewModel UserProfile { get; set; }
    }
}
