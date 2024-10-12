import { DataTypes} from "sequelize";
import { sequelize } from "../database/database.js";
import moment from "moment";


//Tabla Usuarios

export const Usuarios = sequelize.define('Usuarios', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true
    },
    telefono: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    rut: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    fecha_registro: {
        type: DataTypes.STRING(20), 
        defaultValue: () => moment().format("DD-MM-YYYY HH:mm") 
    }
}, {
    tableName: 'usuarios',
    timestamps: false,
});



