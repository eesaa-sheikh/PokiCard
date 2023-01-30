export default function NavBar(){
    return < nav className="nav">

         <img className="logoImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" width={50}></img>
            <a href="/" className="siteTitle"><h2>PokeDex</h2></a>
        

    <ul>

        <li className="active">
                <a href="/ShowPokemon"><h3>Show pokemons</h3></a>
        </li>    

        <li className="product">
                <a href="/Pokemon"><h3>Randomise</h3></a>
        </li>

    
    <div className="oval">
        <li className="signUP">
            <a href="/Signup"><h3>Sign Up</h3></a>
        </li>

    </div>

        </ul>
    </nav>


  
}