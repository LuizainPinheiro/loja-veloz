🚀 Loja Veloz - Microserviços & Cloud Native

Este projeto é uma plataforma de e-commerce baseada em arquitetura de microsserviços, projetada para ser escalável, resiliente e totalmente automatizada.

🏗️ Arquitetura

A aplicação é dividida em 4 serviços principais:

API Gateway: Ponto de entrada único para a aplicação.

Pedidos (Order Service): Gestão de compras e integração com base de dados.

Estoque (Inventory Service): Controlo de disponibilidade de produtos.

Pagamentos (Payment Service): Processamento de transações.

📦 Imagens Docker Publicadas

As imagens oficiais deste projeto estão disponíveis no Docker Hub:

api-gateway

pedidos

estoque

pagamentos

🛠️ Tecnologias Utilizadas

Backend: Node.js

Containerização: Docker

CI/CD: GitHub Actions (Automático via Push)

🚀 Como Executar Localmente

docker-compose up --build


A API ficará disponível em http://localhost:8080.

🤖 Pipeline de CI/CD

O projeto utiliza GitHub Actions para:

Realizar o Login seguro no Docker Hub.

Construir as imagens para a arquitetura Linux.

Publicar automaticamente no perfil luiza12pp.