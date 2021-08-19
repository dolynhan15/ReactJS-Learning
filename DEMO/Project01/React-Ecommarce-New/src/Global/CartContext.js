import React, {createContext, useReducer} from "react"
import { CartReducer } from "./CartReducer";


export const CartContext = createContext();

const CartContextProvider = (props) => {

    const [cart, dispatch] = useReducer(CartReducer, 
        //dispatch ~~ action trong Component CartReducer
        {shoppingCart: [], totalPrice: 0, qty: 0}) // {shoppingCart: ,totalPrice:, qty: , dispatch:}
        //cartReducer tương đương todoReducer
    return (
        <CartContext.Provider value={{...cart, dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;