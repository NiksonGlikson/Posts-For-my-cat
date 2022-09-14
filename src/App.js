import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Post from "./pages/Post";
import NavBar from "./components/UI/navbar/NavBar";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/posts' element={<Post />} />
        <Route path='/about' element={<About />} />
        <Route path='/error' element={<Error to='/error' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
