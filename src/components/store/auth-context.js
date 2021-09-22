import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false
    /*
    這個default值只應用在有 consumer 卻沒有 provider 之時，
    然而有 provider 才能使得 createContext 的值有所變化
    */
})

export default AuthContext;
//AuthContext並非一個組件，而是個包含組件component的「物件」