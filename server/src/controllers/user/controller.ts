import {Request, Response, NextFunction} from "express"
import User from "../../models/user/User"

const loginCtrl = async (req: Request, res: Response, next: NextFunction) => {
  const {username, password} = req.body

  if (!username) {
    const err = new Error("Missing username")
    next(err)
  } else if (!password) {
    const err = new Error("Missing password")
    next(err)
  }

  try {
    const user = await User.findOne({username:username, password:password})

    if (!user) {
      const err = new Error("Wrong username or password")
      next(err)
      return
    }

    req.session.userAuth = user.id

    res.json({status:"sucess"})
  } catch (err) {
    console.log(err)
    next(new Error())
  }
}

export {loginCtrl}
