import UserModel from "#Schemas/user.schema.js";

const userUpdateDataController = async (req, res) => {
    const { id } =req;
    const { name, surname } =req.body;
    
    const existingUserByID = await UserModel.findById(id).exec()
    if(!existingUserByID) return res.status(400).send({errors:["Usuario no autorizado"]})

    existingUserByID.name= name
    existingUserByID.surname=surname

    await existingUserByID.save()

    return res.send("Usuario actualizado")

}

export default userUpdateDataController