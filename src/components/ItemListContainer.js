import productDB from '../data/product'
import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'

function getProducts(categoryid){
  return new Promise( (resolve, reject) =>{
    setTimeout(() => {
      if(categoryid){
        const arrayFiltered = productDB.filter ( (product) => {
          return product.genere === categoryid;
        });
        resolve(arrayFiltered);

      }else {
        resolve(productDB)
      }
      
    }, 700);
  });
}


const ItemListContainer = ({titulo}) =>{
  const [productEstado , setProduct] = useState([]);
  const { categoryid }= useParams()
  console.log("ID: " + categoryid)
  useEffect( () =>{ 
    getProducts(categoryid).then(respuestaPromise => {
     setProduct(respuestaPromise);
    })

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