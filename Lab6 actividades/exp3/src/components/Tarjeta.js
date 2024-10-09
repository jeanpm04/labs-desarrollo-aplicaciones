import "./Tarjeta.css"

function Tarjeta(props){    //(props)-> {titulo, descripcion}
    return (
        <div className="Tarjeta">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default Tarjeta;