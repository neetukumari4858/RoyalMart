import Link from 'next/link'
import styles from "../styles/navbar.module.css"   
import {useCart} from "./../context/cartContext"

const Navbar = () => {
    const {cartState}=useCart()
    const {cart}=cartState
    return (
        <div className={styles.nav_container}>
            <p className={styles.logo_name}>RoyalMart</p>
            <ul className={styles.nav_items}>
                <li className={styles.nav_link}>
                    <Link href="/products">
                        <a>Products</a>
                    </Link>
                </li>
                <li className={styles.nav_link}>
                    <Link href="/cart">
                        <a>Cart{cart.length>=1 ? (<span  className={styles.counter}>{cart.length}</span>):(null)}</a>
                        
                    </Link>
                </li>
                <li className={styles.nav_link}>
                    <Link href="/blogs">
                        <a>Blogs</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;
