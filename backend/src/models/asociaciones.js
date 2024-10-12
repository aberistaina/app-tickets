import { Usuarios } from "./Usuarios.models.js";
import { Ticket } from "./Tickets.models.js";
import { Comentarios } from "./Comentarios.models.js";

// Relación: Un usuario puede tener muchos tickets
Usuarios.hasMany(Ticket, {
    foreignKey: "usuario_rut",
    sourceKey: "rut",
    as: "ticket"
});
Ticket.belongsTo(Usuarios, {
    foreignKey: "usuario_rut",
    targetKey: "rut",
    as: "usuarios"
});

// Relación: Un ticket puede tener muchos comentarios
Ticket.hasMany(Comentarios, {
    foreignKey: "ticket_id",
    sourceKey: "id",
    as: "comentarios"
});
Comentarios.belongsTo(Ticket, {
    foreignKey: "ticket_id",
    targetKey: "id",
    as: "ticket"
});

// Relación: Un usuario puede hacer muchos comentarios
Usuarios.hasMany(Comentarios, {
    foreignKey: "usuario_rut",
    sourceKey: "rut",
    as: "comentarios"
});
Comentarios.belongsTo(Usuarios, {
    foreignKey: "usuario_rut",
    targetKey: "rut",
    as: "usuarios"
});
