import { Request, Response, NextFunction } from "express";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.userAuth) {
    const err = new Error("Permission denied")
    next(err)
  }
  next()
}

export default authenticate
