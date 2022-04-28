import React from 'react'
import BotonCounter from './BotonCounter'
import CartWidget from './CartWidget'
import product from '../data/product'
import ItemList from './ItemList'


const Item = ({product}) => { 

    return (
    <>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
            <img src="./logoTienda.jpeg" className="card-img-top" alt="kits imprimibles"></img>
            <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price}</p>
            <BotonCounter initial={1} stock={3}/>
            <CartWidget/>
            </div>
        </div>
    </>
    )
}
        
 export default Item