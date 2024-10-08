import { useRef } from "react"
import Navbar from "../../components/navbar/Navbar"
import "./Login.css"
import loginReq from "../../utils/loginReq"

const Login : React.FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  function onLogin() {
    if (!usernameRef.current || ! passwordRef.current) return
    const username = usernameRef.current.value
    const password = usernameRef.current.value
    loginReq("login", username, password, ()=>{},()=>{})
  }

  return (
    <div className="Login">
      <Navbar/>
      <div className="loginForm">
        <h3>Log in</h3>
        <div className="inputLabel">
          <label>Brukernavn</label>
        </div>
        <input ref={usernameRef} type="text" className="loginInput"></input>
        <div className="inputLabel">
          <label>Passord</label>
        </div>
        <input ref={passwordRef} type="password" className="loginInput"></input>
        <button className="loginButton" onClick={onLogin}>Log in</button>
        <a href="/registrer">Registrer</a>
      </div>
    </div>
  )
}

export default Login
