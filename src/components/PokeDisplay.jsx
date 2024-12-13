import pokeball from '../images/pokemon-1536849_1280.png'

function PokeDisplay({pokemon}) {
    console.log(pokemon);
    
    const loaded = () => {
        return <img src={pokemon.sprites['front_default']} />
    }

    const loading = () => {
        return (
            <>
                <img src={pokeball} alt='pokeball' height='50px' />
                <h3>Still waiting</h3>
            </>
        )
    }

  return ( pokemon && pokemon.sprites ? loaded() : loading() )
}

export default PokeDisplay