import jwt from 'jwt-simple'
import User from '../models/User.js'
import configDB from '../config/index.js'

const checkAdminFunction = async (req,res,token) => {
    const token = req.headers.authorization;
    if(!token) {
        return res.status(500).json({
               msg: "No hay sesión"
        })
    }
    const payload = jwt.decode(token, configDB.jwt.secret)
    const user = await User.findById(payload.userId)
    if(!user){
        return res.status(401).json({
               msg: 'Token invalido',
    })
    }
    if(payload.role !== "Administrator" ){
        return res.status(500).json({
               msg: "Inicie sesión como administrador"
        })
    }
    const expirationDate= parseInt(payload.expirationDate)
    if(expirationDate.getTime() < new Date().getTime()){
        return res.status(400).json({
               msg: 'El toquen a expirado'
        })
    }
}
export {checkAdminFunction}