const http = require('http');
const { Client } = require('pg');

const PORT = process.env.PORT || 3000;

const dbConfig = {
  host: process.env.DB_HOST || 'database',
  port: process.env.DB_PORT || 5432,
  user: process.env.POSTGRES_USER || 'admin',
  password: process.env.POSTGRES_PASSWORD || 'password123',
  database: process.env.POSTGRES_DB || 'pedidos_db',
};

// Função para buscar dados do outro microsserviço (Estoque)
const buscarEstoque = () => {
  return new Promise((resolve) => {
    // Note que usamos o nome do serviço 'estoque' definido no docker-compose
    http.get('http://estoque:3001/estoque', (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', (err) => {
      resolve({ erro: "Não foi possível consultar o estoque: " + err.message });
    });
  });
};

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  const client = new Client(dbConfig);
  let dbStatus = "Não testado";
  
  try {
    await client.connect();
    dbStatus = "Conectado ao Postgres com sucesso!";
    await client.end();
  } catch (err) {
    dbStatus = `Erro no banco: ${err.message}`;
  }

  // Consulta o outro microsserviço
  const dadosEstoque = await buscarEstoque();

  res.end(JSON.stringify({
    servico: "Pedidos - Loja Veloz",
    database_status: dbStatus,
    integracao_estoque: {
      status: "Consulta realizada",
      dados_recebidos: dadosEstoque
    },
    timestamp: new Date()
  }, null, 2));
});

server.listen(PORT, () => {
  console.log(`Serviço de Pedidos com Integração na porta ${PORT}`);
});