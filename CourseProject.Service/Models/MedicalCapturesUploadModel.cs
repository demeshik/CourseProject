using System.Collections.Generic;

namespace CourseProject.Service.Models
{
    public class MedicalCapturesUploadModel
    {
        public string Patientname { get; set; }
        public List<MedicalCaptureViewModel> Captures { get; set; }
    }
}
