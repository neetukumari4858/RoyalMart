import Navbar from "../../components/navbar";
// import axios from "axios";
// import { useEffect, useState } from "react";
import styles from "./../../styles/products.module.css"
import ProductCard from "./../../components/productCard"
import data from "./../../data/data.json"

const Products = () => {

    // useEffect(() => {
    //     const getData = async () => {
    //         const { data: response } = await axios.get("https://dummyjson.com/products")
    //         setData(response)
    //     }
    //     getData()
    // }, [])


    return (
        <>
            <Navbar />
            <h1 style={{ margin: "2rem" }}>This is Product page</h1>
            <div className={styles.item_container}>
                {data.map(({ id, productName,idealName, size, price, brand,productImage,quantity,discount,stock}) => {
                    return (
                        <ProductCard  id={id} productName={productName} discount={discount} idealName={idealName} price={price} size={size} brand={brand} productImage={productImage} quantity={quantity} stock={stock}/>
                    )
                })}
            </div>
        </>
    )
}
export default Products;