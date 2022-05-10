import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext=createContext();
const LanguageProvider=({children})=>{
   const language= localStorage.getItem("myLang")
    const[langCode,setLangCode]=useState(language? language:"AZ")
    useEffect(()=>{
        localStorage.setItem("myLang",langCode)
    },[langCode])
    const changeLanguage=(langCode)=>{
        setLangCode(langCode)
   }
 
   const data={
        langCode,
        changeLanguage
      }
    return(
        <LanguageContext.Provider value={data}>
         {children}
        </LanguageContext.Provider>
    )
}

 const useLanguage=()=>useContext(LanguageContext)
export {useLanguage,LanguageProvider}