import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './styles/Products.css'

const Products = () => {

  const[products,setProducts] = useState([])
  const[loading,setLoading] = useState(true)
  const[error,setError] = useState(null)

  useEffect(()=>{
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then((response)=>{
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err)=>{
         setError("Error in fetching data")
         setLoading(false)
      })
  },[])

    if(loading) return <h3>Loading products</h3>

    if(error) return <p>{error}</p>

  return (
    <>
      <div>
        <h1>Products</h1>
        <div className='product-list'>
          {products.map((product)=>{
            return(
              <Link to={`/${product.id}`}>
                  <div key={product.id} className='product-card'>
                 <h3>{product.title}</h3>
                 <p>{product.description}</p>
                 <p> Price ${product.price}</p>

                 <img src={product.images[0]} alt={product.title} style={{width:"250px",height:"auto"}} />
                 <strong>Category:</strong>
                 <span>{product.category.name}</span>

                 <img src={product.category.image} alt={product.category.name} style={{width:"50px",height:"auto"}} />
              </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Products