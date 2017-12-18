using CourseProject.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CourseProject.Repo.Repositories
{
    public class PatientRepository : Repository<Patient>, IPatientRepository
    {
        private DbSet<Patient> patients;

        public PatientRepository(ApplicationContext context) : base(context)
        {
            patients = context.Set<Patient>();
        }

        public Patient GetByIdWithFullInfo(int id)
        {
            Patient patient = patients.Include(p => p.MedicalCaptures)
                .Include(p => p.Deseases)
                .Include(p => p.Analyzes)
                .Where(p => p.Id == id).First();

            return patient;
        }

        public async Task<Patient> GetPatientByName(string name)
        {
            var patient = await patients.SingleOrDefaultAsync(s => s.Name == name);
            return patient;
        }

    }
}
