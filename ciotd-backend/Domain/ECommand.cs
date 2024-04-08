
using Swashbuckle.AspNetCore.Annotations;

namespace CIoTD.Domain
{
    public class ECommand
    {
        [SwaggerSchema(Description = Constants.CommandCommandSwaggerSchemaDescription)]
        public string? Command { get; set; }
        [SwaggerSchema(Description = Constants.ParametersCommandSwaggerSchemaDescription)]
        public List<Parameter> Parameters { get; set; }
    }
}
