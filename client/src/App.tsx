import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./layout/home/Home";
import NyttInnlegg from "./layout/nyttInnlegg/NyttInnlegg";
import Profil from "./layout/profil/Profil";
import Login from "./layout/login/Login";
import Register from "./layout/register/Register";
import { useContext } from "react";
import { UserContext } from "./context/userContext";
import Navbar from "./components/navbar/Navbar";
import Venner from "./layout/profil/venner/Venner";
import VenneSok from "./layout/profil/venner/sok/VenneSok";

function App() {
  const userContext = useContext(UserContext)
  if (!userContext) return null
  
  const {loading} = userContext

  return (
    <BrowserRouter>
      {loading ? <Navbar/> : (
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/profil" element={<Profil/>}/>
            <Route path="/nyttinnlegg" element={<NyttInnlegg/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registrer" element={<Register/>}/>
            <Route path="/profil/venner" element={<Venner/>}/>
            <Route path="/profil/venner/sok" element={<VenneSok/>}/>
            <Route path="/profil/*" element={<Profil/>}/>
          </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
