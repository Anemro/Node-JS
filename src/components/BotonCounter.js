import React from 'react'
import { useState } from 'react'

const BotonCounter = ( props ) => {

  
    const [count, setCount] = useState(props.initial)
    const minusHandler = () => { 
       if (count > 1){
            setCount(count-1)
        }
    }
    const addHandler = () => { 
       
       if (count<props.stock){
           setCount(count + 1)
       }
    }

    return (
        <>
          <button class="btn" onClick={minusHandler}>-</button>
          <strong class="p-3">{count}</strong>
          <button class="btn" onClick={addHandler}>+</button>
        </>
    )
}
   
export default BotonCounter