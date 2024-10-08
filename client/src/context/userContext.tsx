import {createContext, ReactNode, useEffect, useState} from "react"

interface User {
  username: string,
  friends: User[],
}

interface UserContextType {
  user: User | null
  setUser: (user:User) => void
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
    fetch(window.location.origin + "/api/user/profile")
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          setUser(data.user)
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <UserContext.Provider value={{user, setUser, loading}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserProvider, UserContext}
