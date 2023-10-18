import app from './app.js';
import express from 'express';

app.listen(3000)
console.log('Server on port', 3000)

const PORT = process.env.PORT || 5586;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});


