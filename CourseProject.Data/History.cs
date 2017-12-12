﻿using System;

namespace CourseProject.Data
{
    public class History:BaseEntity
    {
        public string DeseaseName { get; set; }
        public DateTime StarDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Recommendations { get; set; }
        public Patient Patient { get; set; }
    }
}
