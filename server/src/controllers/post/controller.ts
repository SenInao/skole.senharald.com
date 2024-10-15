import { NextFunction, Request, Response } from "express"
import User from "../../models/user/User"
import Post from "../../models/post/Post"

const getPostsCtrl = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const posts = await Post.collection.find({}, {projection:{content:true}}).toArray()
    res.json(posts)
  } catch (err) {
    console.log(err)
    next(new Error())
  }
}

const createCtrl = async (req: Request, res: Response, next:NextFunction) => {
  const {content} = req.body

  if (!content) {
    const err = new Error("Mangler innhold")
    next(err)
    return
  }

  try {
    const user = await User.findById(req.session.userAuth)
    if (!user) {
      const err = new Error("Fant ikke bruker")
      next(err)
      return
    }

    const post = await Post.create({
      author: user.id,
      content: content,
    })

    post.save()

    res.json({sucess:true})
  } catch (err) {
    console.log(err)
    next(new Error())
  }
}

export {createCtrl, getPostsCtrl}
