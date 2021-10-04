import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log('function')
  useEffect(() => {
    const test = localStorage.getItem("isLoggedIn");
    if (test === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
     
      {/* 在JSX中必須回傳組件，但AuthContext為物件，所以使用.Provider這個property，
        讓我們使用含有componet的obj。
        現在AuthContext.Provider就是一個component */}
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
        }}
      >
        {/*
        右邊的isLoggedIn是這個組件的state，當右邊的登入狀態有所改變，
        會將值給物件AuthContext.Provider的isLoggedIn，
        Provider底下所有子層都會得到這個值
         */}
        <MainHeader onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
