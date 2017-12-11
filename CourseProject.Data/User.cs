using System;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Text;

namespace CourseProject.Data
{
    public class User: IdentityUser
    {
        public string Avatar { get; set; }
        public bool IsActivate { get; set; }
        public UserProfile UserProfile { get; set; }
    }
}
