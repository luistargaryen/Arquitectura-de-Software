const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
const port = 5000;

// const client = new Client({
//   user: 'postgres',       
//   host: 'localhost',      
//   database: 'sistema_de_inscripcion',
//   password: '01092003',
//   port: '5432',       
// });

// client.connect();

app.use(cors());

app.get('/api/mensajes', (req, res) => {
  res.send('Hola Mundo!');
});


// app.get('/api/mensajes', async (req, res) => {
//   try {
//     const result = await client.query('SELECT nombre FROM personas');
//     const mensaje = result.rows[0].name;
//     res.send(mensaje);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error al conectar a la base de datos');
//   }
// });

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
