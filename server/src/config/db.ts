import mongoose from "mongoose"

const mongoURL = process.env.MONGO_URL

if (!mongoURL) {
  throw new Error("Mongo url missing from env")
}

try {
  mongoose.connect(mongoURL)
  console.log("Connected to db")
} catch (error) {
  throw error
}
