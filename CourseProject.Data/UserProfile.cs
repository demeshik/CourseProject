using System;
using System.Collections.Generic;
using System.Text;

namespace CourseProject.Data
{
    public class UserProfile:BaseEntity
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime BornDate { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string UserRef { get; set; }
        public User User { get; set; }
    }
}
