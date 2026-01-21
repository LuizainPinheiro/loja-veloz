# 1. Define o Provedor
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1" 
}

# 2. Cria uma rede (VPC) para o projeto
resource "aws_vpc" "main_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "vpc-loja-veloz"
  }
}

# 3. Cria uma sub-rede para os servidores
resource "aws_subnet" "main_subnet" {
  vpc_id     = aws_vpc.main_vpc.id
  cidr_block = "10.0.1.0/24"

  tags = {
    Name = "subnet-loja-veloz"
  }
}

# 4. Cria o Cluster de Kubernetes (EKS)

resource "aws_eks_cluster" "loja_veloz_cluster" {
  name     = "loja-veloz-eks"
  role_arn = "arn:aws:iam::123456789012:role/eks-service-role" # Exemplo de Role

  vpc_config {
    subnet_ids = [aws_subnet.main_subnet.id]
  }
}