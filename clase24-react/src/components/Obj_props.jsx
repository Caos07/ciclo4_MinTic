import React from 'react'

function Objetos (x) {
    return(
        <p>
            hola {x.userInfo.nombre} <br/>
            tu edad es {x.userInfo.edad}<br/>
            tu color favorito es {x.userInfo.color}<br/>
        </p>
    )
    
}
export default Objetos;