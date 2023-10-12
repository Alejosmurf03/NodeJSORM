import mongoose from "mongoose";

const {Schema, model}= mongoose

const universidadSchema= new Schema({
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

const UnivesidadModel = model('Universidad', universidadSchema)

export default UnivesidadModel