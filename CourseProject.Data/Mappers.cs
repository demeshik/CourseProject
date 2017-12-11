using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace CourseProject.Data
{
    public class UserProfileMap
    {
        public UserProfileMap(EntityTypeBuilder<UserProfile> builder)
        {
            builder.HasKey(t => t.Id);
            builder.Property(t => t.Address).IsRequired();
            builder.Property(t => t.BornDate).IsRequired();
            builder.Property(t => t.Name).IsRequired();
            builder.Property(t => t.Surname).IsRequired();
            builder.Property(t => t.PhoneNumber).IsRequired();
        }
    }

    public class PatientMap
    {
        public PatientMap(EntityTypeBuilder<Patient> builder)
        {
            builder.HasKey(t => t.Id);
            builder.Property(t => t.Address).IsRequired();
            builder.Property(t => t.Age).IsRequired();
            builder.Property(t => t.BornDate).IsRequired();
            builder.Property(t => t.Citizenship).IsRequired();
            builder.Property(t => t.MedicalPhotos).IsRequired();
            builder.Property(t => t.Name).IsRequired();
            builder.Property(t => t.PhoneNumber).IsRequired();
            builder.Property(t => t.Sex).IsRequired();
            builder.Property(t => t.Surname).IsRequired();

            builder.HasMany(c => c.Analyzes)
                .WithOne(p => p.Patient)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }

    public class HistoryMap
    {
        public HistoryMap(EntityTypeBuilder<History> builder)
        {
            builder.HasKey(t => t.Id);
            builder.Property(t => t.DeseaseName).IsRequired();
            builder.Property(t => t.Recommendations).IsRequired();
            builder.Property(t => t.StarDate).IsRequired();
        }
    }

    public class AnalyzeMap
    {
        public AnalyzeMap(EntityTypeBuilder<Analyze> builder)
        {
            builder.HasKey(t => t.Id);
            builder.Property(t => t.Explanation).IsRequired();
            builder.Property(t => t.Name).IsRequired();
            builder.Property(t => t.TotalResult).IsRequired();
        }
    }
}
