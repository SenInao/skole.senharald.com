import MongoStore from "connect-mongo"
import session from "express-session"

function getSession() {
  const sessionKey = process.env.SESSION_KEY
  const mongoUrl = process.env.MONGO_URL

  if (!sessionKey) {
    throw new Error("Missing session key")
  } 

  return session({
    secret:sessionKey,
    resave:false,
    saveUninitialized:true,
    store:MongoStore.create({
      mongoUrl:mongoUrl,
      ttl: 14 * 24 * 60 * 60
    }),
    cookie: {
      maxAge: 14 * 24 * 60 * 60 * 1000,
      secure: true,
    }
  })
}

export default getSession
