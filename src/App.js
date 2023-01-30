import './App.css';
import PokemonContainer from './container/PokemonContainer';
import NavBar from './components/NaveBar';
import Hero from './components/Hero';
import PokiSearch from './components/PokiSearch';
function App() {
  return (
    <div className="App">
      <NavBar/>

      <Hero/>
     <PokemonContainer/>
    </div>
  );
}

export default App;
