import { NextFunction, Request, Response } from "express"
import User from "../../models/user/User"
import Post from "../../models/post/Post"

const getPostsCtrl = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const posts = await Post.find().populate({path:"author", select:"username -_id"})

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
  const {postId} = req.body

  if (!postId) {
    const err = new Error("Mangler innlegg id")
    next(err)
    return
  }

  try {
    const post = await Post.findById(postId)
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

    if (post.likes.indexOf(user._id) !== -1) {
      const err = new Error("Allerede liket innlegg")
      next(err)
      return
    }

    if (post.dislikes.indexOf(user.id) !== 1) {
      const err = new Error("Allerede ikke-liket innlegg")
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
  const {postId} = req.body

  if (!postId) {
    const err = new Error("Mangler innlegg id")
    next(err)
    return
  }

  try {
    const post = await Post.findById(postId)
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

    if (post.dislikes.indexOf(user._id) !== -1) {
      const err = new Error("Allerede ikke-liket innlegg")
      next(err)
      return
    }

    if (post.likes.indexOf(user.id) !== 1) {
      const err = new Error("Allerede liket innlegg")
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
  const LIKED = 0
  const DISLIKED = 1
  const {postId, like} = req.body

  if (!postId) {
    const err = new Error("Mangler innlegg id")
    next(err)
    return
  }
  try {
    const post = await Post.findById(postId)
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

    if (like === LIKED) {
      const i = post.likes.indexOf(user._id)
      if (i !== -1) {
        const err = new Error("Ikke liket innlegget")
        next(err)
        return
      } else {
        post.likes.splice(i, 1)
      }
    } else if (like === DISLIKED) {
      const i = post.dislikes.indexOf(user._id)
      if (i !== -1) {
        const err = new Error("Ikke disliket innlegget")
        next(err)
        return
      } else {
        post.dislikes.splice(i, 1)
      }
    } else {
      const err = new Error("Trenger hva du vil ta bort")
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

export {createCtrl, getPostsCtrl}
