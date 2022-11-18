
import Navbar from "../../components/navbar";
import { useCart } from "../../context/cartContext";
import styles from "./../../styles/products.module.css"
import PriceDetail from "../../components/priceDetail";

type cartProps = {
    id: number,
    productName:string
    idealName:string
    price:string
    brand:string
    productImage:string
    quantity:number
    discount:string
    stock:number
   
}

const cart = () => {

    const { cartState, cartDispatch } = useCart()
    const { cart } = cartState
    console.log(cart, "cart");


    return (
        <>
            <Navbar />
            {cart.length >= 1 ? (
                <>
                    <h1 style={{ margin: "2rem" }}>This is cart page</h1>
                    <div className={styles.product_container}>

                        <div className={styles.cartpage_container}>
                            {
                                cart.map(({ id, productName, idealName, price, brand, productImage, quantity, discount, stock }:cartProps) => {

                                    return (
                                        <div className={styles.each_item} key={id}>
                                            <img src={productImage} className={styles.thumbnail} />
                                            <p>Item Q-{quantity}</p>
                                            <p>{productName}</p>
                                            <p>{idealName}</p>
                                            <p>{price} Rs. {discount}% </p>
                                            <p>{brand}</p>

                                            <div className={styles.btn_container}>
                                                <button className={styles.cart_counter_btn} onClick={() => cartDispatch({
                                                    type: "QUANTITY_INCREAMENT",
                                                    payload: {
                                                        id: id,
                                                        quantity: quantity,
                                                        stock: stock
                                                    }
                                                })}>+</button>

                                                <button className={styles.quantity_btn}>{quantity}</button>
                                                <button className={styles.cart_counter_btn} onClick={() => cartDispatch({
                                                    type: "QUANTITY_DECREAMENT",
                                                    payload: {
                                                        id: id,
                                                        quantity: quantity,

                                                    }
                                                })} >-</button>
                                            </div>
                                            <button className={styles.remove_btn} onClick={() => cartDispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: {
                                                    id: id,
                                                    productName: productName,
                                                    idealName: idealName,
                                                    price: price,
                                                    quantity: quantity,
                                                    brand: brand,
                                                    productImage: productImage,
                                                    discount: discount
                                                }
                                            })}>Remove</button>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <PriceDetail />
                    </div>
                </>
            ) : <h1 style={{ margin: "2rem" }}>Cart is Empty !</h1>}
        </>
    )
}
export default cart;


