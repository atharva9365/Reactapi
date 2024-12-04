import React, { useContext } from 'react'
import { CartContext } from '../App'

const Navbar = () => {
  const {count} = useContext(CartContext);
  return (
    <>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <img
          style={{width:"100px"}}
          src="https://demo.shopking.dev/images/required/theme-logo.png"
          alt=""
        />
      </div>

      <div style={{display:"flex",gap:"10px",fontSize:"20px",fontWeight:"700"}}>
        <p>Categories</p>
        <p>Shop</p>
      </div>

      <div style={{display:"flex",alignItems:"center",fontSize:"20px",fontWeight:"600"}}>Cart {count}</div>
    </div>
    </>
  )
}

export default Navbar