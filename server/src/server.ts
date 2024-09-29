import dotenv from "dotenv"

import express from "express"

import userApiRoutes from "./routes/user/route"
import errHandler from "./middlewares/globalErrorHandler"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/user", userApiRoutes)

app.use(errHandler)

const PORT = process.env.PORT ? process.env.PORT : 3000
app.listen(PORT, () => {
  console.log("Server listening at localhost:"+PORT)
})
