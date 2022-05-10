import { configureStore, createReducer } from "@reduxjs/toolkit";
import { cartReducer } from "./Reducers/CartReducer";
import { getAllReducers } from "./Reducers/ProductReducer";
const { combineReducers, createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");



const reducer=combineReducers({
 cart:cartReducer,
 products:getAllReducers
})
const cartItemsLocalStorage=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[];

const initialState={
    cart:{
        cartItems:cartItemsLocalStorage
    },
}

const middleware=[thunk]

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;