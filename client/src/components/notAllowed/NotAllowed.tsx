import Navbar from "../navbar/Navbar"
import { MdOutlineLock } from "react-icons/md";

const NotAllowed:React.FC = () => {
  return (
    <div id="NotAllowed" style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
      <Navbar/>
      <h1 style={{color:"gray"}}>Logg inn for å se denne siden</h1>
      <MdOutlineLock size="50" color="gray"/>
    </div>
  )
}

export default NotAllowed
