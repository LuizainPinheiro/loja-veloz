#!/bin/bash

# Testes dos microsserviços
echo "========================================="
echo " EXECUTANDO TESTES DOS MICROSSERVIÇOS    "
echo "========================================="

# Testando o serviço de Pedidos
if [ -f "services/pedidos/test.js" ]; then
    echo -e "\n[Executando: Testes de Pedidos]"
    node services/pedidos/test.js
    
    if [ $? -eq 0 ]; then
        echo "Sucesso: Microsserviço validado!"
    else
        echo "Falha: Erro nos testes de Pedidos!"
        exit 1
    fi
else
    echo "Arquivo test.js não encontrado em services/pedidos/"
fi

echo -e "\n========================================="
echo "Validação concluída."