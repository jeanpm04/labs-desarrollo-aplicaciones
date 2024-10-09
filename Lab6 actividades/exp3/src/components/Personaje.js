

function Personaje({nombre, edad, imagen}){
    return(
        <div className="Contenedor">
            <h3>Perssonajes random</h3>
            <ul>
                <li>
                    <p>Nombre: {nombre}</p>
                    <p>Edad: {edad}</p>
                    <img src={imagen} alt=""/>
                </li>
            </ul>

        </div>
    )
}

export default Personaje;