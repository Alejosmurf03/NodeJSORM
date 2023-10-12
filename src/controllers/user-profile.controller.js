import RolModel from "#Schemas/rol.schema.js";
import RolUserModel from "#Schemas/rolUsuario.schema.js";
import UserModel from "#Schemas/user.schema.js";
import UnivesidadModel from "#Schemas/univesidad.schema.js";
import UniversidadUserModel from "#Schemas/universidadUsuario.schema.js";

const userProfileController = async (req, res) => {
    
    const { id } = req;
    const existingUserByID = await UserModel.findById(id).exec()
    if(!existingUserByID) return res.status(400).send({errors:["Usuario no autorizado"]})

    const existingRolByID = (await RolUserModel.find()).filter(e => e.id_usuario == id)
    if(!existingRolByID) return res.status(418).send({errors:["Usuario sin rol"]})

    const existingUniverByID = (await UniversidadUserModel.find()).filter(e => e.id_usuario == id)
    if(!existingUniverByID) return res.status(418).send({errors:["Usuario sin Facultad"]})

    const listaInter = existingRolByID.flatMap(e => e.id_rol)
    
    const listaInter2 = existingUniverByID.flatMap(e => e.id_facultad)

    const existingRol = (await RolModel.find()).filter(e => e._id == listaInter.map(i => i))

    const existingFacultad = (await UnivesidadModel.find()).filter(e => e._id == listaInter2.map(i => i))
    
    const {_id, name, surname, email} = existingUserByID

    let _idRol = existingRol.map(e => e._id)
    
    let nameRol = existingRol.map(e => e.name)

    let _idFacul = existingFacultad.map(e => e._id)
    
    let nameFacul = existingFacultad.map(e => e.name)

    return res.send({_id, name, surname, email, _idRol, nameRol, _idFacul, nameFacul})

}

export default userProfileController