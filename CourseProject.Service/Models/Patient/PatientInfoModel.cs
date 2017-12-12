using System;
using System.Collections.Generic;
using System.Text;

namespace CourseProject.Service.Models.Patient
{
    public class PatientInfoModel
    {
        public int Id { get; set; }
        public string Avatar { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime BornDate { get; set; }
    }
}
