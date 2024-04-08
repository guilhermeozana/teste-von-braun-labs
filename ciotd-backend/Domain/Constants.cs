

namespace CIoTD.Domain
{
    public class Constants
    {
        public const string APIVersion = "1.0.0";
        public const string APITitle = "Community IoT Device (CIoTD)";
        public const string APIDescription = "A CIoTD é uma plataforma colaborativa para compartilhamento de acesso à dados de dispositivos IoT.Através dela, colaboradores podem cadastrar seus dispositivos, permitindo que qualquer pessoa possa coletar os dados desses dispositivos e utilizar em suas aplicações";
        public const string APIContactName = "Guilherme Campos";
        public const string APIContactUrl = "https://github.com/guilhermeozana";
        public const string APIContactEmail = "guilhermefocampos@gmail.com";
        public const string GetAllDevicesSummary = "Listar todos os dispositivos cadastrados na plataforma";
        public const string PostDeviceSummary = "Cadastrar um novo dispositivo na plataforma";
        public const string GetDeviceByIdSummary = "Retornar os dados de um dispositivo";
        public const string PutDeviceSummary = "Atualizar os dados de um dispositivo";
        public const string DeleteDeviceSummary = "Remover um dispositivo";
        public const string MapDeviceTagName = "Devices";
        public const string PostDeviceBadRequestMessage = "Identificador não pode ser vazio!";
        public const string IdentifierDeviceSwaggerSchemaDescription = "Identificador do dispositivo";
        public const string DescriptionDeviceSwaggerSchemaDescription = "Descrição do dispositivo, incluindo detalhes do seu uso e das informações geradas";
        public const string ManufacturerDeviceSwaggerSchemaDescription = "Nome do fabricante do dispositivo";
        public const string UrlDeviceSwaggerSchemaDescription = "URL de acesso ao dispositivo";
        public const string CommandDeviceSwaggerSchemaDescription = "Lista de comandos disponibilizada pelo dispositivo";
        public const string CommandCommandSwaggerSchemaDescription = "Sequencia de bytes enviados para execução do comando";
        public const string ParametersCommandSwaggerSchemaDescription = "Lista de parâmetros aceitas pelo comando";
        public const string NameParameterSwaggerSchemaDescription = "Nome do parâmetro";
        public const string DescriptionParameterSwaggerSchemaDescription = "Descrição do parâmetro, incluindo detalhes de sua utilização, valores possíveis e funcionamento experado da operação de acordo com esses valores";
        public const string CommandsDescriptionOperationSwaggerSchemaDescription = "Nome da operação executada pelo dispositivo";
        public const string CommandsDescriptionDescriptionSwaggerSchemaDescription = "Descrição e detalhes adicionais sobre a operação e/ou o comando";
        public const string CommandsDescriptionCommandSwaggerSchemaDescription = "Referência ao esquema Command";
        public const string CommandsDescriptionResultSwaggerSchemaDescription = "Descrição do resultado esperado da execução do comando";
        public const string CommandsDescriptionFormatSwaggerSchemaDescription = "Definição do formato dos dados retornados pelo comando";


        public const string AllowedManufacturer = "PredictWeater";
        public const string AllowedCommand = "get_rainfall_intensity";
        public const string DeviceBadRequestMessage = "Dados inválidos para o cadastro do dispositivo";



    }
}
