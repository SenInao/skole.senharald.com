import "./Post.css"
import {BsPersonCircle} from "react-icons/bs"
import {AiOutlineLike, AiOutlineDislike} from "react-icons/ai"

const Post : React.FC = () => {
  return (
    <div id="Post">
      <div className="postInfo">
        <div className="userInfo">
          <div className="iconContainer">
            <BsPersonCircle cursor="pointer" color="gray" size="30px"/>
          </div>
          <label>Sen Harald Hjort Inao</label>
        </div>
        <label className="dateCreated">2 d</label>
      </div>
      <p className="postContent">lorem lore mlore mlore mlore mlore mloremloremloremloreml oremloremloremloreml oremlo remlore mloremloremloremloremloreml oremloremloremloremloremlorem</p>

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
