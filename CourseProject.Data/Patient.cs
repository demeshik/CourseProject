using System;
using System.Collections.Generic;
using System.Text;

namespace CourseProject.Data
{
    public class Patient:BaseEntity
    {
        public string Avatar { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime BornDate { get; set; }
        public DateTime? DeathDate { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Citizenship { get; set; }
        public string Sex { get; set; }
        public int Age { get; set; }
        public string MedicalPhotos { get; set; }
        public History History { get; set; }
        public ICollection<Analyze> Analyzes { get; set; }
    }
}
