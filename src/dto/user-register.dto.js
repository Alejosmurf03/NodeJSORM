import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors";
import addFormats from "ajv-formats";
import { emailDTOSchema, idDTOSchema, nameDTOSchema, passwordDTOSchema, surnameDTOSchema, idRolDTOSchema, idUniversidadDTOSchema } from "#Lib/dto-types.js";

const registerDTOSchema = Type.Object({
    _id: idDTOSchema,
    name: nameDTOSchema,
    surname: surnameDTOSchema,
    email: emailDTOSchema,
    password: passwordDTOSchema,
    id_rol: idRolDTOSchema,
    id_facultad: idUniversidadDTOSchema
},{
    additionalProperties: false,
    errorMessage: {
        additionalProperties: "El formato del objeto no es válido"
    }
})

const ajv= new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier')
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addFormats(ajv, ['email', 'uuid'])

addErrors(ajv)

const validateSchema= ajv.compile(registerDTOSchema)

const userRegisterDTO= (req, res, next) => {
    const isDTOValid = validateSchema(req.body)

    if(!isDTOValid) 
    return res
        .status(400)
        .send({
            errors: validateSchema.errors.map(error => error.message)
        })
     
    next()
}

export default userRegisterDTO