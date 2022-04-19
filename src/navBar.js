import React from 'react'
import PropTypes from 'prop-types'

const NavBar = () => {
  return (
    
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Tienda De lo Lindo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Candy Box</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Candy Bar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Kit Imprimibles</a>
      </li>
    </ul>
  </div>
</nav>
     
  )
}

export default NavBar