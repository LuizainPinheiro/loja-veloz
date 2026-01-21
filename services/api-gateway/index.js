const express = require('express');
const http = require('http');
const app = express();
const PORT = 8080;

// Função para redirecionar as chamadas para os serviços internos
const proxyRequest = (host, port, path, res) => {
  const options = { host, port, path, method: 'GET' };
  
  const connector = http.request(options, (serviceRes) => {
    let data = '';
    serviceRes.on('data', (chunk) => data += chunk);
    serviceRes.on('end', () => {
      try {
        res.json(JSON.parse(data));
      } catch (e) {
        res.send(data);
      }
    });
  });

  connector.on('error', (err) => {
    res.status(500).json({ erro: `Falha ao conectar ao serviço ${host}: ${err.message}` });
  });

  connector.end();
};

app.get('/api/pedidos', (req, res) => proxyRequest('pedidos', 3000, '/', res));
app.get('/api/estoque', (req, res) => proxyRequest('estoque', 3001, '/estoque', res));
app.get('/api/pagamentos', (req, res) => proxyRequest('pagamentos', 3002, '/pagamentos', res));

app.get('/', (req, res) => {
  res.json({
    mensagem: "API Gateway Loja Veloz",
    endpoints: ["/api/pedidos", "/api/estoque", "/api/pagamentos"]
  });
});

app.listen(PORT, () => {
  console.log(`Gateway rodando na porta ${PORT}`);
});
