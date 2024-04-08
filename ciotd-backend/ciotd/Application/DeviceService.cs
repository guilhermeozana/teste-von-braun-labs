using CIoTD.Infrastructure;
using CIoTD.Domain;

namespace CIoTD.Application
{
    public class DeviceService
    {
        private readonly IRepository<Device> _repository;

        public DeviceService(IRepository<Device> repository)
        {
            _repository = repository;
        }

        public Task<List<Device>> GetAll() => _repository.GetAll();
        public Task<Device> GetById(string id) => _repository.GetById(id);
        public Task<Device> GetByIdCommand(string id, string command) => _repository.GetByIdCommand(id, command);
        public Task<Device> Create(Device device) => _repository.Create(device);
        public Task<Device> Update(string id, Device device) => _repository.Update(id, device);
        public Task<Device> Delete(string id) => _repository.Delete(id);
    }
}
