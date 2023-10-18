import User from '../models/user.models.js';
import { Op } from 'sequelize';
import { createAccessToken } from '../libs/jwt.js'
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';
import axios from 'axios';


export const register = async (req, res) => {
  const { nombre, correo, tipo, ip } = req.body;
  //const apiKey = 'ev-8426a7a612990e993c0ddaa3d6b1dc96';

  try {
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [
          { correo: correo }
        ]
      }
    });

    const existingUser1 = await User.findOne({
      where: {
        [Op.or]: [
          { ip: ip }
        ]
      }
    });

    if (existingUser) {
      return res.status(400).json(["Ya existe un usuario con el mismo correo electrónico."]);
    }

    if (existingUser1) {
      return res.status(400).json(["Ya existe un usuario con la misma ip"]);
    }
    /*
    const response = await axios.get(`https://api.email-validator.net/api/verify?EmailAddress=${correo}&APIKey=${apiKey}`);
 
    
    const isValidEmail = response.data.status === 200;
    console.log(response.data)
 
    if (!isValidEmail) {
      return res.status(400).json(["Correo electrónico inválido"]);
    }*/

    const newUser = await User.create({
      nombre,
      correo,
      tipo,
      ip,
    });

    console.log("Usuario creado");
    const token = await createAccessToken({ id: newUser.id });
    res.cookie('token', token);
    res.json({ message: "Usuario creado correctamente" });

  } catch (error) {
    console.error(error);
    res.status(500).json(["Error al registrar usuario."]);
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies
  if (!token) return res.status(401).json({ message: "Sin autorizacion" });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "Sin autorizacion" });

    const userFound = await User.findByPk(user.id)
    if (!userFound) return res.status(401).json({ message: "Sin autorizacion" });

    return res.json({
      correo: userFound.correo,

    })

  })
};

