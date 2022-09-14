import React from "react";
import "../styles/App.css"; 
import MyButton from "./UI/button/MyButton";

const Posts = (props) => {
  return (
      <div className="post">
        <div className="post__content">
          <h2>{props.post.id}. {props.post.title}</h2>
          <strong>{props.post.body}</strong>
        </div>
        <div className="post__button">
          <MyButton onClick={() => props.delete(props.post)}>Delete</MyButton>
        </div>
      </div>
  );
};

export default Posts;
