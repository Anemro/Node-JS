import { createContext } from "react";
import { useContext } from 'react';
import { useState } from 'react';


//1_limpiar carrito - Listo
//2_comprobar si x item esta en el carrito ----> Array.some()
//3_ devolver la cantidad de item en el carrito

const CartContex = createContext()
const { Provider } = CartContex;
const useCartContex = () => useContext (CartContex)

export function CartContexProvider( { children } ) {
    const [cart, setCart] = useState([])
    
    const addToCart = (item,cant) => {
        if (isInCart(item.id)){
            const newCart = cart.map(cartItem => {...
            })
            setCart(newCart);
        }else {
            const newItem = {...item, cant};
            setCart([...cart, newItem]) 
        }   
    }

    const removeToCart = (id) => {
        const newCart = [...cart]
        const cartFilter = newCart.filter(item => {
            return item.id !== id
        });
        setCart(cartFilter);
    }

    const cleanCart = () => {
         return cart.length = 0
    }

    const isInCart = (id) => {
        return cart.some( itemCart => itemCart.id === id)
    }

    const countInCart = (id) => {
        return cart.find( itemCart => itemCart.id === id)

    }

    const totalPriceCart = () => {

    }


    return(
        <Provider value={ { CartContex, cart, addToCart } }>
            {children}
        </Provider>
        
        
        
        
        )
    
}

export default useCartContex