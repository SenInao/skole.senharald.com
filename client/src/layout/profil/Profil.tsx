import {BsPersonCircle} from "react-icons/bs"
import "./Profil.css"
import image from "./bg.jpg"
import Navbar from "../../components/navbar/Navbar"

const Profil : React.FC = () => {
  return (
    <div id="Profil">
      <Navbar/>
      <div className="frontPictureContainer">
        <img src={image} className="frontPicture"/>
      </div>
      <div className="userHomeInfo">
        <div className="iconContainer">
          <BsPersonCircle cursor="pointer" color="gray" size="7rem"/>
        </div>
        <h3>Sen Harald Hjort Inao</h3>
        <label>Description: </label>
        <p id="description">kawjdfkwajdkawjdkawjdkawjdkawjdkl jdlkajwdlkjaw akdjawlkdjka kajdwklawjdk akjdwlkwajdlkaj akjdlkwajdlkj dlkawjdkja ajwdkwja alkwjdkajwkd</p>
      </div>
    </div>
  )
}

export default Profil
