import React, {useState, useEffect} from 'react'

function PruebasHooks() {

    //useState
    const [contador, setContador] = useState(0);

    const handleAumentar = () =>{
            setContador(contador + 1);
    }
    const handleRestar = () =>{
        setContador(contador - 1);
    }

    //useEffect
    const [img, setImg] =useState("");
    let arre = [
        "https://upload.wikimedia.org/wikipedia/en/4/4d/Minions.png",
        "https://i.redd.it/63y6blyl1nbc1.jpeg",
        "https://singifyai.fineshare.com/song-ai/covers/minion.webp"
    ]

    useEffect(()=>{
        setImg(arre[contador])
        //console.log("Me ejecuté dentro del effect")
    }, [contador])
    //console.log("Me ejecuté tantas veces como se renderiza el componente")


  return (
    <div>
        <h2>{contador}</h2>
        <button onClick={handleAumentar}>Aumentar +1</button>
        <button onClick={handleRestar}>Restar -1</button>

        <img src={img} alt='imagen'/>
    </div>
  )
}

export default PruebasHooks