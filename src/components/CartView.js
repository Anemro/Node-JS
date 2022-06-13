import React from 'react'
import { createBuyOrder } from '../data';
import useCartContex from '../store/CartContext'

function CartView() {
    const { cart, cleanCart, removeFromCart,calcPriceCart} = useCartContex();
    const [orderID, setOrderID] = React.useState(false);
    function buy () {
        const itemsToBuy = cart.map((item) => ({
            title: item.title,
            cant: item.cant,
            price: item.price,
            id: item.id
        }))
        const buyOrder = {
            buyer : {
                name: 'Andres',
                phone: '1134408993',
                email: 'andresemarodriguez@gmail.com',
            },
            items : itemsToBuy,
            total : calcPriceCart()
        }
        createBuyOrder(buyOrder)
        cleanCart()
    }

 
    if(cart.length === 0){
        if (orderID){
            return (
                <>
                <h4>Gracias por tu compra</h4>
                <h5>{orderID}</h5>
                <Link to="/">Volver al catalogo</Link>
                </>
            )
        }else{
            return (
                <>
                <h4>No hay item en el carrito</h4>
                <Link to="/">Volver al catalogo</Link>
                </>
                
                )
            }
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
                    <button className="btn btn-primary" onClick={buy}>Comprar</button>
                    </div>
                }
            }

                
                
                
                    


                
                
                
                    

    
    


export default CartView