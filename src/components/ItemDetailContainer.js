import productDB from '../data/product'
import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function getProduct(id){
  return new Promise( (resolve, reject) =>{
    setTimeout(() => {
        const productFound = productDB.find( (product) => { 
            return parseInt(id) === product.id
         } )
        resolve(productFound);
    }, 1500);
  });
}


const ItemDetailContainer = ({ id }) =>{
 
  const [product , setProduct] = useState([]);
  const { itemid } = useParams()

  useEffect( () =>{ 
    getProduct(itemid).then(respuestaPromise => {
     setProduct(respuestaPromise);
    });

  },[itemid]);


  return (
    <>
    <ItemDetail product={product}/> 
    </>
  )
}
export default ItemDetailContainer