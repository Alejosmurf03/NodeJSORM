import RolUserModel from "#Schemas/rolUsuario.schema.js";
import UniversidadUserModel from "#Schemas/universidadUsuario.schema.js";
import UserModel from "#Schemas/user.schema.js";
import { compare } from "bcrypt";

const userUnregisterUserController = async (req, res) => {
    const {  password, _id } =req.body;

    const existingUserDeleteByID = await UserModel.findById(_id).exec()
    if(!existingUserDeleteByID) return res.status(406).send({errors:["Usuario no existe"]})

    const checkPassword = await compare(password, existingUserDeleteByID.password)
    
    if(!checkPassword) return res.status(401).send({errors:["Credenciales incorrectas"]})
    
    const existingRolByID = (await RolUserModel.find()).filter(e => e.id_usuario == _id)
    if(!existingRolByID) return res.status(418).send({errors:["Usuario sin rol"]})

    const existingUniverByID = (await UniversidadUserModel.find()).filter(e => e.id_usuario == _id)
    if(!existingUniverByID) return res.status(418).send({errors:["Usuario sin Facultad"]})

    const listaInter = existingRolByID.flatMap(e => e._id)

    const listaInter2 = existingUniverByID.flatMap(e => e._id)

    await RolUserModel.findByIdAndDelete(listaInter.map(i => i))

    await UniversidadUserModel.findByIdAndDelete(listaInter2.map(i => i))

    await existingUserDeleteByID.deleteOne()

    return res.send("Usuario eliminado")

}

export default userUnregisterUserController