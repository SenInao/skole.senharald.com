import {IoIosAttach} from "react-icons/io"
import Navbar from "../../components/navbar/Navbar"
import "./NyttInnlegg.css"

const NyttInnlegg : React.FC = () => {
  return (
    <div id="NyttInnlegg">
      <Navbar/>
      <div className="creationContainer">
        <h2>Nytt innlegg</h2>
        <textarea className="contentInput"></textarea>
        <div className="postActions">
          <div className="attachButton">
            <IoIosAttach size="30px" color="gray"/>
          </div>
          <button className="createPostButton">Lag</button>
        </div>
      </div>
    </div>
  )
}

export default NyttInnlegg
