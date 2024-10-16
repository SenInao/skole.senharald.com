import { useContext, useState } from "react"
import "./Navbar.css"
import {BsPersonCircle} from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/userContext"

const Navbar : React.FC = () => {
  const [showDropdown, setDropdown] = useState(false)
  const navigate = useNavigate()
  const userContext = useContext(UserContext)
  if (!userContext) return null
  
  const {user, setUser} = userContext

  function profileIconPress() {
    setDropdown(!showDropdown)
  }

  function logout() {
    fetch(window.location.origin + "/api/user/logout", {
      method: "POST"
    })
    setUser(null)
    navigate("/")
  }

  return (
    <nav id="Navbar">
      <h1 className="Fjesbok" onClick={()=>{navigate("/")}}>Fjesbok</h1>
      <div id="navbarItems">
        {user ? <button className="navbarButton" onClick={()=>{navigate("/nyttinnlegg")}}>Nytt inlegg</button> : null}
        {user ? 
        <div className="iconContainer" onClick={profileIconPress}>
          <BsPersonCircle cursor="pointer" color="white" size="7vh"/>
          { showDropdown ? 
            <div className="profile-dropdown">
              <button onClick={()=>{navigate("/profil")}}>Min profil</button>
              <button onClick={()=>{navigate("/")}}>Venner</button>
              <button onClick={logout}>Log ut</button>
            </div> : null
          }
        </div> : null
        }

        {user ? null : <button className="navbarButton" onClick={()=>{navigate("/login")}}>Log in</button> }
        {user ? null : <button className="navbarButton" onClick={()=>{navigate("/registrer")}}>Registrer</button> }
      </div>
    </nav>
  )
}

export default Navbar
