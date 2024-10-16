import express from "express"
import authenticate from "../../middlewares/authenticate"
import { createCtrl, getPostsCtrl } from "../../controllers/post/controller"

const postApiRoutes = express.Router()

postApiRoutes.post("/create", authenticate, createCtrl)
postApiRoutes.get("/", getPostsCtrl)

export default postApiRoutes
