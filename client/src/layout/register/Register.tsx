import Navbar from "../../components/navbar/Navbar"

const Register : React.FC = () => {
  return (
    <div className="Login">
      <Navbar/>
      <div className="loginForm">
        <h3>Registrer</h3>
        <div className="inputLabel">
          <label>Brukernavn</label>
        </div>
        <input type="text" className="loginInput"></input>
        <div className="inputLabel">
          <label>Passord</label>
        </div>
        <input type="password" className="loginInput"></input>
        <div className="inputLabel">
          <label>Bekreft Passord</label>
        </div>
        <input type="password" className="loginInput"></input>
        <button className="loginButton">Registrer</button>
        <a href="/login">Log in</a>
      </div>
    </div>
  )
}

export default Register
