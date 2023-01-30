import { useState, useEffect } from "react"
import Pokemon from "../components/Pokemon"
import PokiSearch from "../components/PokiSearch"


const PokemonContainer = () => {


    //§§§§§§§§§§§§§§§§§§§§§§§§ Step 1§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
    const [pokemon, setPokemon] = useState([])
    const [pokemonLoadMore, setPokemonLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=100")

    //Search Var

    const [searchPoki, setSearchPoki] = useState("");

    const [Shiny, setShiny] = useState("");



    const fetchAllPokemon = async () => {
        const response = await fetch(pokemonLoadMore)
        const pokiData = await response.json()
        console.log(pokiData)


    //§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

    //§§§§§§§§§§§§§§§§§§§§§§§§ Step 2 §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§

    setPokemonLoadMore(pokiData.next)


    function createPO(results)  {
        results.forEach( async pokemon => {
          const pokiRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const pokiData =  await pokiRes.json()
          setPokemon( currentList => [...currentList, pokiData])
      })
    }
    createPO(pokiData.results)
    await console.log(pokemon)

   }


    useEffect(() => {
        fetchAllPokemon()

    }, [])


    const handleChange =(event) =>{

        setSearchPoki(event.target.value)

    }

    // function handleChangeAgain(event) {
    //     setShiny(event.target.value);
    //     {pokemon (pokemon => pokemon.map(pokemon => 
    //         <Pokemon
    //         image={pokemon.sprites.other["official-artwork"].font_shiny} 
    //     )}
          
    
    //   }
      
        
   
    
    return (
        
       
        <>

        {/* <button onChange={handleChangeAgain} /> */}




        <div className="Search">

            

         <PokiSearch 

         search={searchPoki}
         setSearch={handleChange}


         />
        </div>

            <div className="Container">
            {pokemon.filter(pokemon => pokemon.name.includes(searchPoki)).map(pokemon => 
            <Pokemon
            name = {pokemon.name}
            image={pokemon.sprites.other["official-artwork"].front_default} 
            type ={pokemon.types[0].type.name}
            height ={pokemon.height}
            weight = {pokemon.weight} 
            base_experience = {pokemon.base_experience}
           
            />
            
                )}

 </div>
           




        </>

    )


    }

export default PokemonContainer