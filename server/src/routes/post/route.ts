import express from "express"
import authenticate from "../../middlewares/authenticate"
import { createCtrl, dislikePostCtrl, getPostsCtrl, likePostCtrl, unlikeCtrl } from "../../controllers/post/controller"

const postApiRoutes = express.Router()

postApiRoutes.post("/create", authenticate, createCtrl)
postApiRoutes.get("/", getPostsCtrl)

postApiRoutes.post("/lik", authenticate, likePostCtrl)
postApiRoutes.post("/dislik", authenticate, dislikePostCtrl)
postApiRoutes.post("/u-lik", authenticate, unlikeCtrl)

export default postApiRoutes
