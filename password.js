
import bcrypt from 'bcryptjs'

async function hashPassword(password) {
  try {
    const saltRounds = 10; // Número de rondas de procesamiento
    const passwordHash = await bcrypt.hash(password, saltRounds);
    return passwordHash;
  } catch (error) {
    throw new Error('Error al hashear la contraseña: ' + error.message);
  }
}

// Ejemplo de uso
const password = 'EleccionesJAL2023*';
hashPassword(password)
  .then((passwordHash) => {
    console.log('Password hasheado:', passwordHash);
  })
  .catch((error) => {
    console.error(error);
  });
