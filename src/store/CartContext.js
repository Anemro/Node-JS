import { createContext } from "react";
import { useContext, useState } from 'react';



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
            const newCart = cart.map(cartItem => {
               if(cartItem.id === item.id){
                        const copyItem = {...cartItem}
                        copyItem.cant +=cant
                        return copyItem
                    }
                    else
                        return cartItem; 
                    })
                    setCart(newCart);
                }else {
                    const newItem = {...item, cant};
                    setCart([...cart, newItem]) 
                }   
            }
                
                
                
        

    const removeFromCart = (id) => {
        const newCart = [...cart]
        const cartFilter = newCart.filter(item => {
            return item.id !== id
        });
        setCart(cartFilter);
    }

    const cleanCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some( itemCart => itemCart.id === id)
    }

    const getItemFromCart = (id) => {
        return cart.find( itemCart => itemCart.id === id)
}




    return(
        <Provider value={ { CartContex, cleanCart, getItemFromCart, removeFromCart, cart, addToCart } }>
            {children}
        </Provider>    
        )
    
}
        
export default useCartContex
        
        
