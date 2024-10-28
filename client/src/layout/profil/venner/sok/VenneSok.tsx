import {BsPersonCircle} from "react-icons/bs"
import Navbar from "../../../../components/navbar/Navbar"
import "./VenneSok.css"

const VenneSok:React.FC = () => {
  return (
    <div id="vennesok">
      <Navbar/>
      <input id="sok" type="text" placeholder="Brukernavn"/>
      <div id="sok-resultat">
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
          <label className="usernameLabel">Superman123</label>
        </div>
      </div>
    </div>
  )
}

export default VenneSok
