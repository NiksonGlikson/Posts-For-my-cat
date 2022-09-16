import React, {useState, useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/navbar/NavBar";
import {AuthContext} from './context/context';

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      setIsLoading
    }}>
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
