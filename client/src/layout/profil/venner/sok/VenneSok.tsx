import {BsPersonCircle} from "react-icons/bs"
import Navbar from "../../../../components/navbar/Navbar"
import "./VenneSok.css"
import { useRef, useState } from "react"
import { UserType } from "../../../../typedef/typedefs"

const VenneSok:React.FC = () => {
  const [results, setResults] = useState<UserType[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  function searchUsers() {
    if (!inputRef.current) return

    if (!inputRef.current.value) {
      setResults([])
      return
    }

    fetch(window.location.origin + "/api/user/search/" + inputRef.current.value)
      .then(response => response.json())
      .then(data => {
        setResults(data.users)
      })
  }
  
  return (
    <div id="vennesok">
      <Navbar/>
      <input ref={inputRef} id="sok" type="text" placeholder="Brukernavn" onInput={searchUsers}/>
      <div id="sok-resultat">
        {results.map(user=> {
            return (
              <div className="friendDisplay">
                <div className="iconContainer">
                  <BsPersonCircle cursor="pointer" color="gray" size="50px"/>
                </div>
                <label className="usernameLabel">{user.username}</label>
              </div>
            )
        })}
      </div>
    </div>
  )
}

export default VenneSok
