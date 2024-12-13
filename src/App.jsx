import { useState, useEffect } from 'react'
import ListDisplay from './components/ListDisplay';
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState({});

  let url = 'https://pokeapi.co/api/v2/pokemon/?limit=20';

  // step 1 - get the list of Pokemon from the api
  const getPokemons = async (url) => {
    console.log(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPokemons(data);
    } catch (err) {
      console.error(err);
    }
  }


  // the useEffect has two arguments, 
  //    the first is the functionality that I want executed
  //    the second is the condition - so what is changing to kick it off
  //  in this example, I'm using () => {} with a named function because I 
  //  have a parameter/argument
  useEffect(() => {getPokemons(url)}, [])
  // don't do this
  // useEffect(getPokemons(), [])

  // this would run infinitely because I set state in here
  // so every time I fetch and set the state, it runs
  //    which sets the state, so it runs...
  // getPokemons(url);

  return (
    <>
      <h1>Pokemon App</h1>
      <ListDisplay pokeList = {pokemons} getPokemons={getPokemons}/>
    </>
  )
}

export default App
