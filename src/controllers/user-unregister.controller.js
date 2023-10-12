import UserModel from "#Schemas/user.schema.js";
import { compare } from "bcrypt";

const userUnregisterController = async (req, res) => {
    const { id } =req;
    const {  password } =req.body;
    
    const existingUserByID = await UserModel.findById(id).exec()
    if(!existingUserByID) return res.status(400).send({errors:["Usuario no autorizado"]})

    const checkPassword = await compare(password, existingUserByID.password)
    
    if(!checkPassword) return res.status(401).send({errors:["Credenciales incorrectas"]})
     

    await existingUserByID.deleteOne()

    return res.send("Usuario eliminado")

}

export default userUnregisterController