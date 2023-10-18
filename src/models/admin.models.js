import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Admin = sequelize.define('Admin', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
    },
    contraseña: {
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
},
    {

        tableName: 'admin',
        timestamps: false,
    });



export default Admin;

