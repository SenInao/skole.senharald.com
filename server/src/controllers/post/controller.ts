import { NextFunction, Request, Response } from "express"
import User from "../../models/user/User"
import Post from "../../models/post/Post"

const getPostsCtrl = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const posts = await Post.find().populate({path:"author", select:"username -_id"}).populate({path:"likes", select:"username -_id"})

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

    user.posts.push(post._id)
    
    user.save()
    post.save()

    res.json({sucess:true})
  } catch (err) {
    console.log(err)
    next(new Error())
  }
}

const likePostCtrl = async (req:Request, res:Response, next:NextFunction) => {
  const {id} = req.body

  if (!id) {
    const err = new Error("Mangler innlegg id")
    next(err)
    return
  }

  try {
    const post = await Post.findById(id)
    if (!post) {
      const err = new Error("Fant ikke innlegg")
      next(err)
      return
    }

    const user = await User.findById(req.session.userAuth)
    if (!user) {
      const err = new Error("Fant ikke bruker")
      next(err)
      return
    }

    if (post.likes.indexOf(user._id) !== -1 || post.dislikes.indexOf(user._id) !== -1) {
      const err = new Error("Allerede liket innlegg. u-lik innlegget først")
      next(err)
      return
    }

    post.likes.push(user._id)
    post.save()

    res.json({sucess:true})
  } catch (err) {
    console.log(err)
    next(new Error())
  }
}

const dislikePostCtrl = async (req:Request, res:Response, next:NextFunction) => {
  const {id} = req.body

  if (!id) {
    const err = new Error("Mangler innlegg id")
    next(err)
    return
  }

  try {
    const post = await Post.findById(id)
    if (!post) {
      const err = new Error("Fant ikk innlegg")
      next(err)
      return
    }

    const user = await User.findById(req.session.userAuth)
    if (!user) {
      const err = new Error("Fant ikke bruker")
      next(err)
      return
    }

    if (post.likes.indexOf(user._id) !== -1 || post.dislikes.indexOf(user._id) !== -1) {
      const err = new Error("Allerede liket innlegg. u-lik innlegget først")
      next(err)
      return
    }

    post.dislikes.push(user._id)
    post.save()

    res.json({sucess:true})
  } catch (err) {
    console.log(err)
    next(new Error())
  }
}

const unlikeCtrl = async (req:Request, res:Response, next:NextFunction) => {
  const {id} = req.body

  if (!id) {
    const err = new Error("Mangler innlegg id")
    next(err)
    return
  }

  try {
    const post = await Post.findById(id)
    if (!post) {
      const err = new Error("Fant ikk innlegg")
      next(err)
      return
    }

    const user = await User.findById(req.session.userAuth)
    if (!user) {
      const err = new Error("Fant ikke bruker")
      next(err)
      return
    }

    const likesIndex = post.likes.indexOf(user._id)
    const dislikesIndex = post.dislikes.indexOf(user._id)
    if (likesIndex !== -1) {
      post.likes.splice(likesIndex, 1)
    } else if (dislikesIndex !== -1) {
      post.dislikes.splice(dislikesIndex, 1)
    } else {
      const err = new Error("Har ikke liket innlegg")
      next(err)
      return
    }

    post.save()

    res.json({sucess:true})
  } catch (err) {
    console.log(err)
    next(new Error())
  }
}

export {createCtrl, getPostsCtrl, likePostCtrl, dislikePostCtrl, unlikeCtrl}
