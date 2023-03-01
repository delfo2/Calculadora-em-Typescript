const express = require('express');
const path = require('path');

const app = express();

// Define o diretório onde os arquivos estáticos serão servidos
const staticDirPath = path.join(__dirname, '..', 'dist', 'assets');

// Define o tipo MIME correto para arquivos CSS
app.use('/assets/css', (req, res, next) => {
  res.type('text/css');
  next();
});

// Define o middleware para servir arquivos estáticos
app.use(express.static(staticDirPath));

// Inicie o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

