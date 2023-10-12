import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors";
import addFormats from "ajv-formats";
import {passwordDTOSchema, idDTOSchema} from "#Lib/dto-types.js";

const unregisterUserDTOSchema = Type.Object({
    _id: idDTOSchema,
    password: passwordDTOSchema
}, {
    additionalProperties: false,
    errorMessage: {
        additionalProperties: "El formato del objeto no es válido"
    }
})

const ajv= new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier')
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addFormats(ajv, ['uuid'])


addErrors(ajv)

const validateSchema= ajv.compile(unregisterUserDTOSchema)

const userUnregisterUserDTO= (req, res, next) => {
    const isDTOValid = validateSchema(req.body)

    if(!isDTOValid) 
    return res
        .status(400)
        .send({
            errors: validateSchema.errors.map(error => error.message)
        })
     
    next()
}

export default userUnregisterUserDTO