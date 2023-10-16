import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Candidato = sequelize.define('Candidato', {
    candidato: {
        type: DataTypes.STRING,
        trim: true,
    },
    partido: {
        type: DataTypes.STRING,
        trim: true,
    },
    posicion: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
    },
    votos: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
    },
    },
  {

    tableName: 'candidatos' , 
    timestamps: false,
  });
  


export default Candidato;

