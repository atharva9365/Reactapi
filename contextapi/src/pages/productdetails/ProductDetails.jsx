import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductDetails = () => {
  const[productDetails,setProductDetail] = useState();
  const[loading,setLoading] = useState(true)
  const[error,setError] = useState(null)
 

  useEffect(()=>{
    axios.get('https://api.escuelajs.co/api/v1/products/4')
       .then((response)=>{
        console.log(response)
        setProductDetail(response.data);
        setLoading(false)

        .catch((err)=>{
          setError('Error fetching data')
          setLoading(false);
        })

       
       })
  },[])

     if(loading) return(<h3>Loading Product Details</h3>)

     if(error) return (<p>{error}</p>) 

  return (
    <>
       <h2>Product Details</h2>
      <div className='Product-details'>
         {productDetails.map((productdetail)=>{
           return(
            <div>
               
            </div>
           )
         })}
        </div>   
    </>
  )
}

export default ProductDetails