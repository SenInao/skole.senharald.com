import Navbar from "../../components/navbar/Navbar"
import "./Login.css"

const Login : React.FC = () => {
  return (
    <div className="Login">
      <Navbar/>
      <div className="loginForm">
        <h3>Log in</h3>
        <div className="inputLabel">
          <label>Brukernavn</label>
        </div>
        <input type="text" className="loginInput"></input>
        <div className="inputLabel">
          <label>Passord</label>
        </div>
        <input type="password" className="loginInput"></input>
        <button className="loginButton">Log in</button>
        <a href="/registrer">Registrer</a>
      </div>
    </div>
  )
}

export default Login
