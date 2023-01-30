import Pokemon from './Pokemon';


const PokiSearch = ({search,setSearch}) => {

    return(

        <div className='Hello'>
        <form className='submission'>

            <h3>Search Pokimon</h3>
                
                <input className='searchBar'
                    type="text" 
                    placeholder="Search Pokemon name" 
                    name="name"
                    onChange={setSearch}
                    value={search}
                     />

                {/* <button className='go' type="submit">OK</button> */}
        </form>

        </div>
    )




} 
export default PokiSearch