import mongoose from "mongoose";

const {Schema, model}= mongoose

const rolUserSchema = new Schema({
    id_rol: {
        type: Number
    },id_usuario: {
        type: String
    }
})

const RolUserModel = model('Rol_Usuario', rolUserSchema)

export default RolUserModel