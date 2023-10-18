import app from './app.js';
import express from 'express';
import axios from 'axios';

app.listen(3000)
console.log('Server on port', 3000)

const PORT = process.env.PORT || 5586;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

app.get('/get-public-ip', async (req, res) => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    const publicIP = response.data.ip;
    res.json({ ip: publicIP });
  } catch (error) {
    console.error('Error al obtener la IP pública:', error);
    res.status(500).json({ error: 'Error al obtener la IP pública' });
  }
})
