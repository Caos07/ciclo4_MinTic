import React, { useState, useEffect } from 'react'

const Auto = ()=>{
    const [auto, setAuto] = useState(false)
    ////////////////////////////////////////////

    const [contar, setContar] = useState(0)
    useEffect(() => {
        console.log(contar);
       
    }, [auto])
    ////////////////////////////////////////////

    const encenderApagar = ()=>{
        setAuto(!auto)
        setContar(contar + 1)
    }

    return(
        <>
            <button onClick={encenderApagar}>Encender/Apagar</button>
            <p> El auto esta {auto ? 'encendido' : 'apagado'}</p>
            <h4>clicks {contar}</h4>
        </>
    )
        
    
}
export default Auto;
