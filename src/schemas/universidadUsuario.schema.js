import mongoose from "mongoose";

const {Schema, model}= mongoose

const universidadUserSchema = new Schema({
    id_facultad: {
        type: Number
    },id_usuario: {
        type: String
    }
})

const UniversidadUserModel = model('Universidad_Usuario', universidadUserSchema)

export default UniversidadUserModel