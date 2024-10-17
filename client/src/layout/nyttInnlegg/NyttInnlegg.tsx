import {useContext, useRef} from "react"
import {BsPersonCircle} from "react-icons/bs"
import Navbar from "../../components/navbar/Navbar"
import "./NyttInnlegg.css"
import { IoIosAttach } from "react-icons/io";
import { UserContext } from "../../context/userContext";
import showLabel from "../../utils/label";

const NyttInnlegg : React.FC = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const infoLabelRef = useRef<HTMLLabelElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const userContext = useContext(UserContext)
  if (!userContext) return null

  const {user} = userContext

  function autoResize() {
    if (!textAreaRef.current) return
    textAreaRef.current.style.height = "5px"
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
  }

  function createPost() {
    if (!textAreaRef.current || !btnRef.current) return

    const content = textAreaRef.current.value

    if (!content) {
      showLabel(infoLabelRef.current, "Kan ikke publisere uten innhold", "red")
      return
    }

    btnRef.current.style.display = "none"

    fetch(window.location.origin + "/api/post/create", {
      method : "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({content:content})
    })
      .then(response => response.json())
      .then(data => {
        if (data.sucess) {
          showLabel(infoLabelRef.current, "Publisert!", "green")
        } else {
          showLabel(infoLabelRef.current, data.error, "red")
        }
        if (btnRef.current) {
          btnRef.current.style.display = "block"
        }
      })
  }

  if (!user) {
    return <div>Ikke tillat</div>
  }

  return (
    <div id="NyttInnlegg">
      <Navbar/>
        <label className="info-label" style={{marginTop:"10px"}} ref={infoLabelRef}></label>
        <div id="Post">
          <div className="postInfo">
            <div className="userInfo">
              <div className="iconContainer">
                <BsPersonCircle cursor="pointer" color="gray" size="30px"/>
              </div>
              <label>{user.username}</label>
            </div>
          </div>
          <textarea className="content-input" autoFocus onInput={autoResize} ref={textAreaRef}></textarea>
        </div>
        <div className="postActions">
          <button ref={btnRef} className="publish-button" onClick={createPost}>Publiser</button>
          <IoIosAttach size="30px" color="gray" className="attach-button"/>
        </div>
    </div>
  )
}

export default NyttInnlegg
