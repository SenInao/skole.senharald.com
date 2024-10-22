import Navbar from "../../../components/navbar/Navbar"
import {BsPersonCircle} from "react-icons/bs"
import "./Venner.css"

const Venner:React.FC = () => {
  return (
    <div id="Venner">
      <Navbar/>
      <h1>Mine Venner</h1>
      <div id="friendsContainer">
        <div className="friendDisplay">
          <div className="iconContainer">
            <BsPersonCircle cursor="pointer" color="gray" size="50px"/>
          </div>
          <label className="usernameLabel">Ben</label>
        </div>
        <div className="friendDisplay">
          <div className="iconContainer">
            <BsPersonCircle cursor="pointer" color="gray" size="50px"/>
          </div>
          <label className="usernameLabel">Tom</label>
        </div>
      </div>
    </div>
  )
}

export default Venner
