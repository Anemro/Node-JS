import Item from './Item'
import productDB from '../data/product'
import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';

function getProducts(){
  return new Promise( (resolve, reject) =>{
    setTimeout(() => {
        resolve(productDB);
    }, 500);
  });
}


const ItemListContainer = ({titulo}) =>{
  const [productEstado , setProduct] = useState([]);
  useEffect( () =>{ 
    getProducts().then(respuestaPromise => {
     setProduct(respuestaPromise);
    })

  },[]);


  return (
    <>
    <ItemList product={productEstado}/>
    </>
  )
}
export default ItemListContainer