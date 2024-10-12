import { Ticket } from "../models/Tickets.models.js";
import { Comentarios } from "../models/Comentarios.models.js"
import { Usuarios } from "../models/Usuarios.models.js";
import logger from "../logger.js";

export const findAll = async (req, res) => {

    try {
        let tickets = await Ticket.findAll({
            order: [["id", "ASC"]],
            
            include:[
                {
                    model: Usuarios,
                    as: "usuarios",
                    attributes: ['nombre', 'apellido']
                },
                {
                model: Comentarios,
                as: "comentarios",
                include: [{
                    model: Usuarios,  
                    as: "usuarios",
                    attributes: [
                        ['nombre', 'nombre_comentario'],
                        ['apellido', 'apellido_comentario']
                    ]
                }]
            }]
        });


        res.status(200).json({
            code: 200,
            message: "tickets encontrados",
            data: tickets,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            code: 500,
            message: "Error interno del servidor",
        });
    }
};

export const findById = async(req,res) =>{
    try {
        let { id } = req.params
        let ticket = await Ticket.findOne({
            where: {
                id
            },
            include:[
                {
                    model: Usuarios,
                    as: "usuarios",
                    attributes: ['nombre', 'apellido']
                },
                {
                model: Comentarios,
                as: "comentarios",
                include: [{
                    model: Usuarios,  
                    as: "usuarios",
                    attributes: [
                        ['nombre', 'nombre_comentario'],
                        ['apellido', 'apellido_comentario']
                    ]
                }]
            }]
        })

        res.status(200).json({
            code:200,
            data: ticket,
            message: "ticket encontrado con éxito"
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            code: 500,
            message: "Error interno del servidor",
        });
    }
}


export const findByUser = async(req,res) =>{
    try {
        let { rut } = req.params
        
        let ticket = await Ticket.findAll({
            where: {
                usuario_rut: rut
            },
            include:[
                {
                    model: Usuarios,
                    as: "usuarios",
                    attributes: ['nombre', 'apellido']
                },
                {
                model: Comentarios,
                as: "comentarios",
                include: [{
                    model: Usuarios,  
                    as: "usuarios",
                    attributes: [
                        ['nombre', 'nombre_comentario'],
                        ['apellido', 'apellido_comentario']
                    ]
                }]
            }]
        })

        res.status(200).json({
            code:200,
            data: ticket,
            message: "ticket encontrado con éxito"
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            code: 500,
            message: "Error interno del servidor",
        });
    }
}
export const createTicket = async(req, res) =>{
    try {
        let {asunto, descripcion, rut } = req.body

        let ticket = await Ticket.create({
            asunto,
            descripcion,
            usuario_rut: rut
        })

        res.status(201).json({
            code: 201,
            data: ticket,
            message: "Ticket creado con éxito"
        })
    } catch (error) {
        logger.error("Ha ocurrido un error", error);
        res.status(500).json({
            code: 500,
            message: "Error interno del servidor",
        });
    }
}

export const updateStateTicket = async(req, res)=>{
    console.log("hola")
    try {
        let {estado} = req.body
        let { id } = req.params
        console.log(id)
        console.log(estado)
        let updateStatus = await Ticket.update(
            {
                estado
            },
            {
                where:{
                    id
                }
            }
        )
        res.status(201).json({
            code: 201,
            data: updateStatus,
            message: "Estado cambiado con éxito"
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Error interno del servidor",
        });
    }
}

export const addComentary = async(req, res) =>{
    try {
        let { ticket, rut, comentario} = req.body

    let nuevoComentario = await Comentarios.create({
        comentario,
        usuario_rut: rut,
        ticket_id: ticket
    })

    res.status(201).json({
        code: 201,
        data: nuevoComentario,
        message: "comentario añadido con éxito"
    })

    } catch (error) {
        res.status(500).json({
            code: 500,
            message: "Error interno del servidor",
        });
    }
}