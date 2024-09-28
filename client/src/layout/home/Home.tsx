import Navbar from "../../components/navbar/Navbar"
import Post from "../../components/post/Post"
import "./Home.css"

const Home : React.FC = () => {
  return (
    <div id="Home">
      <Navbar/>
      <div className="postsWrapper">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default Home
