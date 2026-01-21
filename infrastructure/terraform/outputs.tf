output "cluster_endpoint" {
  description = "Endereço (URL) para ligar ao cluster Kubernetes"
  value       = aws_eks_cluster.loja_veloz_cluster.endpoint
}

output "cluster_name" {
  description = "Nome do cluster criado"
  value       = aws_eks_cluster.loja_veloz_cluster.name
}

output "vpc_id" {
  description = "ID da rede virtual criada"
  value       = aws_vpc.main_vpc.id
}