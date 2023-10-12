import { SALT } from "#Constants/salt.js";
import UserModel from "#Schemas/user.schema.js";
import { compare, hash } from "bcrypt";

const userUpdatePasswordController = async (req, res) => {
    const { id } =req;
    const { newPassword , oldPassword } =req.body;
    
    const existingUserByID = await UserModel.findById(id).exec()
    if(!existingUserByID) return res.status(400).send({errors:["Usuario no autorizado"]})

    const checkPassword = await compare(oldPassword, existingUserByID.password)
    
    if(!checkPassword) return res.status(401).send({errors:["Credenciales incorrectas"]})
     
    const hashedPassword= await hash(newPassword, SALT)

    existingUserByID.password=hashedPassword

    await existingUserByID.save()

    return res.send("Contraseña del Usuario actualizado")

}

export default userUpdatePasswordController