using CourseProject.Data;
using System.Threading.Tasks;

namespace CourseProject.Repo
{
    public interface IPatientRepository : IRepository<Patient>
    {
        Task<Patient> GetPatientByName(string name);
    }
}
