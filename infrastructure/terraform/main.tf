# 1. Definir o Provedor (Quem vai nos dar os servidores)
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1" # Região da Virgínia (Geralmente a mais barata)
}

# 2. Criar uma rede (VPC) para o nosso projeto "Loja Veloz"
resource "aws_vpc" "main_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "vpc-loja-veloz"
  }
}

# 3. Criar uma sub-rede para os nossos servidores
resource "aws_subnet" "main_subnet" {
  vpc_id     = aws_vpc.main_vpc.id
  cidr_block = "10.0.1.0/24"

  tags = {
    Name = "subnet-loja-veloz"
  }
}

# 4. Criar o Cluster de Kubernetes (EKS - Elastic Kubernetes Service)
# Nota: Esta parte é apenas um exemplo simplificado do recurso
resource "aws_eks_cluster" "loja_veloz_cluster" {
  name     = "loja-veloz-eks"
  role_arn = "arn:aws:iam::123456789012:role/eks-service-role" # Exemplo de Role

  vpc_config {
    subnet_ids = [aws_subnet.main_subnet.id]
  }
}