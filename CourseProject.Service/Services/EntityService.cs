using CourseProject.Data;
using CourseProject.Repo;
using System;
using System.Collections.Generic;
using System.Text;

namespace CourseProject.Service
{
    public class EntityService<T> : IEntityService<T> where T : BaseEntity
    {
        private IRepository<T> repository;

        public EntityService(IRepository<T> repository)
        {
            this.repository = repository;
        }

        public void Add(T entity)
        {
            repository.Insert(entity);
        }

        public void Delete(int id)
        {
            T entity = Get(id);
            repository.Remove(entity);
            repository.SaveChanges();
        }

        public T Get(int id)
        {
            return repository.Get(id);
        }

        public IEnumerable<T> GetAll()
        {
            return repository.GetAll();
        }

        public void Update(T entity)
        {
            repository.Update(entity);
            repository.SaveChanges();
        }
    }
}
