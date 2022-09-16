import Post from "../../pages/Post";
import About from "../../pages/About";
import PostIdPages from '../../pages/PostIdPages';
import Login from "../../pages/Login";

export const privateRoutes = [
    {path: '/about', element: () => <About />},
    {path: '/posts', element: () => <Post/>},
    {path: '/posts/:id', element: () => <PostIdPages/>},
]

export const publicRoutes = [
    {path: '/login', element: () => <Login />},
]