using System.ComponentModel.DataAnnotations;

namespace AngularPracApi.Modals
{
    public class Student
    {      
        public string AutoId { get; set; }
        public string StudentName { get; set; }
        public string RollNo { get; set; }
        public string Contact { get; set; }
        public string Course { get; set; }
        public string Address { get; set; }
    }
}
