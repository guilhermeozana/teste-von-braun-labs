# Teste Wernher Von Braun Labs

Frontend da aplicação Community IOT Device (CIoTD) feito em Angular e Angular Material.

Tomei a liberdade de criar uma api em C# utilizando .NET baseada na documentação da API fornecida para facilitar o desenvolvimento do frontend.

## Pré-requisitos

### Para executar em ambiente local

Node.js, npm e SDK do .NET Framework

### Para executar com docker

Docker instalado (opcional)

## Executando Localmente

### 1. Clone o Repositório

$git clone https://github.com/guilhermeozana/teste-wernher-von-braun-labs.git

$cd teste-wernher-von-braun-labs

### 2. Instale as Dependências

$npm install

### 3. Suba o Frontend
$ng serve

Acesse http://localhost:4200 no seu navegador para visualizar a aplicação.

### 4. Suba o Backend

cd ciotd-backend

dotnet run

## Executando com Docker (opcional)

### 1. Inicie os serviços no docker-compose.yml
  
$docker compose up -d

## Acessando a aplicação

Para acessar, abra o navegador e digite o seguinte endereço: http://localhost:4200/login

Faça o login utilizando as seguintes credenciais: 
  - usuário: *admin*
  - senha: *admin*.

## Design e Implementação

A aplicação foi criada visando um design limpo, moderno e intuitivo seguindo as orientações do [Material Design](https://m2.material.io/design).

## Decisões de Design e Implementação

### Arquitetura

O projeto foi dividido em módulos, incluindo um módulo "shared" onde estão localizados todos os itens compartilháveis por toda a aplicação.

### Estilização

Utilizei os recursos de Flexbox e media queries do CSS para deixar o app responsivo, possibilitando o acesso em dispositivos de diferentes tamanhos.

Personalizei o estilo com CSS próprio para garantir uma identidade visual única.

## Sugestões de Melhorias e Avanços Futuros

Implementar melhores funcionalidades de autenticação e autorização.

Separar a estrutura basica do projeto como Sidenav e Menu em componentes separados para facilitar organização e manutenção.

Implementar testes automatizados para garantir a qualidade do código.

Implementar o deploy em um cloud provider.

Implementar alguma ferramenta de CI/CD para automatizar o processo de entrega do software.



