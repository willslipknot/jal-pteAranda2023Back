import User from '../models/user.models.js';
import { Op } from 'sequelize';
import { createAccessToken } from '../libs/jwt.js'
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';


export const register = async (req, res) => {
  const { nombre, correo, tipo, ip, voto} = req.body;
 

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
      return res.status(400).json(["Ya se voto desde este dispositivo, por favor intenta desde otro"]);
    }

    const newUser = await User.create({
      nombre,
      correo,
      tipo,
      ip,
      voto
    });

    console.log("Usuario creado");
    const token = await createAccessToken({ id: newUser.id });
    res.cookie('token', token);
    res.json({ message: "Usuario creado correctamente" , token});

  } catch (error) {
    console.error(error);
    res.status(500).json(["Error al registrar usuario."]);
  }
};

export const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { voto } = req.body;

    const userFound = await User.findByPk(id);
    if (!userFound) {
      return res.status(404).json(["No se encontró el usuario, por lo que no se actualizó nada"]);
    }

    userFound.voto = voto;
    await userFound.save();

    res.json(userFound);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Error interno del servidor"]);
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

export const getUsers = async (req, res) => {
  const usuarios = await User.findAll()
  res.json(usuarios)
}

