import { GET_ALL_PRODUCTS } from "../Constants/ProductConstants";


export const getAllReducers=(state={products:[]},action)=>{
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {products:action.payload}
            
    
        default:
            return state;
    }

}   