import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (    
    <Link to="/category/car" className="justify-content-end">
    <BsCart2/></Link>
  )
}
    

export default CartWidget