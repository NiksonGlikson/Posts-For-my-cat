import React from "react";
import Posts from "./Posts";

const PostList = ({ posts, title, delete: deletePost }) => {

  if(!posts.length) {
    return (
      <h1 style={{textAlign: 'center' }}>
        Posts undefined
      </h1>
    )
  }
  
  return (
    <div>
      <h1 className="post__title">{title}</h1>
      {posts.map((post, index) => (
        <Posts delete={deletePost} number={index + 1}post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
