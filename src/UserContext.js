import React, { useState } from 'react';
const UserContext = React.createContext();

function UserContextProvider(props) {

    //Context data for setting theme:
    const [theme, setTheme] = useState('dark');
    
    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    };

    //Context data for userHandle:
    const [userHandle, setUserHandle] = React.useState('');
    
    return (
        <UserContext.Provider value={{
          theme, toggleTheme,
          userHandle, setUserHandle,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext}
