import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const User = sequelize.define('User', {
    nombre: {
        type: DataTypes.STRING,
        trim: true,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
    },
    ip: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
    },
},
    {

        tableName: 'usuarios',
        timestamps: false,
    });



export default User;

