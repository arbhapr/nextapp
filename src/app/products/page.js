"use client"
import {useEffect, useState} from 'react'

const Products = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        let productList = await fetch('https://dummyjson.com/products');
        productList = await productList.json();
        setProducts(productList.products);
    }
    useEffect(()=>{
        fetchProducts();
    }, []);
    return (
        <div className="container">
            <h2 className="text-center mt-2">Our Products</h2>
            {
                products.map((p) => {
                    return <div key={p.id}>
                        <p>Name: {p.title}</p>
                        <p>Price: {p.price}</p>
                        <hr />
                    </div>
                })
            }
        </div>
    )
}

export default Products