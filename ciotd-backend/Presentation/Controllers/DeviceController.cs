using Microsoft.AspNetCore.Mvc;
using CIoTD.Application;
using CIoTD.Domain;
using System.ComponentModel;
using Swashbuckle.AspNetCore.Annotations;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using CIoTD.Infrastructure;
using System.Reflection;
using static System.Runtime.InteropServices.JavaScript.JSType;
using System.Collections;
using System.Security.Policy;
using System.Text.RegularExpressions;

namespace CIoTD.Presentation.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DeviceController: ControllerBase
    {
        private readonly DeviceService _deviceService;

        public DeviceController(DeviceService deviceService)
        {
            _deviceService = deviceService;
        }

        /// <summary></summary>
        /// <returns></returns>
        /// <response code="200">Sucesso</response>
        /// <response code="401">Não autorizado</response>
        /// <response code="500">Erro Interno do Servidor</response>
        [HttpGet]
        [Authorize]
        [SwaggerOperation(Summary = Constants.GetAllDevicesSummary)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IEnumerable<Device>> GetAll()
        {
            return await _deviceService.GetAll();
        }

        /// <summary></summary>
        /// <param name="id">Identificador do dispositivo</param>
        /// <returns></returns>
        /// <response code="200">Sucesso</response>
        /// <response code="401">Não autorizado</response>
        /// <response code="404">Não encontrado</response>
        /// <response code="500">Erro Interno do Servidor</response>
        [HttpGet("{id}")]
        [Authorize]
        [SwaggerOperation(Summary = Constants.GetDeviceByIdSummary)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<Device>> GetById(string id)
        {
            var device = await _deviceService.GetById(id);
            if (device == null)
                return new NotFoundResult();
            return device;
        }

        /// <summary></summary>
        /// <param name="device">Dispositivo</param>
        /// <returns></returns>
        /// <response code="201">Sucesso</response>
        /// <response code="400">Requisição inválida</response>
        /// <response code="401">Não autorizado</response>
        /// <response code="500">Erro Interno do Servidor</response>
        [HttpPost]
        [Authorize]
        [SwaggerOperation(Summary = Constants.PostDeviceSummary)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<Device>> Create(Device device)
        {
            var _device = await _deviceService.Create(device);
            if (_device == null || device == null)
                return BadRequest(new { message = Constants.DeviceBadRequestMessage });
            return _device;
        }

        /// <summary></summary>
        /// <param name="id">Identificador do dispositivo</param>
        /// <param name="device">Dispositivo</param>
        /// <returns></returns>
        /// <response code="204">Sucesso</response>
        /// <response code="401">Não autorizado</response>
        /// <response code="404">Não encontrado</response>
        /// <response code="500">Erro Interno do Servidor</response>
        [HttpPut("{id}")]
        [Authorize]
        [SwaggerOperation(Summary = Constants.PutDeviceSummary)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<Device>> Update(string id, Device device)
        {
            var _device = await _deviceService.Update(id, device);
            if (_device == null)
                return new NotFoundResult();

            return _device;
        }

        /// <summary></summary>
        /// <param name="id">Identificador do dispositivo</param>
        /// <returns></returns>
        /// <response code="200">Sucesso</response>
        /// <response code="401">Não autorizado</response>
        /// <response code="404">Não encontrado</response>
        /// <response code="500">Erro Interno do Servidor</response>
        [HttpDelete("{id}")]
        [Authorize]
        [SwaggerOperation(Summary = Constants.DeleteDeviceSummary)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<Device>> Delete(string id)
        {
            var _device = await _deviceService.Delete(id);
            if (_device == null)
                return new NotFoundResult();

            return _device;
        }
    }
}
