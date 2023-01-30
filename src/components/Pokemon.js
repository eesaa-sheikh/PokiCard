
import { useState} from "react"


const Pokemon = ({name,image,height,weight,type, base_experience}) => {




    const [buttonShiny, setButtonShiny] = useState('Click');
    function handleClick() {
        setButtonShiny(Pokemon.sprites.other["official-artwork"].font_shiny
        );
      }
    
       
  

    return (

        <div className="Pokemon-Card">


<div className="name">
         <h2>{name}</h2>

        </div>
         
                <div className="imageSource">
            <img src={image} width="100"/>

            <div className="height">

            <h4> Height: {height}"</h4>
            </div>

            <div className="w">

                <h4>Weight: {weight} lb</h4>
            </div>

            <div className="type">

                <h4>{type}</h4>


            </div>

            <div className="baseExp">

                <h4> baseExp: {base_experience}</h4>
            </div>

            <button className="rarity" onChange={handleClick}> Show Shiny</button>
           
        



         </div>
         



       



            {/* <p className="PokiStats">{Pokemon.height}
                Item Drop: {Pokemon.item}
            Super movie : {Pokemon.move}</p>

            <button onClick={() => deletePokemon(Pokemon.id)}>Remove Pokemon</button> */}
        </div>
    )

}

export default Pokemon;