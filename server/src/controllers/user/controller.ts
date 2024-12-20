import {Request, Response, NextFunction} from "express"
import User from "../../models/user/User"

const loginCtrl = async (req: Request, res: Response, next: NextFunction) => {
  const {username, password} = req.body

  if (!username) {
    const err = new Error("Mangler brukernavn")
    next(err)
    return
  } else if (!password) {
    const err = new Error("Mangler passord")
    next(err)
    return
  }

  try {
    const user = await User.findOne({username:username, password:password})

    if (!user) {
      const err = new Error("Feil brukernavn eller passord")
      next(err)
      return
    }

    req.session.userAuth = user.id

    await user.populate({path:"posts", populate:[
      {path:"author", select:"username -_id"},
      {path:"likes", select:"username -_id"},
      {path:"dislikes", select:"username -_id"}
    ]})
    res.json({status:true, user: user})
  } catch (err) {
    console.log(err)
    next(new Error())
  }
}

const registerCtrl = async (req: Request, res: Response, next: NextFunction) => {
  const {username, password} = req.body

  if (!username) {
    const err = new Error("Mangler brukernavn")
    next(err)
    return
  } else if (!password) {
    const err = new Error("Mangler passord")
    next(err)
    return
  }

  try {
    const usernameTaken  = await User.findOne({username:username})
    if (usernameTaken) {
      const err = new Error("Brukernavn opptatt")
      next(err)
      return
    }

    const user = await User.create({
      username: username,
      password: password
    })

    await user.save({validateBeforeSave: false})

    req.session.userAuth = user.id

    res.json({status:true, user: user})
  } catch (err) {
    console.log(err)
    next(new Error())
  }
}

const logoutCtrl = (req: Request, res: Response, next: NextFunction) => {
  try {
    req.session.userAuth = null
    res.json({status:true})
  } catch (err) {
    console.log(err)
    next(new Error())
  }
}

const profileCtrl = async (req: Request, res: Response, next: NextFunction) => {
  const {username} = req.params

  try {
    let user

    if (!username) {
      user = await User.findById(req.session.userAuth).select("username posts friends comments bio -_id")
    } else {
      user = await User.findOne({username:username}).select("username posts friends comments bio -_id")
    }

    if (!user) {
      const err = new Error("Bruker finnes ikke")
      next(err)
      return
    }

    await user.populate({path:"posts", populate:[
      {path:"author", select:"username -_id"},
      {path:"likes", select:"username -_id"},
      {path:"dislikes", select:"username -_id"}
    ]})

    res.json({user:user})
  } catch (err) {
    console.log(err)
    next(new Error())
  }
}

const addFriendCtrl = async (req:Request, res:Response, next:NextFunction) => {
  const {username} = req.body
  if (!username) {
    const err = new Error("Brukernavn nødvendig")
    next(err)
    return
  }
  try {
    const friend = await User.findOne({username:username})
    if (!friend) {
      next(new Error("Fant ikke bruker"))
      return
    }
    const user = await User.findOne({username:req.session.userAuth})
    if (!user) {
      next(new Error("Fant ikke bruker"))
      return
    }

    if (user.friends.includes(friend._id)) {
      next(new Error("Already friends with this user"))
      return
    }

    user.friends.push(friend._id)
    user.save()

    res.json({status:true})
  }catch (err) {
    console.log(err)
    next(new Error())
  }
}

const searchUserCtrl = async (req:Request, res: Response, next: NextFunction) => {
  const {sok} = req.params

  if (!sok) {
    const err = new Error("Søk nødvendig")
    next(err)
    return
  }
  try {
    const users = await User.find({
      username: {$regex:`^${sok}`, $options: 'i' }
    }).select("username -_id")

    res.json({users:users})
  } catch (err) {
    console.log(err)
    next(new Error())
  }
}

export {loginCtrl, registerCtrl, logoutCtrl, profileCtrl, searchUserCtrl, addFriendCtrl}
