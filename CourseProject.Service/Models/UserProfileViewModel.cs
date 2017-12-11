using System;
using System.ComponentModel.DataAnnotations;

namespace CourseProject.Service.Models
{
    public class UserProfileViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public DateTime BornDate { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
    }
}
