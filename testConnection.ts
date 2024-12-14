const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://docker:docker@host.docker.internal:5432/inorbit'
});

client.connect()
  .then(() => console.log('Conectado com sucesso!'))
  .finally(() => client.end());
