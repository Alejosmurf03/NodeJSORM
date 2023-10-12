import { SALT } from "#Constants/salt.js";
import UserModel from "#Schemas/user.schema.js";
import RolUserModel from "#Schemas/rolUsuario.schema.js";
import RolModel from "#Schemas/rol.schema.js";
import { hash } from "bcrypt";
import univesidadModel from "#Schemas/univesidad.schema.js";
import universidadUserModel from "#Schemas/universidadUsuario.schema.js";
// Se instala la libreria bcrypt. npm i bcrypt
const userRegisterController = async (req, res) => {
    const {_id, name, surname, email, password, id_rol, id_facultad} = req.body;

    const existingUserById = await UserModel.findById(_id).exec()
    if(existingUserById) return res.status(409).send({errors:["Este usuario ya existe"]})

    const existingUserByEmail = await UserModel.findOne({email}).exec()
    if(existingUserByEmail) return res.status(409).send({errors:["Este usuario ya existe"]})

    const rol = await RolModel.findById(id_rol).exec()
    if (!rol) return res.status(406).send({errors:["Rol no existente"]})

    const universidad = await univesidadModel.findById(id_facultad).exec()
    if (!universidad) return res.status(406).send({errors:["Facultad no existente"]})

    const hashedPassword= await hash(password, SALT)

    const user = new UserModel({
        _id, name, surname, email, password:hashedPassword
    })


    const rolUser = new RolUserModel({
        id_usuario : _id, id_rol: id_rol
    })

    const universidadUser = new universidadUserModel({
        id_usuario : _id, id_facultad: id_facultad
    })

    await rolUser.save()

    await universidadUser.save()

    await user.save()

    return res.send('usuario registrado con exito')
}

export default userRegisterController