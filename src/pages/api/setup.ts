import sql, { ConnectionPool } from 'mssql';

const config = {
    user: 'sa',
    password: 'Kzqrpa1984',
    server: 'localhost',
    database: 'MC',
    options: {
      encrypt: false,
    },
  };

export const setupDatabase = () => {
   
    const pool = new sql.ConnectionPool(config);

    return pool

}
  

