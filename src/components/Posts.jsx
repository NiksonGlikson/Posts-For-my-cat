import React from "react";
import "../styles/App.css"; 
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const Posts = (props) => {
  const router = useNavigate();
  
  return (
      <div className="post">
        <div className="post__content">
          <h2>{props.post.id}. {props.post.title}</h2>
          <strong>{props.post.body}</strong>
        </div>
        <div className="post__button">
          <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Open</MyButton>
          <MyButton onClick={() => props.delete(props.post)}>Delete</MyButton>
        </div>
      </div>
  );
};

export default Posts;
