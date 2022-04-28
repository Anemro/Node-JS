import React from 'react'
import BotonCounter from './BotonCounter'
import CartWidget from './CartWidget'


const Item = ({name, precio}) => { 

    return (
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
          <img src="./logoTienda.jpeg" class="card-img-top" alt="kits imprimibles"></img>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Todos los archivos son editables. Agregame!!</p>
          <p class="card-text">{precio}</p>
          <BotonCounter initial={1} stock={3}/>
          <CartWidget/>
        </div>
      </div>
        )
 }
 export default Item