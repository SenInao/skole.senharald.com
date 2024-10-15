import dotenv from "dotenv"
dotenv.config()

import express from "express"
import "./config/db"

import getSession from "./config/session"

import userApiRoutes from "./routes/user/route"
import errHandler from "./middlewares/globalErrorHandler"
import postApiRoutes from "./routes/post/route"

//add session attr to Request type
declare module "express-serve-static-core" {
  interface Request {
    session:any
  }
}

const app = express()

//url parsing
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//configure express session
const session = getSession()
app.set("trust proxy", 1)
app.use(session)

//user api routes
app.use("/api/user", userApiRoutes)

//post api routes
app.use("/api/post", postApiRoutes)

//global error handler
app.use(errHandler)

const PORT = process.env.PORT ? process.env.PORT : 3000
app.listen(PORT, () => {
  console.log("Server listening at localhost:"+PORT)
})
