import {Request, Response, NextFunction} from "express"

const loginCtrl = (req: Request, res: Response, next: NextFunction) => {
  const {username, password} = req.body

  if (!username) {
    const err = new Error("Missing username")
    next(err)
  } else if (!password) {
    const err = new Error("Missing password")
    next(err)
  }

  try {
    res.json({status:"sucess"})
  } catch (err) {
    console.log(err)
    next(new Error())
  }
}

export {loginCtrl}
