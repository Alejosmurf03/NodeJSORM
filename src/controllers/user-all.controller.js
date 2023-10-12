import UserModel from "#Schemas/user.schema.js";

const userAllController = async (req, res) => {
    
    const { id } =req;
    const existingUserByID = await UserModel.findById(id).exec()
    if(!existingUserByID) return res.status(400).send({errors:["Usuario no autorizado"]})

    const usuarios= await UserModel.find({}, '-password -_id').exec()
    

    return res.send(usuarios)

}

export default userAllController