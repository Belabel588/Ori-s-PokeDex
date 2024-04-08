'use strict'

function onGetPokemon() {
  const pokemon = document.getElementById('pokemonName').value.toLowerCase()
  getPokemon(pokemon)
  getPokemonInfo(pokemon)
}