
const cartReducer = (cartState, action) => {
    const { cart } = cartState
    const { type, payload } = action

    const getStock=payload.stock

    const cartItem = cart.find((item) => item.id === payload.id)

    switch (type) {
        case "ADD_TO_CART":
            if (cartItem) {
                return { ...cartState }
            } else {
                return { ...cartState, cart: [...cartState.cart, payload] }
            }
        case "REMOVE_FROM_CART":
            return { ...cartState, cart: [...cartState.cart.filter((item) => item.id != payload.id)] }

        case "QUANTITY_INCREAMENT":
            return {
                ...cartState, cart: cart.map((item) => item.id === payload.id ? {
                    ...item,
                    quantity: item.quantity< getStock ? (item.quantity+1) : getStock
                } : item)
            }

        case "QUANTITY_DECREAMENT":
            return { ...cartState, cart: cart.map((item) => item.id === payload.id ? { ...item, quantity: item.quantity - (item.quantity > 1 ? 1 : item.quantity) } : item) }

        default:
            return { cartState }
    }
}
export default cartReducer;



