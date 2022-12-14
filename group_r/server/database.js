const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "1234qwer",
    database: "testWad",
    host: "localhost",
    port: "5432"
});

const startPool = async (query1, query2) => {
  try {
      await pool.connect();
      await pool.query(query1);
      await pool.query(query2);
      return true;
  } catch (error) {
      console.error(error.stack);
      return false;
  }
};

const postTable = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    id SERIAL PRIMARY KEY,
	    body VARCHAR(200) NOT NULL,
      date date NOT NULL
    );`;

const userTable =
  `CREATE TABLE IF NOT EXISTS "users" (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(200) NOT NULL UNIQUE,
    password VARCHAR(200) NOT NULL
    );`

startPool(postTable, userTable).then(result => {
  if (result) {
      console.log('Tables "users" and  table "posttable" are created');
  }
});

module.exports = pool