import Admin from '../models/admin.models.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js'

export const login = async (req, res) => {
    const { email, contraseña } = req.body;
  
    try {
  
      const existingUser = await Admin.findOne({
        where: {
          email: email
        }
      });
  
      if (!existingUser) {
        return res.status(404).json(["Usuario no encontrado."]);
      }
  
      const passwordMatch = await bcrypt.compare(contraseña, existingUser.contraseña);
  
      if (!passwordMatch) {
        console.log("Contraseña incorrecta.");
        return res.status(401).json(["Contraseña incorrecta."]);
      }
  
      const token = await createAccessToken({ id: existingUser.id });
      res.cookie('token', token);
      res.json({
        correo: existingUser.email,
        tipo: existingUser.tipo,
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json(["Error al iniciar sesión."]);
    }
  };