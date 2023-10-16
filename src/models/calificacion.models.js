import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Puntuacion= sequelize.define('Puntuacion', {
    comentario: {
        type: DataTypes.STRING,
        trim: true,
    },
    candidato: {
        type: DataTypes.STRING,
        trim: true,
    },
    id_candidato: {
        type: DataTypes.INTEGER,
        allowNull: false,
        trim: true,
    },
    estrellas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        trim: true,
    },
    voto: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
    },
    partido: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
    },
    },
  {
    schema: 'intencionVoto',
    tableName: 'puntuacion' , 
    timestamps: false,
  });
  


export default Puntuacion;

