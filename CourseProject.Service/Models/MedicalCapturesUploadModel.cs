using System.Collections.Generic;

namespace CourseProject.Service.Models
{
    public class MedicalCapturesUploadModel
    {
        public int PatientId { get; set; }
        public List<MedicalCaptureViewModel> Captures { get; set; }
    }
}
