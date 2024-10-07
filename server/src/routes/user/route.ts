import express from "express"
import { loginCtrl, logoutCtrl, registerCtrl } from "../../controllers/user/controller"
import authenticate from "../../middlewares/authenticate"

const userApiRoutes = express.Router()

userApiRoutes.post("/login", loginCtrl)
userApiRoutes.post("/register", registerCtrl)
userApiRoutes.post("/logout", authenticate, logoutCtrl)
userApiRoutes.get("/profile", (req, res)=>{res.json({"Status":"Working"})})

export default userApiRoutes
