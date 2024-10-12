import { Usuarios } from "../models/Usuarios.models.js"
import bcrypt from "bcrypt"

export const createUser = async(req, res) =>{
    let { nombre, apellido, email, telefono, rut, password} = req.body
    const hash = bcrypt.hashSync(password, 10)
    try {

       let usuario =  await Usuarios.findOne({
            where:{
                rut
            }
        })
        if(usuario){
            return res.status(400).json({code: 400, message: "Ya existe un usuario registrado con ese rut"})
        }
            

        await Usuarios.create({
            nombre,
            apellido,
            email,
            telefono,
            rut,
            password: hash
        })
        res.status(201).json({code: 201, message: "Usuario creado con éxito"})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({code: 500, message: "No se Pudo Crear el Usuario"})
    }
}

export const loginUser = async (req, res) =>{
    try {
        res.status(200).json({code: 200, message: "Login éxitoso", usuario: req.usuario, token: req.token}) 
    } catch (error) {
        res.status(500).json({code: 500, message: "Ha ocurrido un error en el proceso de autenticación"})
    }
}