import { useContext, useRef } from "react"
import Navbar from "../../components/navbar/Navbar"
import showLabel from "../../utils/label"
import loginReq from "../../utils/loginReq"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/userContext"

const Register : React.FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const password1Ref = useRef<HTMLInputElement>(null)
  const infoRef = useRef<HTMLLabelElement>(null)

  const navigate = useNavigate()

  const userContext = useContext(UserContext)
  if (!userContext) return null
  const {setUser} = userContext

  async function onRegister() {
    if (!usernameRef.current || ! passwordRef.current || !infoRef.current || !password1Ref.current) return
    const username = usernameRef.current.value
    const password = passwordRef.current.value
    const password1 = password1Ref.current.value

    if (!username || !password || !password1) {
      showLabel(infoRef.current, "Alle felt nødvendig", "red")
      return
    }

    if (!(password == password1)) {
      showLabel(infoRef.current, "Passord må være likt", "red")
      return
    }

    const result = await loginReq("register", username, password)
    setUser(result.user)

    if (result.sucess) {
      navigate("/profil")
    } else {
      showLabel(infoRef.current, result.error, "red")
    }
  }

  return (
    <div className="Login">
      <Navbar/>
      <div className="loginForm">
        <h3>Registrer</h3>
        <label ref={infoRef} className="info-label">Error</label>
        <div className="inputLabel">
          <label>Brukernavn</label>
        </div>
        <input ref={usernameRef} type="text" className="loginInput"></input>
        <div className="inputLabel">
          <label>Passord</label>
        </div>
        <input ref={passwordRef} type="password" className="loginInput"></input>
        <div className="inputLabel">
          <label>Bekreft Passord</label>
        </div>
        <input ref={password1Ref} type="password" className="loginInput"></input>
        <button className="loginButton" onClick={onRegister}>Registrer</button>
        <a href="/login">Log in</a>
      </div>
    </div>
  )
}

export default Register
