import {BsPersonCircle} from "react-icons/bs"
import "./Profil.css"
import Navbar from "../../components/navbar/Navbar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/userContext"
import Post from "../../components/post/Post"
import getUser from "../../utils/getUser"
import Loading from "../../components/loading/Loading"
import NotAllowed from "../../components/notAllowed/NotAllowed"
import {PostType, UserType} from "../../typedef/typedefs"

const Profil : React.FC = () => {
  const [userProfil, setProfil] = useState<UserType | null>(null)
  const [loading, setLoading] = useState(true)

  const userContext = useContext(UserContext)
  if (!userContext)return null

  let username = ""

  const url = window.location.href
  const link = url.split("/")
  if (link[link.length-1] && link.length > 4) {
    username = link[link.length-1]
  }
  
  useEffect(() => {
    getUser(username)
      .then(user => {
        if (user) {
          user.posts.sort((a:PostType, b:PostType) => b.createdAt < a.createdAt ? -1 : b.createdAt > a.createdAt ? 1 : 0)
          setProfil(user)
        }
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Loading/>
  }

  if (!userProfil) {
    return <NotAllowed/>
  }

  return (
    <div id="Profil">
      <Navbar/>
      <div className="userHomeInfo">
        <div className="iconContainer">
          <BsPersonCircle cursor="pointer" color="gray" size="7rem"/>
        </div>
        <h3>{userProfil.username}</h3>
        <label>Bio: {userProfil.bio}</label>
        <p id="description">{userProfil.bio}</p>
      </div>
      <div className="userPosts">
        {userProfil.posts.map(post => {
            return <Post key={userProfil.posts.indexOf(post)} post={post}/>
          })}
      </div>
    </div>
  )
}

export default Profil
