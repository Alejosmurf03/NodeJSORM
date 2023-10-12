import mongoose from "mongoose";

const {Schema, model}= mongoose

const rolSchema= new Schema({
    _id: {
        type: Number,
        _id:false
    },
    name: {
        type: String,
        require: true,
        minLength: 2,
        maxLength: 20
    }
})

const RolModel = model('Rol', rolSchema)

export default RolModel