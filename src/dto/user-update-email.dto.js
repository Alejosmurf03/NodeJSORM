import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addErrors from "ajv-errors";
import addFormats from "ajv-formats";
import { emailDTOSchema,  passwordDTOSchema, } from "#Lib/dto-types.js";

const updateEmailDTOSchema = Type.Object({
    email: emailDTOSchema,
    password: passwordDTOSchema
}, {
    additionalProperties: false,
    errorMessage: {
        additionalProperties: "El formato del objeto no es válido"
    }
})

const ajv= new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier')
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
addFormats(ajv, ['email'])

addErrors(ajv)

const validateSchema= ajv.compile(updateEmailDTOSchema)

const userUpdateEmailDTO= (req, res, next) => {
    const isDTOValid = validateSchema(req.body)

    if(!isDTOValid) 
    return res
        .status(400)
        .send({
            errors: validateSchema.errors.map(error => error.message)
        })
     
    next()
}

export default userUpdateEmailDTO