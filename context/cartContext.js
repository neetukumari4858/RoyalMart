import { createContext, useContext, useReducer } from "react";
import cartReducer from "./../reducer/cartReducer"

const cartContext=createContext();
const useCart=()=>useContext(cartContext)   

const CartProvider=({children})=>{
    const [cartState,cartDispatch]=useReducer(cartReducer,{
        cart:[],
    })
    return (
        <cartContext.Provider value={{cartState,cartDispatch}}>
            {children}
        </cartContext.Provider>
    )
}
export {CartProvider,useCart}



