'use strict'

function onGetPokemon() {
  const elLoader = document.querySelector('.loader')
  elLoader.classList.remove('hidden')


  const pokemon = document.getElementById('pokemonName').value.toLowerCase()
  getPokemon(pokemon)
  // getPokemonInfo(pokemon)
}


function onPokemonLoad() {
  const elPokedex = document.querySelector('.pokemon-in-pokedex')
  const elLoader = document.querySelector('.loader')

  elLoader.classList.add('hidden')
  elPokedex.style.display = 'block'
}

function onRenderPokedex(response) {

  const elPokemonSprite = response.data.sprites.front_default
  const elImg = document.getElementById('pokemonSprite')
  elImg.src = elPokemonSprite
  elImg.style.display = 'block'

  const elPokemonName = document.querySelector('.pokemon-name')
  const elPokemonId = document.querySelector('.pokemon-id')
  const elPokemonType = document.querySelector('.pokemon-type')
  const elPokemonAbilities = document.querySelector('.pokemon-abilities')
  const elPokemonHeight = document.querySelector('.pokemon-height')
  const elPokemonWeight = document.querySelector('.pokemon-weight')

  elPokemonName.innerText = response.data.name
  elPokemonId.innerText = '#' + response.data.id
  elPokemonType.innerText = response.data.types.map(type => type.type.name).join(', ')
  elPokemonAbilities.innerText = response.data.abilities.map(ability => ability.ability.name).join(', ')
  elPokemonHeight.innerText = response.data.height
  elPokemonWeight.innerText = response.data.weight
}