import { KeyboardEvent, useContext, useRef } from "react"
import Navbar from "../../components/navbar/Navbar"
import "./Login.css"
import loginReq from "../../utils/loginReq"
import showLabel from "../../utils/label"
import { UserContext } from "../../context/userContext"
import { useNavigate } from "react-router-dom"

const Login : React.FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const infoRef = useRef<HTMLLabelElement>(null)

  const navigate = useNavigate()

  const userContext = useContext(UserContext)
  if (!userContext) return null
  const {setUser} = userContext

  async function onLogin() {
    if (!usernameRef.current || ! passwordRef.current) return
    const username = usernameRef.current.value
    const password = passwordRef.current.value

    if (!username || !password) {
      showLabel(infoRef.current, "Alle felt nødvendig", "red")
      return
    }

    const result = await loginReq("login", username, password)
    setUser(result.user)

    if (result.sucess) {
      navigate("/profil")
    } else {
      showLabel(infoRef.current, result.error, "red")
    }
  }

  function onKeydown(e:KeyboardEvent) {
    if (e.key === "Enter") {
      onLogin()
    }
  }

  return (
    <div className="Login">
      <Navbar/>
      <div className="loginForm">
        <h3>Logg inn</h3>
        <label ref={infoRef} className="info-label">Error</label>
        <div className="inputLabel">
          <label>Brukernavn</label>
        </div>
        <input ref={usernameRef} type="text" className="loginInput" onKeyDown={onKeydown}></input>
        <div className="inputLabel">
          <label>Passord</label>
        </div>
        <input ref={passwordRef} type="password" className="loginInput" onKeyDown={onKeydown}></input>
        <button className="loginButton" onClick={onLogin}>Logg inn</button>
        <a href="/registrer">Registrer</a>
      </div>
    </div>
  )
}

export default Login
