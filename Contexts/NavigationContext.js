import React,{ createContext, useState } from "react";

export const NavigationContext = createContext();


export const NavigationContextProvider = ({children}) => {

    const [navigate,setNavigate] = useState('');
    return(
        <NavigationContext.Provider value={[navigate,setNavigate]}>
            {children}
        </NavigationContext.Provider>
    )
}