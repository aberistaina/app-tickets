import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { Usuarios } from "../models/Usuarios.models.js"
import dotenv from "dotenv"
import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({path: path.resolve(__dirname, "../.env")});

let secret = process.env.SECRET

export const emitirToken = async(req, res, next) =>{
    try {
        let {email, password } = req.body

        let usuario = await Usuarios.findOne({
            attributes: ["id", "nombre", "apellido", "email","rut", "admin", "password"],
            where:{
                email
            }
        })
        if (!usuario){
            return res.json({code:400, message: "Email o Password Incorrecto",})
        }

        let validacionPassword = await bcrypt.compare(password, usuario.password)
        
        
        if(!validacionPassword){
            return res.json({code:400, message: "Email o Password Incorrecto",})
        }

        const { password: _, ...usuarioSinPassword } = usuario.toJSON();

        let token = jwt.sign({
            data: usuarioSinPassword,
        },
        secret,
        {expiresIn : "1h"}
        )

        req.token = token
        req.usuario = usuarioSinPassword
        next()

    } catch (error) {
        console.log(error.message)
        res.status(500).json({code: 500, message: "Error en el proceso de autenticación"})
    } 

}

const verificacionToken = (token) =>{
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret,(error, decoded) =>{
            if(error){
                reject({
                    code: 401,
                    message: "El token proporcionado no fue emitido por el servidor, fue adulterado o está caducado"
                })
                
            }
            resolve(decoded)
        })
    })
}

export const verificarToken = async(req, res, next) =>{

    try {
        let {authorization} = req.headers
        let {token} = req.query
        let dataToken;
    
        if(authorization){
            let token = authorization.split(" ")[1]
            dataToken = await verificacionToken(token)
            
        }else if(token){
            dataToken = await verificacionToken(token)
        }else{
            return res.status(401).json({code:401, message: error})
        }

        req.usuario = dataToken.data
        next()
        
        
    } catch (error) {
        console.log(error)
        let code = 500
        let errorMessage = "Error el en proceso de autenticación"
        if(error.code){
            code = error.code
            errorMessage = error.message
        }
        res.status(code).json({code: code, message: errorMessage})
    }
}