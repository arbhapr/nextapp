import React from 'react'
import Card from '../components/Card'
import styles from './blog.module.css'

const fetchProducts = async () => {
  const response = await fetch('https://dummyjson.com/products', {next: {revalidate: 10}});
  if (!response.ok) {
    throw new Error('API call is error');
  }
  return response.json();
}

const Blog = async () => {
  const productsData = await fetchProducts();
  const products = productsData.products;
  return (
    <div className="container d-flex flex-column justify-content-center align-align-items-center">
      <h2 className={`${styles.textColor} my-4`}>Blog</h2>
      <div className="row card-container">
            {
              products.map((product) => (
                <div className="col-lg-4 mb-2" key={product.id}>
                  <Card
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    category={product.category}
                    thumbnail={product.thumbnail}
                  />
                </div>
              ))
            }
      </div>
    </div>
  )
}

export default Blog