 import sql from 'mssql';

const dbSettings = {
  user: 'seu_usuario',
  password: 'sua_senha',
  server: 'localhost', // ou seu servidor
  database: 'salon_db',
  options: {
    encrypt: true, // para Azure
    trustServerCertificate: true // para desenvolvimento local
  }
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

export { sql };
