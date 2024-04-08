
using Swashbuckle.AspNetCore.Annotations;

namespace CIoTD.Domain
{
    public class CommandDescription
    {
        [SwaggerSchema(Description = Constants.CommandsDescriptionOperationSwaggerSchemaDescription)]
        public string? Operation { get; set; }
        [SwaggerSchema(Description = Constants.CommandsDescriptionDescriptionSwaggerSchemaDescription)]
        public string? Description { get; set; }
        [SwaggerSchema(Description = Constants.CommandsDescriptionCommandSwaggerSchemaDescription)]
        public ECommand Command { get; set; }
        [SwaggerSchema(Description = Constants.CommandsDescriptionResultSwaggerSchemaDescription)]
        public string? Result { get; set; }
        [SwaggerSchema(Description = Constants.CommandsDescriptionFormatSwaggerSchemaDescription)]
        public string? Format { get; set; }
    }
}
