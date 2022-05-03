import productDB from '../data/product'
import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';

function getProduct(id){
  return new Promise( (resolve, reject) =>{
    setTimeout(() => {
        const productFound = productDB.find( (product) => { 
            return id === product.id
         } )
        resolve(productFound);
    }, 1500);
  });
}


const ItemDetailContainer = ({ id }) =>{
  const [product , setProduct] = useState([]);

  useEffect( () =>{ 
    getProduct(id).then(respuestaPromise => {
     setProduct(respuestaPromise);
    })

  });


  return (
    <>
    <ItemDetail product={product}/>
    </>
  )
}
export default ItemDetailContainer