import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios'; 
import PokemonList from './Components/PokemonList/PokemonList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      pokemonList: [],
      count: 0, 
      limit: 9 
    }
  }

  componentDidMount() {
    this.grabNewPokemon(this.state.count)
    })
  }

  grabNewPokemon(num) {
    let pokemonCopyList = this.state.pokemonList.slice()

    
    axios.get('https://pokeapi.co/api/v2/pokemon/1').then(resp => {
      pokemonCopyList.push(resp.data); 
      this.setState({pokemonList: [...pokemonCopyList]})
      if(this.state.count)
  }


  render() {


    return (
      <div id="App">
        <PokemonList/> 
      </div>
    );
  }
}

export default App;
