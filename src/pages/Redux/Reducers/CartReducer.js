import {
    ADD_TO_CART
} from "../Constants/CartConstants";

export const cartReducer = (state = {
    cartItems: []
}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            console.log(item)
            const existItem = state.cartItems.find((x) => x.id === item.id);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.id === existItem.id ? item : x
                    ),
                };
            } else {
                state.cartItems = [...state.cartItems, item]
                return state
                // return {
                //     ...state,
                //     cartItems: [...state.cartItems, item],
                // };
            }

            default: {
                return state;
            }
    }
}