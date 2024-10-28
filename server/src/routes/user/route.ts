import express from "express"
import { loginCtrl, logoutCtrl, registerCtrl, profileCtrl, searchUserCtrl } from "../../controllers/user/controller"
import authenticate from "../../middlewares/authenticate"

const userApiRoutes = express.Router()

userApiRoutes.post("/login", loginCtrl)
userApiRoutes.post("/register", registerCtrl)
userApiRoutes.post("/logout", authenticate, logoutCtrl)
userApiRoutes.get("/profile", authenticate, profileCtrl)
userApiRoutes.get("/search/:sok", searchUserCtrl)

export default userApiRoutes
