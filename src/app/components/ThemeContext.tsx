import React, { createContext, useState } from 'react';
type Theme ='light' | "dark"
type ThemeProviderState ={
    theme?:Theme,
    setTheme: (theme:Theme)=>void
}
export const ThemeProviderContext = createContext<ThemeProviderState| undefined>(undefined)
const themeInfo ={
    name: "hello"
}
const ThemeContext = ({children}:{children:React.ReactNode}) => {
    const [theme,setTheme]=useState<Theme>()
    return <ThemeProviderContext.Provider value={{theme,setTheme}}>
        {children}
    </ThemeProviderContext.Provider>
};

export default ThemeContext;