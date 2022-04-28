import React from 'react'
import PropTypes from 'prop-types'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    
<nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#">Tienda De lo Lindo</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Candy Box</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Candy Bar</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Kit Imprimibles</a>
      </li>
    </ul>
    <div className="p-2 flex-shrink-1">
      <CartWidget/>
    </div>
  </div>
</nav>
     
  )
}

export default NavBar