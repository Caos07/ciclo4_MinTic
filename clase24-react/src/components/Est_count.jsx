import React, { useState } from 'react'

const Contar = ()=>{
    const [count, setCount] = useState(0)// haremos el hook el cual usamos para actualizar 

    return(
        <>
            <button onClick={()=> setCount(count + 1)}>Click</button>
            <p>numero de click {count}</p>
        </>
    )
}
export default Contar;