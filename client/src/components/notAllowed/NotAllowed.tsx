import Navbar from "../navbar/Navbar"

const NotAllowed:React.FC = () => {
  return (
    <div id="NotAllowed" style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
      <Navbar/>
      <h1>Logg inn for å se denne siden</h1>
    </div>
  )
}

export default NotAllowed
