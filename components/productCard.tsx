
import styles from "./../styles/products.module.css"
import { useCart } from "../context/cartContext"

const ProductCard = ({ id, productName, idealName, price, brand, productImage, quantity, discount, stock }) => {

    const { cartState, cartDispatch } = useCart()
    const { cart } = cartState

    const value = true

    return (
        <div className={styles.each_item}>
            <img src={productImage} className={styles.thumbnail} />
            <p>{productName}</p>
            <p>{idealName}</p>
            <p>{price} Rs. {discount}% </p>
            <p>{brand}</p>
            {
                cart.map((value: any) => {
                    if (value.id === id) {
                        return (
                            <>
                                <div className={styles.btn_container} key={id}>
                                    <button className={styles.cart_counter_btn} onClick={() => cartDispatch({
                                        type: "QUANTITY_INCREAMENT",
                                        payload: {
                                            id: id,
                                            quantity: quantity,
                                            stock: stock
                                        }
                                    })}>+</button>
                                    <button className={styles.quantity_btn}>{value.quantity} </button>

                                    <button className={styles.cart_counter_btn} onClick={() => cartDispatch({
                                        type: "QUANTITY_DECREAMENT",
                                        payload: {
                                            id: id,
                                            quantity: quantity,
                                        }
                                    })} >-</button>
                                </div>
                            </>
                        )
                    }
                })
            }

            {cart.find((item: any) => item.id === id) ? <button className={styles.disabled_btn} disabled={value}>Moved to cart </button> : (
                <button key={id} className={styles.btn} onClick={() => cartDispatch({
                    type: "ADD_TO_CART", payload: {
                        id: id,
                        productName: productName,
                        idealName: idealName,
                        price: price,
                        quantity: quantity,
                        brand: brand,
                        productImage: productImage,
                        discount: discount,
                        stock: stock
                    }
                })}>Add to cart</button>
            )}
        </div>
    )
}

export default ProductCard;