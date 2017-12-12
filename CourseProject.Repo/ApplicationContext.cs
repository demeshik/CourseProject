using CourseProject.Data;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace CourseProject.Repo
{
    public class ApplicationContext: IdentityDbContext<User>
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<User>()
                .HasOne(a => a.UserProfile)
                .WithOne(b => b.User)
                .HasForeignKey<UserProfile>(b => b.UserRef);

            new UserProfileMap(builder.Entity<UserProfile>());
            new PatientMap(builder.Entity<Patient>());
            new HistoryMap(builder.Entity<History>());
            new AnalyzeMap(builder.Entity<Analyze>());
            new MedicalCaptureMap(builder.Entity<MedicalCapture>());
        }
    }
}
