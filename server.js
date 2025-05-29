import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

// Cria a aplicação Express
const app = express();

// Configura middlewares
app.use(cors());
app.use(express.json());

// Configuração do banco de dados
const dbConfig = {
  host: 'localhost',
  user: 'salon_user',
  password: 'salon_password',
  database: 'salon_db',
  port: 3306
};

// Rota de teste
app.get('/', (req, res) => {
  res.send('API Glam Pro está funcionando!');
});

// Inicia o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});