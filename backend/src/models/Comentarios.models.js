import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Usuarios } from "./Usuarios.models.js";
import { Ticket } from "./Tickets.models.js";
import moment from "moment";

export const Comentarios = sequelize.define("Comentarios", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comentario: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fecha_comentario: {
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
    },
    ticket_id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Ticket,
            key: "id"
        }
    }
}, {
    tableName: "comentarios",
    timestamps: false,
});

