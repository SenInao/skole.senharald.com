import "./Navbar.css"
import {BsPersonCircle} from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const Navbar : React.FC = () => {
  const navigate = useNavigate()
  const loggedIn = true

  return (
    <nav id="Navbar">
      <h1 className="Fjesbok" onClick={()=>{navigate("/")}}>Fjesbok</h1>
      <div id="navbarItems">
        {loggedIn ? <button className="navbarButton" onClick={()=>{navigate("/nyttinnlegg")}}>Nytt inlegg</button> : null}
        {loggedIn ? <button className="navbarButton">Venner</button> : null}
        {loggedIn ? 
        <div className="iconContainer" onClick={()=>{navigate("/profil")}}>
          <BsPersonCircle cursor="pointer" color="white" size="7vh"/>
        </div> : null
        }

        {loggedIn ? null : <button className="navbarButton">Log in</button> }
        {loggedIn ? null : <button className="navbarButton">Register</button> }
      </div>
    </nav>
  )
}

export default Navbar
