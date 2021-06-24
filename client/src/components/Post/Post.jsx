import { Link } from "react-router-dom";
// import "./Posts.css";

export default function Post(props) {
  return (
    <>
      <div className="post-container" to={`/posts/${props._id}`}>
        <div className="post-title">{props.title}</div>
        <div className="post-author">{props.author}</div>
        <div className="post-entryDate">{props.entryDate}</div>
        <div className="post-content">{props.content}</div>
        <img className="image" src={props.imgURL} alt={props.title} />
      </div>
    </>
  );
}
