import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "My cat", body: "Best of the best" },
    { id: 2, title: "My cat", body: "Beautiful" },
    { id: 3, title: "My cat", body: "Gentle" },
    { id: 4, title: "My cat", body: "Sweet" },
    { id: 5, title: "My cat", body: "Likes to play" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  // Получим пост из дочернего компонента
  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length !== 0
        ? <PostList delete={deletePost} posts={posts} title={"Compliments to my future cat"} />
        : <h1 style={{textAlign: 'center' }}>
            Posts undefined
          </h1>
      }
    </div>
  );
}

export default App;
