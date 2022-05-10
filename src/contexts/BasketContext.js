import { createContext, useContext, useEffect, useState } from "react"

const BasketContext=createContext();
const defaultBasketItems=JSON.parse(localStorage.getItem("cartItems")) || [];
 const BasketProvider=({children})=>{
 const [items,setItems]=useState(defaultBasketItems)
 useEffect(()=>{
    localStorage.setItem("cartItems",JSON.stringify(items))
 },[items])
  const addToCart=(data,findBasketItem)=>{
     if(!findBasketItem){
         return setItems(items=>[data,...items])
     }
  
     const filtered=items.filter(items=>items.id!==findBasketItem.id)
     setItems(filtered)
  }

   const values={
       items,
       setItems,
       addToCart,
    }
    return(
        <BasketContext.Provider value={values}>
            {children}
        </BasketContext.Provider>
    )
}
const useBasket=()=>useContext(BasketContext)
export {BasketProvider,useBasket}