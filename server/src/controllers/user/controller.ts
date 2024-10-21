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
  try {
    const user = await User.findById(req.session.userAuth).populate({path:"posts"})
    res.json({user:user})
  } catch (err) {
    console.log(err)
    next(new Error())
  }
}

export {loginCtrl, registerCtrl, logoutCtrl, profileCtrl}
