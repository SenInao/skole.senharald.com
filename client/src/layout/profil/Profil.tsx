import {BsPersonCircle} from "react-icons/bs"
import "./Profil.css"
import Navbar from "../../components/navbar/Navbar"
import { useContext } from "react"
import { UserContext } from "../../context/userContext"

const Profil : React.FC = () => {

  const userContext = useContext(UserContext)
  if (!userContext)return null
  
  const {user} = userContext

  if (!user) {
    return <div>Ikke tillat</div>
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
    </div>
  )
}

export default Profil
