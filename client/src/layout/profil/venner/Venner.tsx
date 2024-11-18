import Navbar from "../../../components/navbar/Navbar"
import {BsPersonCircle} from "react-icons/bs"
import "./Venner.css"
import { useNavigate } from "react-router-dom"

const Venner:React.FC = () => {
  const navigate = useNavigate()

  return (
    <div id="Venner">
      <Navbar/>
      <div id="venner-tittel">
        <h1>Mine Venner</h1>
        <button id="leggtilvenn" onClick={()=>{navigate("/profil/venner/sok")}}>Legg til venn</button>
      </div>
      <div id="friendsContainer">
        <div className="friendDisplay">
          <div className="iconContainer">
            <BsPersonCircle cursor="pointer" color="gray" size="50px"/>
          </div>
          <label className="usernameLabel">Test-venn</label>
        </div>
      </div>
    </div>
  )
}

export default Venner
