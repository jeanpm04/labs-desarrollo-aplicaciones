import './App.css';
import Tarjeta from './components/Tarjeta';
import Personaje from './components/Personaje';
import Texto from './components/Texto';

function App() {
  
  const infoTarjetas = [
    {
      title: 'T1', 
      description: 'Descripción T1',
    },
    {
      title: 'T2',
      description: 'Descripción T2',
    }
  ]

  const personajes = [
    {
      name: 'Shakira',
      age: '47',
      image: 'https://static.tomaticket.es/img/artista_imagen/45-shakira-1.jpg',
    },
    {
      name: 'Nelson Mandela',
      age: '95',
      image: 'https://pbs.twimg.com/profile_images/739993071274844161/-8k_AKGf_400x400.jpg',
    },
    {
      name: 'Adele',
      age: '54',
      image: 'https://posterdrops-images.s3.amazonaws.com/uploads/band/middle/3913.jpg',
    }
  ]

  const personajesList = personajes.map(per => {
    return(<Personaje nombre= {per.name} edad ={per.age} imagen={per.image}/>)
  })

  const tarjetasList = infoTarjetas.map(tar =>{
    return(<Tarjeta title={tar.title} description={tar.description}/>)
  })

  return (
    <div className="App">

      <Tarjeta  title={infoTarjetas[0].title} description={infoTarjetas[0].description}/>
      <Tarjeta  title="Título tarjeta 2" description="Descripción de la tarjeta 2"/>

      <Personaje nombre="Manuel" edad={10} />
      <Personaje />
      <Personaje />

      {personajesList}
      {tarjetasList}
      <Texto />

      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header>

    </div>
  );
}

export default App;


/*
const personajes = [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    }
  ]

  const infoTarjetas = [
    {
      title: 'T1',
      description: 'Descripción T1',
    },
    {
      title: 'T2',
      description: 'Descripción T2',
    },
    {
      title: 'T3',
      description: 'Descripción T3',
    },
  ]

*/