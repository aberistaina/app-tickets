export const verificarAdmin = (req, res, next) => {
    if(req.usuario){
        let usuario = req.usuario
        if(usuario.admin){
            next()
        }else{
            res.status(403).json({code:401, message: "no tiene permisos para acceder a esta página"})
        }

    }else{
        res.status(403).json({code:401, message: "no se encontrol informacion respecto al usuario"})
    }
}