import React from 'react'
import {useState} from 'react'

function Texto() {
    const [texto, setTexto] = useState();

    //manejar eventos
    const handleTexto1 = ()=>{
        setTexto("Contenido del texto 1")
    }
    const handleTexto2 = () =>{
        setTexto("Este es el contenido del texto 2")
    }


  return (
    <div>
        <button onClick={handleTexto1}>Mostrar texto 1</button>
        <button onClick={handleTexto2}>Mostrar texto 2</button>

        {texto && <p>{texto}</p>}
    </div>
  )
}

export default Texto