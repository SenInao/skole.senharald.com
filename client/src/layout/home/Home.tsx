import { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import Post from "../../components/post/Post"
import "./Home.css"
import {PostType} from "../../typedef/typedefs"


const Home : React.FC = () => {
  const [posts, setPosts] = useState<PostType[] | null>(null)

  useEffect(()=>{
    fetch(window.location.origin + "/api/post/")
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      })
  }, [])

  if (!posts) {
    return <div>Loading</div>
  } else {
      console.log(posts)
  }

  return (
    <div id="Home">
      <Navbar/>
      <div className="postsWrapper">
        {posts.map(post => {
            return <Post key={posts.indexOf(post)} post={post}/>
          })}
      </div>
    </div>
  )
}

export default Home
