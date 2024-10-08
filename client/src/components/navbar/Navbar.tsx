import { useContext } from "react"
import "./Navbar.css"
import {BsPersonCircle} from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/userContext"

const Navbar : React.FC = () => {
  const navigate = useNavigate()
  const userContext = useContext(UserContext)
  if (!userContext) return null
  
  const {user} = userContext
  console.log(user)

  return (
    <nav id="Navbar">
      <h1 className="Fjesbok" onClick={()=>{navigate("/")}}>Fjesbok</h1>
      <div id="navbarItems">
        {user ? <button className="navbarButton" onClick={()=>{navigate("/nyttinnlegg")}}>Nytt inlegg</button> : null}
        {user ? <button className="navbarButton">Venner</button> : null}
        {user ? 
        <div className="iconContainer" onClick={()=>{navigate("/profil")}}>
          <BsPersonCircle cursor="pointer" color="white" size="7vh"/>
        </div> : null
        }

        {user ? null : <button className="navbarButton" onClick={()=>{navigate("/login")}}>Log in</button> }
        {user ? null : <button className="navbarButton" onClick={()=>{navigate("/registrer")}}>Registrer</button> }
      </div>
    </nav>
  )
}

export default Navbar
