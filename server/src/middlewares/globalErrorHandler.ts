import {Request, Response, NextFunction} from "express"

const errHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const status = 200
  const message = err.message || "Server Error"

  console.log(`Error: ${message}`)

  res.status(status).json({
    status: false,
    error: {
      message: message,
      status: status
    }
  })
}

export default errHandler
