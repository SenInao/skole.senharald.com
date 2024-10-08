import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./layout/home/Home";
import NyttInnlegg from "./layout/nyttInnlegg/NyttInnlegg";
import Profil from "./layout/profil/Profil";
import Login from "./layout/login/Login";
import Register from "./layout/register/Register";
import { useContext } from "react";
import { UserContext } from "./context/userContext";

function App() {
  const userContext = useContext(UserContext)
  if (!userContext) return null
  
  const {loading} = userContext

  if (loading) {
    return (
      <h1>Loading</h1>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profil" element={<Profil/>}/>
        <Route path="/nyttinnlegg" element={<NyttInnlegg/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registrer" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
