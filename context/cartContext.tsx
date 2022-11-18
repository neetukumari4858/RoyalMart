import { createContext, useContext, useReducer } from "react";
import cartReducer from "./../reducer/cartReducer"


type CartActionType = {
    type: "ADD_TO_CART",
    payload: Object
} |
{
    type: "REMOVE_FROM_CART",
    payload: Object
}
|
{
    type: "QUANTITY_INCREAMENT",
    payload: Object
}
|
{
    type: "QUANTITY_DECREAMENT",
    payload: Object
}

 
type CartStateType = {
    cart: Object[]
}

type CartContextType = {
    cartState: CartStateType,
    cartDispatch: (arg0: CartActionType) => void

}
const cartContext = createContext({} as CartContextType);
const useCart = () => useContext(cartContext)

const CartProvider = ({ children }) => {
    const initialState = {
        cart: []
    }
    const [cartState, cartDispatch] = useReducer(cartReducer, initialState)
    return (
        <cartContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </cartContext.Provider>
    )
}
export { CartProvider, useCart }



