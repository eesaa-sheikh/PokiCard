import Pokemon from "./Pokemon"

const PokemonList = ({pokemons, deletepokemon, selectpokemon}) => {

    const PokiComponents = pokemons.map(pokemon => {
        return <Pokemon 
                key={pokemon.id} 
                Pokemon={pokemon} 
                deletePokemon={deletepokemon}
                selectPokemon={selectpokemon} />
    })

    console.log( pokemons, "All Pokemon")
    
    
    return (
        <>
            <h3>List of Pokemon</h3>
            <hr />
            {PokiComponents}
        </>
        

    )
}

export default PokemonList;