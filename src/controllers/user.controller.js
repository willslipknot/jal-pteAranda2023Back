import User from '../models/user.models.js';
import { Op } from 'sequelize';
import { createAccessToken } from '../libs/jwt.js'


export const register = async (req, res) => {
  const { nombre, correo } = req.body;

  try {
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [
          { correo: correo }
        ]
      }
    });

    if (existingUser) {
      return res.status(400).json(["Ya existe un usuario con el mismo correo electrónico."]);
    }

    const newUser = await User.create({
      nombre,
      correo,
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

