import { BASE_URL } from "../../../Api/apiConfig"
import { ADD_TO_CART } from "../Constants/CartConstants"

export const AddToCart=(id,qty,lang) => async (dispatch,getState)=>{
    const data=await ((await fetch(`${BASE_URL}api/products/${id}/${lang}`)).json())
    // console.log(data)
    dispatch({
        type:ADD_TO_CART,   
        payload:{
            id:data.id,
            price:data.price,
            qty
        }
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
 }