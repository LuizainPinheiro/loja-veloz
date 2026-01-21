🚀 Loja Veloz - Microserviços & Cloud Native

Este projeto é uma plataforma de e-commerce baseada em arquitetura de microsserviços, projetada para ser escalável, resiliente e totalmente automatizada.

🏗️ Arquitetura

A aplicação é dividida em 4 serviços principais:

API Gateway: Ponto de entrada único para a aplicação.

Pedidos (Order Service): Gestão de compras e integração com base de dados.

Estoque (Inventory Service): Controlo de disponibilidade de produtos.

Pagamentos (Payment Service): Processamento de transações.

🛠️ Tecnologias Utilizadas

Backend: Node.js

Containerização: Docker & Docker Compose

Orquestração: Kubernetes (EKS na AWS)

Infraestrutura como Código: Terraform

CI/CD: GitHub Actions

🚀 Como Executar Localmente

Para rodar todo o ecossistema na sua máquina, utilize o Docker Compose:

docker-compose up --build


A API ficará disponível em http://localhost:8080 (via API Gateway).

☁️ Deploy na Nuvem

A infraestrutura é gerida pelo Terraform na pasta /infrastructure/terraform.
Para provisionar o cluster Kubernetes:

terraform init

terraform plan

terraform apply

🤖 Automação (CI/CD)

O projeto utiliza GitHub Actions para:

Validar o código: Roda testes e verificações de sintaxe.

Construir imagens Docker: Gera as imagens de cada serviço automaticamente.

Enviar para o Docker Hub: Armazena as imagens usando os Secrets (DOCKERHUB_USERNAME e DOCKERHUB_TOKEN).

Atualizar o cluster Kubernetes: Aplica as novas imagens no ambiente de produção.