using System;
using System.Collections.Generic;
using System.Text;

namespace CourseProject.Data
{
    public class MedicalCapture:BaseEntity
    {
        public string Type { get; set; }
        public DateTime Time { get; set; }
        public string Url { get; set; }
        public Patient Patient { get; set; }
    }
}
