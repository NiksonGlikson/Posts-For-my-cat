import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./components/hooks/UsePosts";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "My cat", body: "Best of the best" },
    { id: 2, title: "My cat", body: "Beautiful" },
    { id: 3, title: "My cat", body: "Gentle" },
    { id: 4, title: "My cat", body: "Sweet" },
    { id: 5, title: "My cat", body: "Likes to play" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  // Получим пост из дочернего компонента
  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Create users
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        delete={deletePost}
        posts={sortedAndSearchedPosts}
        title="Compliments to my future cat"
      />
    </div>
  );
}

export default App;
