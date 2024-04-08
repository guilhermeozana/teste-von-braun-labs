
namespace CIoTD.Infrastructure
{
    public interface IRepository<T>
    {
        Task<List<T>> GetAll();
        Task<T> GetById(string id);
        Task<T> GetByIdCommand(string id, string command);
        Task<T> Create(T entity);
        Task<T> Update(string id, T entity);
        Task<T> Delete(string id);
    }
}
