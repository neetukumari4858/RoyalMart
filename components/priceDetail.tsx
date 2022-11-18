import { useCart } from "../context/cartContext"
import styles from "./../styles/products.module.css"


const PriceDetail = () => {

    const { cartState } = useCart()
    const { cart } = cartState

    const itemsPrice = cart.reduce((acc:any, item:any) => (acc = acc + Number(item.price * item.quantity)), 0)

    const itemDiscount = cart.reduce((acc:any, item:any) => (acc + (Number(item.price) * Number(item.discount * item.quantity) / 100)), 0)

    const itemDiscounttrunc = Math.trunc(itemDiscount)

    const totalPrice = Math.trunc(itemsPrice) - Math.trunc(itemDiscount)

    return (
        <>
            <div className={styles.price_detail}>
                <h2>Price Detail</h2>
                <div className={styles.price_item_div}>
                    <div>
                        <p>Item</p>
                        <p>price</p>
                        <p>Discount</p>
                        <p>Total price</p>
                    </div>
                    <div>
                        <p>{cart.length} </p>
                        <p>{itemsPrice} ₹ /-</p>
                        <p>{itemDiscounttrunc} ₹ /-</p>
                        <p>{totalPrice} ₹ /-</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceDetail;
