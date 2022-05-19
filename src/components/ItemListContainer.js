import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'
import { getAllItems as getProducts, getItemByCategory } from '../data';




const ItemListContainer = ({titulo}) =>{
  const [productEstado , setProduct] = useState([]);
  const { categoryid }= useParams()
  
  useEffect( () =>{ 
    if (categoryid === undefined){
      getProducts(categoryid).then(respuestaPromise => {
       setProduct(respuestaPromise);
      })
    }else{
      getItemByCategory(categoryid).then((respuestaPromise) =>{
        setProduct(respuestaPromise)
      })
    }
  },[categoryid]);


  return (
    <>
    <div className="container">
      <div className="row">
        <ItemList product={productEstado}/>
      </div>
    </div>
    </>
  )
}
export default ItemListContainer