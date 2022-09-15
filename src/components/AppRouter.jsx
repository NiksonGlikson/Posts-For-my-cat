import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Post from "../pages/Post";
import Error from "../pages/Error";
import PostIdPages from '../pages/PostIdPages';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/posts' element={<Post />} />
            <Route path='/posts/:id' element={<PostIdPages />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<Error replace to='/posts' />} />
      </Routes>
    );
}

export default AppRouter;
