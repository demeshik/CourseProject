using CourseProject.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace CourseProject.Service
{
    public interface IEntityService<T> where T : BaseEntity
    {
        IEnumerable<T> GetAll();
        T Get(int id);
        void Add(T entity);
        void Update(T entity);
        void Delete(int id);
    }
}
