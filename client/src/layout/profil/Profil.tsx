import {BsPersonCircle} from "react-icons/bs"
import "./Profil.css"
import Navbar from "../../components/navbar/Navbar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/userContext"
import Post from "../../components/post/Post"
import getUser from "../../utils/getUser"
import Loading from "../../components/loading/Loading"
import NotAllowed from "../../components/notAllowed/NotAllowed"
import {PostType} from "../../typedef/typedefs"

const Profil : React.FC = () => {
  const [userUpdated, setUpdate] = useState(false)

  const userContext = useContext(UserContext)
  if (!userContext)return null
  
  const {user, setUser} = userContext

  useEffect(() => {
    if (!userUpdated) {
      getUser()
        .then(user => {
          if (user) {
            user.posts.sort((a:PostType, b:PostType) => b.createdAt < a.createdAt ? -1 : b.createdAt > a.createdAt ? 1 : 0)
            setUser(user)
          }
          setUpdate(true)
        })
    }
  }, [])

  if (!user) {
    return <NotAllowed/>
  }

  if (!userUpdated) {
    return <Loading/>
  }

  return (
    <div id="Profil">
      <Navbar/>
      <div className="userHomeInfo">
        <div className="iconContainer">
          <BsPersonCircle cursor="pointer" color="gray" size="7rem"/>
        </div>
        <h3>{user.username}</h3>
        <label>Bio:</label>
        <p id="description">{user.bio}</p>
      </div>
      <div className="userPosts">
        {user.posts.map(post => {
            return <Post key={user.posts.indexOf(post)} post={post}/>
          })}
      </div>
    </div>
  )
}

export default Profil
