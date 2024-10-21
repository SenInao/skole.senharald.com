import Navbar from "../navbar/Navbar"
import {ClipLoader} from "react-spinners"
import "./Loading.css"

const Loading: React.FC = () => {
  return (
    <div id="LoadingScreen">
      <Navbar/>
      <ClipLoader id="spinner" color="var(--color1)" size={100} loading={true} speedMultiplier={1}/>
    </div>
  )
}

export default Loading
