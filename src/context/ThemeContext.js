

// import { createContext, useContext, useEffect, useState } from "react";
import { createContext,useContext,useEffect,useState } from "react";

const ThemeContext=createContext();

export const ThemeProvider = ({children})=>{
    const [theme,setTheme]=useState(()=>{
        return localStorage.getItem("theme")||'light'
    })
    //localstorage must be use useEffect
    useEffect(()=>{
        const root=window.document.documentElement;
        if(theme==="dark"){
            root.classList.add("dark")
        }else{
            root.classList.remove("dark")
        }
        localStorage.getItem("theme",theme) //localstorage theme re save korlam ekne getItem (key,value) deserve kore
    },[theme])
    const toggleTheme=()=>{
        setTheme((prev)=>(prev==="light"?"dark":"light"))
    }
     return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
     )
}
export const useTheme=()=>useContext(ThemeContext);
