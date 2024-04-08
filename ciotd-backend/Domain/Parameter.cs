
using Swashbuckle.AspNetCore.Annotations;

namespace CIoTD.Domain
{
    public class Parameter
    {
        [SwaggerSchema(Description = Constants.NameParameterSwaggerSchemaDescription)]
        public string? Name { get; set; }
        [SwaggerSchema(Description = Constants.DescriptionParameterSwaggerSchemaDescription)]
        public string? Description { get; set; }
    }
}
