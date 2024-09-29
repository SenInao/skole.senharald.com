import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true
  },
  posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post"
  }],
  friends:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }],
  comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Comment"
  }]
})

const User = mongoose.model("User", userSchema)

export default User
