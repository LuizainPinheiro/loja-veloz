variable "region" {
  description = "Região da AWS onde a infraestrutura será criada"
  type        = string
  default     = "us-east-1"
}

variable "cluster_name" {
  description = "Nome do cluster Kubernetes (EKS)"
  type        = string
  default     = "loja-veloz-eks"
}

variable "vpc_cidr" {
  description = "Bloco de IPs para a rede virtual (VPC)"
  type        = string
  default     = "10.0.0.0/16"
}