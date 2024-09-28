import "./Navbar.css"
import {BsPersonCircle} from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const Navbar : React.FC = () => {
  const navigate = useNavigate()
  return (
    <nav id="Navbar">
      <h1 className="Fjesbok" onClick={()=>{navigate("/")}}>Fjesbok</h1>
      <div id="navbarItems">
        <button className="navbarButton" onClick={()=>{navigate("/nyttinnlegg")}}>Nytt inlegg</button>
        <button className="navbarButton">Venner</button>
        <div className="iconContainer" onClick={()=>{navigate("/profil")}}>
          <BsPersonCircle cursor="pointer" color="white" size="7vh"/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
