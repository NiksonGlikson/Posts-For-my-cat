import React, {useContext} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from './routes/routes';
import {AuthContext} from '../context/context';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader />
    }
    
    return (
        isAuth
        ? 
        <Routes>
        {privateRoutes.map((route, index) => {
            return (
            <Route key={index} path={route.path} element={<route.element/>} />
        )
    })
    }
    <Route path = "/*" element = {<Navigate to="/posts" replace/>}/>
        </Routes>
        : 
        <Routes>
        {publicRoutes.map((route, index) => {
            return (
            <Route key={index} path={route.path} element={<route.element/>} />
        )
    })
    }
    <Route path = "/*" element = {<Navigate to="/login" replace/>}/>
        </Routes>

    );
}

export default AppRouter;
