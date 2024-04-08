'use strict'

function onGetPokemon() {
  const elLoader = document.querySelector('.loader')
  elLoader.classList.remove('hidden')


  const pokemon = document.getElementById('pokemonName').value.toLowerCase()
  getPokemon(pokemon)
  getPokemonInfo(pokemon)
}


function onPokemonLoad() {
  const elPokedex = document.querySelector('.pokemon-in-pokedex')
  const elLoader = document.querySelector('.loader')

  elLoader.classList.add('hidden')
  elPokedex.style.display = 'block'
}