import React from "react"
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar =() =>{

    return (
        <div className="navbar-container">
        <p className="logo">
          <a href="/">Bolsos</a>
        </p>
  
        <button type="button" className="cart-icon" >
            <AiOutlineShopping />
        <span className="cart-item-qty">0</span>
      </button>


      </div>
    )
}

export default Navbar