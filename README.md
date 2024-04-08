# Teste Wernher Von Braun Labs

Frontend da aplicação Community IOT Device (CIoTD) feito em Angular e Angular Material.

Tomei a liberdade de criar uma api em C# utilizando .NET para facilitar o desenvolvimento do frontend.

## Pré-requisitos

### Para executar em ambiente local

Node.js, npm e SDK do .NET Framework

### Para executar com docker

Docker instalado (opcional)

## Executando Localmente

### 1. Clonando o Repositório

git clone [[https://github.com/seu-usuario/seu-repositorio.git](https://github.com/guilhermeozana/teste-wernher-von-braun-labs.git)](https://github.com/guilhermeozana/teste-wernher-von-braun-labs.git)

$cd teste-wernher-von-braun-labs

### 2. Instalando Dependências

$npm install

### 3. Executando o Frontend
$ng serve

Acesse http://localhost:4200 no seu navegador para visualizar a aplicação.

### 4. Executando o Backend

cd ciotd-backend

dotnet run

## Executando com Docker (opcional)

### 1. Executando o Docker Compose
  
$docker compose up
