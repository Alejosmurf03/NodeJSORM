import userLoginDTO from '#Dto/user-login.dto.js'
import userJWTDTO from '#Dto/user-JWT.dto.js'
import userRegisterDTO from '#Dto/user-register.dto.js'
import userUpdateDataDTO from '#Dto/user-update-data.dto.js'
import userUpdateEmailDTO from '#Dto/user-update-email.dto.js'
import userUpdatePasswordDTO from '#Dto/user-update-password.dto.js'
import userUnregisterDTO from '#Dto/user-unregister.dto.js'
import userUnregisterUserDTO from '#Dto/user-unregister_user.dto.js'
import userLoginController from '#Controllers/user-login.controller.js'
import userRegisterController from '#Controllers/user-register.controller.js'
import userProfileController from '#Controllers/user-profile.controller.js'
import userUpdateDataController from '#Controllers/user-update-data.controller.js'
import userUpdateEmailController from '#Controllers/user-update-email.controller.js'
import userUpdatePasswordController from '#Controllers/user-update-password.controller.js'
import userUnregisterController from '#Controllers/user-unregister.controller.js'
import userUnregisterUserController from '#Controllers/user-unregister_user.controller.js'
import {Router} from 'express'
import userAllController from '#Controllers/user-all.controller.js'






const userRouter= Router()

userRouter.post("/register", userRegisterDTO, userRegisterController)

userRouter.post("/login",userLoginDTO, userLoginController)

userRouter.get("/profile", userJWTDTO, userProfileController)
userRouter.patch("/update-data",userJWTDTO, userUpdateDataDTO, userUpdateDataController)
userRouter.patch("/update-email",userJWTDTO, userUpdateEmailDTO, userUpdateEmailController)
userRouter.patch("/update-password",userJWTDTO, userUpdatePasswordDTO, userUpdatePasswordController)
userRouter.delete("/unregister",userJWTDTO, userUnregisterDTO, userUnregisterController)
userRouter.delete("/unregister-user", userUnregisterUserDTO, userUnregisterUserController)
userRouter.get("/all", userJWTDTO, userAllController)

export default userRouter