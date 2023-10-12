import UserModel from "#Schemas/user.schema.js";
import { compare } from "bcrypt";

const userUpdateEmailController = async (req, res) => {
    const { id } =req;
    const { email, password } =req.body;
    
    const existingUserByID = await UserModel.findById(id).exec()
    if(!existingUserByID) return res.status(400).send({errors:["Usuario no autorizado"]})

    const checkPassword = await compare(password, existingUserByID.password)
    
    if(!checkPassword) return res.status(401).send({errors:["Credenciales incorrectas"]})
     
    existingUserByID.email=email

    await existingUserByID.save()

    return res.send("Email del Usuario actualizado")

}

export default userUpdateEmailController