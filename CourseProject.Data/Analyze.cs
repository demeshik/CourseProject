using System;
using System.Collections.Generic;
using System.Text;

namespace CourseProject.Data
{
    public class Analyze: BaseEntity
    {
        public string Name { get; set; }
        public string TotalResult { get; set; }
        public string Explanation { get; set; }
        public Patient Patient { get; set; }
    }
}
