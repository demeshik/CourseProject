using System;
using System.Collections.Generic;

namespace CourseProject.Service.Models
{
    public class PatientViewModel
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
        public ICollection<MedicalCaptureViewModel> MedicalCaptures { get; set; }
        public ICollection<HistoryViewModel> Deseases { get; set; }
        public ICollection<AnalyzeViewModel> Analyzes { get; set; }

    }
}
