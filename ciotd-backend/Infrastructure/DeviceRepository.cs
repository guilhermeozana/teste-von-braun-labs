using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using CIoTD.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace CIoTD.Infrastructure
{
    public class DeviceRepository : IRepository<Device>
    {
        private readonly string _filePath = "devices.json";

        public async Task<List<Device>> GetAll()
        {
            if (!File.Exists(_filePath))
                return new List<Device>();

            await using var fileStream = File.OpenRead(_filePath);
            return await JsonSerializer.DeserializeAsync<List<Device>>(fileStream);
        }

        public async Task<Device> GetById(string id)
        {
            var devices = await GetAll();
            return devices.Find(device => device.Identifier == id);
        }

        public async Task<Device> GetByIdCommand(string id, string command)
        {
            var devices = await GetAll();
            var index = devices.FindIndex(device => device.Identifier == id);
            var device = devices.Find(device => device.Identifier == id);

            // Persiste os dados da volumetria no armazenamento
            if (index != -1)
            {
                devices[index] = device;
                await SaveData(devices);
            }

            return device;
        }

        public async Task<Device> Create(Device entity)
        {
            var devices = await GetAll();
            entity.Identifier = Guid.NewGuid().ToString();
            devices.Add(entity);
            await SaveData(devices);
            return entity;
        }

        public async Task<Device> Update(string id, Device entity)
        {
            var devices = await GetAll();
            var index = devices.FindIndex(device => device.Identifier == id);
            if (index != -1)
            {
                entity.Identifier = id;
                devices[index] = entity;
                await SaveData(devices);
            }
            return entity;
        }

        public async Task<Device> Delete(string id)
        {
            var devices = await GetAll();
            var deviceToRemove = devices.Where(device => device.Identifier == id).FirstOrDefault();

            if (deviceToRemove == null)
                return null;

            devices.Remove(deviceToRemove);
            await SaveData(devices);
            return deviceToRemove;
        }

        private async Task SaveData(List<Device> devices)
        {
            await using var fileStream = File.Create(_filePath);
            await JsonSerializer.SerializeAsync(fileStream, devices);
        }
    }
}
