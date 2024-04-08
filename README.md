# Teste Wernher Von Braun Labs

Frontend da aplicação Community IOT Device (CIoTD) feito em Angular e Angular Material.

## Pré-requisitos

Node.js e npm instalados localmente

Docker instalado (opcional)

## Executando Localmente

### 1. Clonando o Repositório

git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/guilhermeozana/teste-wernher-von-braun-labs.git)

cd teste-wernher-von-braun-labs

### 2. Instalando Dependências

npm install

### 3. Executando o Servidor de Desenvolvimento

ng serve

Acesse http://localhost:4200 no seu navegador para visualizar a aplicação.

## Executando com Docker (opcional)

### 1. Crie a network

docker network create ciotd-network

### 2. Execute o Frontend

docker run -d --name ciotd-frontend -p 4200:80 --network ciotd-network guilhermeozana/ciotd-frontend:latest
  
### 3. Execute o Backend

docker run -d --name ciotd-frontend -p 8000:80 --network ciotd-network guilhermeozana/ciotd-frontend:latest
