import React, { useState, useEffect } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./components/hooks/UsePosts";
import PostService from '../src/components/Api/PostService';

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
    return () => {
      
    };
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  // Обращаемся к бесп серверу и получаем массив постов
  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll()
      setPosts(posts);
      setIsPostsLoading(false);
    }, 1000)
  }

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
      {isPostsLoading
        ? <h1>is loading...</h1>
        : <PostList
          delete={deletePost}
          posts={sortedAndSearchedPosts}
          title="Compliments to my future cat"
          />
    }
    </div>
  );
}

export default App;
