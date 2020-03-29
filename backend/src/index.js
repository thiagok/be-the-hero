const express = require('express'); // Importando microframework express
const cors = require('cors');
const routes = require('./routes');
const app = express(); // crianco e instanciando aplicação

app.use(cors());
app.use(express.json())
app.use(routes);

app.listen(3333);