import { useRef } from "react"
import Navbar from "../../components/navbar/Navbar"
import showLabel from "../../utils/label"
import loginReq from "../../utils/loginReq"

const Register : React.FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const password1Ref = useRef<HTMLInputElement>(null)
  const infoRef = useRef<HTMLLabelElement>(null)

  function onRegister() {
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
    loginReq("register", username, password, ()=>{},()=>{})
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
