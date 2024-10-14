import {createContext, ReactNode, useEffect, useState} from "react"
import getUser from "../utils/getUser"

interface User {
  username: string,
  friends: User[],
  bio: string,
}

interface UserContextType {
  user: User | null
  setUser: (user:User | null) => void
  loading: boolean
}

interface Props {
  children: ReactNode
}

const UserContext = createContext<UserContextType | undefined>(undefined)

const UserProvider: React.FC<Props> = ({children}) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    getUser()
      .then(user => {
        if (user) {
          setUser(user)
        }
        setLoading(false)
      })
  }, [])

  return (
    <UserContext.Provider value={{user, setUser, loading}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserProvider, UserContext}
