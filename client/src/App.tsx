import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./layout/home/Home";
import NyttInnlegg from "./layout/nyttInnlegg/NyttInnlegg";
import Profil from "./layout/profil/Profil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profil" element={<Profil/>}/>
        <Route path="/nyttinnlegg" element={<NyttInnlegg/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
