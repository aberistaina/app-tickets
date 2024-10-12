import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Usuarios } from "./Usuarios.models.js";
import moment from "moment";

// Tabla Tickets

export const Ticket = sequelize.define("Ticket", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    asunto: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: "Abierto"
    },
    fecha_creacion: {
        type: DataTypes.STRING(20), 
        defaultValue: () => moment().format("DD-MM-YYYY HH:mm")
    },
    usuario_rut: {  
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
            model: Usuarios,  
            key: "rut"    
        }
    }
}, {
    tableName: "tickets",
    timestamps: false,
});
