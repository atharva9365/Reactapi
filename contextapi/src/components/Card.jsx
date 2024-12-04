import React, { useContext } from 'react'
import { CartContext } from '../App';

const Card = () => {
  const { count, setCount } = useContext(CartContext);
  function updateCount() {
    setCount(count + 1);
  }
   return (
    <>
     <div style={{ }}>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>12000</p>
        <p>Shoes</p>
        <button onClick={updateCount}>Add to Cart {count}</button>
      </div>
    </div>

    </>
  )
}

export default Card