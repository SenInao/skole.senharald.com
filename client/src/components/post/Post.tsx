import "./Post.css"
import {BsPersonCircle} from "react-icons/bs"
import {AiOutlineLike, AiOutlineDislike} from "react-icons/ai"
import { PostType } from "../../typedef/typedefs"
import { UserContext } from "../../context/userContext"
import { useContext, useState } from "react"
import userListIndex from "../../utils/userListIndex"

interface Props {
  post: PostType
}

const Post : React.FC<Props> = ({post: initialPost}) => {
  const [post, setPost] = useState(initialPost)

  const userContext = useContext(UserContext)
  if (!userContext) return null
  
  const {user} = userContext
  
  const date = new Date(post.createdAt)

  let dislikeColor = "black"
  let likeColor = "black"

  if (user) {
    if (userListIndex(user, post.likes) !== -1) {
      likeColor = "red"
    } else if (userListIndex(user, post.dislikes) !== -1) {
      dislikeColor = "red"
    }
  }

  function unLikePost(like: boolean) {
    if (!user) return
    fetch(window.location.origin + "/api/post/u-lik", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({id:post._id})
    })
    if (like) {
      const i = userListIndex(user, post.likes)
      const likes = [...post.likes]
      likes.splice(i, 1)
      setPost(prevPost => ({
        ...prevPost,
        likes: likes
      }))
    } else {
      const i = userListIndex(user, post.dislikes)
      const dislikes = [...post.dislikes]
      dislikes.splice(i, 1)
      setPost(prevPost => ({
        ...prevPost,
        dislikes: dislikes
      }))
    }
  }

  function likePost() {
    if (likeColor === "red") {
      unLikePost(true)
      return
    }
    if (dislikeColor === "red") {
      unLikePost(false)
    }

    if (!user) return
    fetch(window.location.origin + "/api/post/lik", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({id:post._id})
    })
    setPost(prevPost => ({
      ...prevPost,
      likes: [...prevPost.likes, user]
    }))
  }

  function dislikePost() {
    if (dislikeColor === "red") {
      unLikePost(false)
      return
    }
    if (likeColor === "red") {
      unLikePost(true)
    }

    if (!user) return
    fetch(window.location.origin + "/api/post/dislik", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({id:post._id})
    })
    setPost(prevPost => ({
      ...prevPost,
      dislikes: [...prevPost.dislikes, user]
    }))
  }

  return (
    <div className="Post">
      <div className="postInfo">
        <div className="userInfo">
          <div className="iconContainer">
            <BsPersonCircle cursor="pointer" color="gray" size="30px"/>
          </div>
          <label>{post.author.username}</label>
        </div>
        <label className="dateCreated">{date.toLocaleString()}</label>
      </div>
      <p className="postContent">{post.content}</p>

      <div className="postActions">
        <div className="likeButton" onClick={likePost}>
          <AiOutlineLike size="20px" color={likeColor}/>
        </div>
        <label>{post.likes.length}</label>
        <div className="likeButton" onClick={dislikePost}>
          <AiOutlineDislike size="20px" color={dislikeColor}/>
        </div>
        <label>{post.dislikes.length}</label>
      </div>
    </div>
  )
}

export default Post
