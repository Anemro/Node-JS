import React from 'react'
import useCartContex from '../store/CartContext'

function CartView() {
    const { cart, cleanCart, removeFromCart } = useCartContex();
  
    console.log(cart)
    if(cart.length === 0){
        return (
            <>
            <h4>No hay item en el carrito</h4>
            <a href="/">Volver al catalogo</a>
            </>
            
            )
        }else {
            return <div>
            { cart.map(  itemCart => {
                return (
                    <>
                    <div key={itemCart.id}>
                    <h2>{ itemCart.title }</h2>
                    <h2>{ itemCart.cant }</h2>
                    <h2>${ (itemCart.cant * itemCart.price).toFixed(2) }</h2>
                    </div>
                    <button onClick={() => removeFromCart(itemCart.id)}>x</button>
                    </>
                    )
                })}
                <button className="btn btn-primary" onClick={cleanCart}>Vaciar Carrito</button>
                </div>
            }
        }
                    


                
                
                
                    

    
    


export default CartView