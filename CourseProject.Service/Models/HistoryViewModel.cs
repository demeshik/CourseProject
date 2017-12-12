using System;
using System.Collections.Generic;
using System.Text;

namespace CourseProject.Service.Models
{
    public class HistoryViewModel
    {
        public string DeseaseName { get; set; }
        public DateTime StarDate { get; set; }
        public DateTime? EndDate { get; set; }
        public string Recommendations { get; set; }
    }
}
