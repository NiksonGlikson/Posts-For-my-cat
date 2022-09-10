import React from "react";
import Posts from "./Posts";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

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
      <h1 className="post__title">
        {title}
      </h1>
      <TransitionGroup>
        {posts.map((post, index) => 
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <Posts delete={deletePost} number={index + 1}post={post} />
          </CSSTransition>  
        )}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
