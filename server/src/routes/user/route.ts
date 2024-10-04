import express from "express"
import { loginCtrl } from "../../controllers/user/controller"

const userApiRoutes = express.Router()

userApiRoutes.post("/login", loginCtrl)
userApiRoutes.post("/register")
userApiRoutes.get("/profile", (req, res)=>{res.json({"Status":"Working"})})

export default userApiRoutes
