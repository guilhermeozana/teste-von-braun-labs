
using Swashbuckle.AspNetCore.Annotations;

namespace CIoTD.Domain
{
    public class Device
    {
        [SwaggerSchema(Description = Constants.IdentifierDeviceSwaggerSchemaDescription)]
        public string? Identifier { get; set; }
        [SwaggerSchema(Description = Constants.DescriptionDeviceSwaggerSchemaDescription)]
        public string? Description { get; set; }
        [SwaggerSchema(Description = Constants.ManufacturerDeviceSwaggerSchemaDescription)]
        public string? Manufacturer { get; set; }
        [SwaggerSchema(Description = Constants.UrlDeviceSwaggerSchemaDescription)]
        public string? Url { get; set; }
        [SwaggerSchema(Description = Constants.CommandDeviceSwaggerSchemaDescription)]
        public List<CommandDescription> Commands { get; set; }
    }
}
