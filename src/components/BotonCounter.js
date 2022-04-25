import React from 'react'
import { useState } from 'react'

const BotonCounter = (stock,initial) => {

    //const [count, setCount] = useState({initial}) Se rompe el layout si hago esto

    const [count, setCount] = useState(1)
    const minusHandler = () => { 
        setCount(count-1)
       // if (count>1){     No funciona este condicional
       //     setCount(count-1)
      //  }
    }
    const addHandler = () => { 
        setCount(count+1)
       // if (count<{stock}){     No funciona este condicional
       //     setCount(count+1)
       // }
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