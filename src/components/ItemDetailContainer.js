import { getItem as getProduct } from '../data';
import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';




const ItemDetailContainer = ({ id }) =>{
 
  const [product , setProduct] = useState();
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