import express from "express"
import { loginCtrl } from "../../controllers/user/controller"

const userApiRoutes = express.Router()

userApiRoutes.post("/login", loginCtrl)
userApiRoutes.post("/register")
userApiRoutes.get("/profile")

export default userApiRoutes
