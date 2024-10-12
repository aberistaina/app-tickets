export interface Tickets  {
    id?: number,
    asunto: string,
    descripcion: string,
    estado: string,
    fecha_creacion: string,
    usuario_rut: string,
    usuarios: {
        nombre: string,
        apellido: string
    },
    comentarios: [
        {
            id: number,
            comentario: string,
            fecha_comentario: string,
            usuario_rut: string,
            ticket_id: string,
            usuarios:{
                nombre_comentario: string,
                apellido_comentario: string
            }
        }
    ]
}

export interface Comentario{
    ticket: number,
    comentario: string,
    rut: string
}

export interface bodyTicket{
    nombre: string
    apellido: string
    rut: string
    asunto: string
    descripcion: string
}