# Usamos uma imagem base leve do Node.js
FROM node:20-alpine

# Define a pasta de trabalho dentro do contentor
WORKDIR /app

# Copia os ficheiros de dependências (o package.json que criaste)
COPY package*.json ./

# Instala as dependências listadas no package.json
RUN npm install

# Copia o ficheiro de código index.js para dentro do contentor
COPY index.js .

# Boas práticas de segurança: Criar e usar um utilizador não-root
# Isso evita que o processo tenha permissões de administrador no sistema
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Informa qual a porta que o serviço vai usar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]