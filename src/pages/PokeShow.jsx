import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

function PokeShow() {
    const [ pokemon, setPokemon ] = useState(null);
    const params = useParams();
    console.log(params);
    const pokeName = params.name;
    console.log(pokeName);

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    const getOnePokemon = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPokemon(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getOnePokemon(url);
    }, []);

    const loaded = () => {
        return (
            <div>
                <h2>order: {pokemon.order}</h2>
                <div id='imageList'>
                    {
                        Object.keys(pokemon.sprites).map(sprite =>
                        {   if (pokemon.sprites[sprite] && pokemon.sprites[sprite].length)
                                return <img src={pokemon.sprites[sprite]}/>
                            else return <></>

                        }
                        )

                    }
                </div>
                <h3>Abilities</h3>
                <ul style={{display: 'flex', flexDirection: 'column'}}>
                    {
                        pokemon.abilities && pokemon.abilities.length 
                        ?
                        pokemon.abilities.map(ability => {return(<li>{ability.ability.name}</li>)})
                        :
                        <>No Abilities</>
                    }
                </ul>
            </div>
        ) 
    }

    const loading = () => {
        return (
            <h1> Loading</h1>
        )
    }

  return (
    <div>
        <h1>Learn more about {pokeName}</h1>
        {pokemon && pokemon.sprites ? loaded() : loading()}
    </div>
  )
}

export default PokeShow