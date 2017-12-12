using System.Collections.Generic;

namespace CourseProject.Service.Models
{
    public class HistoryUploadModel
    {
        public string Patientname { get; set; }
        public List<HistoryViewModel> Captures { get; set; }
    }
}
