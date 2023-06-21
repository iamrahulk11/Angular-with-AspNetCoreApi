using AngularPracApi.Modals;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace AngularPracApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : Controller
    {
        private readonly IConfiguration configuration;
        public StudentController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }
        [HttpGet]     
        public IActionResult GetAllStudents()
        {
            SqlConnection con = new SqlConnection(configuration.GetConnectionString("TestDb"));
            List<Student> students = new List<Student>();
            SqlCommand cmd = new SqlCommand("Select * from Student", con);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);

            for (int i = 0; i < dt.Rows.Count; i++)
            {

                Student std = new Student();
                std.AutoId = Convert.ToString(dt.Rows[i].ItemArray[0]);
                std.StudentName = dt.Rows[i].ItemArray[1].ToString();
                std.RollNo = dt.Rows[i].ItemArray[2].ToString();
                std.Contact = dt.Rows[i].ItemArray[3].ToString();
                std.Course = dt.Rows[i].ItemArray[4].ToString();
                std.Address = dt.Rows[i].ItemArray[5].ToString();
                students.Add(std);
            }

           
            return Ok(students);
        }
        [HttpPost]
        public IActionResult AddStudents([FromBody] Student Student)
        {
            try
            {
                var guid = Guid.NewGuid();
                Student.RollNo = Convert.ToString(guid);
                SqlConnection con = new SqlConnection(configuration.GetConnectionString("TestDb"));
                SqlCommand cmd = new SqlCommand("insert into Student(StudentName,RollNo,Contact,Course,Addres) values(@StudentName,@RollNo,@Contact,@Course,@Addres)", con);
                //cmd.CommandType = CommandType.Text;
                cmd.Parameters.Add("@StudentName", SqlDbType.VarChar, 15).Value = Student.StudentName;
                cmd.Parameters.Add("@RollNo", SqlDbType.VarChar, 50).Value = Student.RollNo;
                cmd.Parameters.Add("@Contact", SqlDbType.VarChar, 15).Value = Student.Contact;
                cmd.Parameters.Add("@Course", SqlDbType.VarChar, 15).Value = Student.Course;
                cmd.Parameters.Add("@Addres", SqlDbType.VarChar, 15).Value = Student.Address;
                
                con.Open();
                int check = cmd.ExecuteNonQuery();
                con.Close();
                if (check >= 1)
                {
                    return Ok(Student);
                }
                else
                {
                    return BadRequest(Student);
                }                      
            }
            catch (Exception)
            {
                throw;
            }  
            
        }
    }
}
