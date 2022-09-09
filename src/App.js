import React, { useMemo, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyPopup from "./components/UI/popup/MyPopup";
import PostFilter from "./components/PostFilter";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "My cat", body: "Best of the best" },
    { id: 2, title: "My cat", body: "Beautiful" },
    { id: 3, title: "My cat", body: "Gentle" },
    { id: 4, title: "My cat", body: "Sweet" },
    { id: 5, title: "My cat", body: "Likes to play" },
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [popup, setPopup] = useState(false)

  const sortedPosts = useMemo(() => {
    console.log('work')
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => [post.title.toLowerCase().includes(filter.query.toLowerCase())])
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  // Получим пост из дочернего компонента
  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton onClick={() => setPopup(true)}>
        Create user
      </MyButton>
      <MyPopup visible={popup} setVisible={setPopup}>
        <PostForm create={createPost}/>
      </MyPopup>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
        <PostList delete={deletePost} posts={sortedAndSearchedPosts} title="Compliments to my future cat" />
    </div>
  );
}

export default App;
