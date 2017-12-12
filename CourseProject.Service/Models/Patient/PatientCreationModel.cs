using System;
using System.ComponentModel.DataAnnotations;

namespace CourseProject.Service.Models
{
    public class PatientCreationModel
    {
        [Required]
        public string Avatar { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        [Required]
        public DateTime BornDate { get; set; }
        public DateTime? DeathDate { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Citizenship { get; set; }
        [Required]
        public string Sex { get; set; }
        [Required]
        public int Age { get; set; }
    }
}
