using CourseProject.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace CourseProject.Repo
{
    public class PatientRepository : Repository<Patient>, IPatientRepository
    {
        private DbSet<Patient> patients;

        public PatientRepository(ApplicationContext context) : base(context)
        {
            patients = context.Set<Patient>();
        }

        public async Task<Patient> GetPatientByName(string name)
        {
            var patient = await patients.SingleOrDefaultAsync(s => s.Name == name);
            return patient;
        }
    }
}
