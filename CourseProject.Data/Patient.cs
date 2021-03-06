﻿using System;
using System.Collections.Generic;

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
        public ICollection<MedicalCapture> MedicalCaptures { get; set; }
        public ICollection<History> Deseases { get; set; }
        public ICollection<Analyze> Analyzes { get; set; }

        public Patient()
        {
            MedicalCaptures = new List<MedicalCapture>();
            Deseases = new List<History>();
            Analyzes = new List<Analyze>();
        }
    }
}
