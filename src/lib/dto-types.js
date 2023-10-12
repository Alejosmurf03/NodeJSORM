import { Type } from "@sinclair/typebox";

export const idDTOSchema = Type.String({
    format: 'uuid',
    errorMessage:{
        type: "El tipo de _id no es valido, debe ser un string",
        format: "El formato no es valido, debe ser un uuid4"
    }
})
export const nameDTOSchema = Type.String({
    minLength: 2,
    maxLength: 20,
    errorMessage:{
        minLength: "El nombre debe tener al menos 2 caraterers de longitud",
        maxLength: "El nombre debe tener maximo 20 caraterers de longitud"
    }
})
export const surnameDTOSchema = Type.String({
    minLength: 4,
    maxLength: 50,
    errorMessage:{
        minLength: "El apellido debe tener al menos 4 caraterers de longitud",
        maxLength: "El apellido debe tener maximo 50 caraterers de longitud"
    }
})
export const emailDTOSchema = Type.String({
    format: 'email',
    errorMessage:{
        type: "El tipo del email no es valido",
        format: "El formato del email no es valido, debe cumplir el RFC 5322"
    }
})
export const passwordDTOSchema = Type.String({
    format: 'password', 
    minLength: 10,
    maxLength: 25,
    errorMessage:{
        type: "El tipo de la contraseña no es valido",
        format: "El formato de la contraseña no es valido, debe contener una mayuscula, una minuscula y un número",
        minLength: "La contraseña debe tener al menos 10 caraterers de longitud",
        maxLength: "La contraseña debe tener maximo 25 caraterers de longitud"
    }
})
export const idRolDTOSchema = Type.Integer({
    errorMessage:{
        type: "El tipo de id no es valido, debe ser un Integer"
    }
})
export const idUniversidadDTOSchema = Type.Integer({
    errorMessage:{
        type: "El tipo de id no es valido, debe ser un Integer"
    }
})