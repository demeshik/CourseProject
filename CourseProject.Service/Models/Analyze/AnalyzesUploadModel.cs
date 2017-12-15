using System;
using System.Collections.Generic;
using System.Text;

namespace CourseProject.Service.Models.Analyze
{
    public class AnalyzesUploadModel
    {
        public int PatientId { get; set; }
        public List<AnalyzeViewModel> Analyzes { get; set; }

        public AnalyzesUploadModel()
        {
            Analyzes = new List<AnalyzeViewModel>();
        }
    }
}
