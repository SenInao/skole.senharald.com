import "./Post.css"
import {BsPersonCircle} from "react-icons/bs"
import {AiOutlineLike, AiOutlineDislike} from "react-icons/ai"
import { PostType } from "../../typedef/typedefs"

interface Props {
  post: PostType
}

const Post : React.FC<Props> = ({post}) => {
  const date = new Date(post.createdAt)

  return (
    <div id="Post">
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
        <div className="likeButton">
          <AiOutlineLike size="20px"/>
        </div>
        <div className="likeButton">
          <AiOutlineDislike size="20px"/>
        </div>
      </div>
    </div>
  )
}

export default Post
