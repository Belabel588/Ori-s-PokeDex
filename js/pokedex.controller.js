'use strict'

function onGetPokemon() {
  const elLoader = document.querySelector('.loader')
  elLoader.classList.remove('hidden')


  const pokemon = document.getElementById('pokemonName').value.toLowerCase()
  getPokemon(pokemon)
    .then(response => {
      onRenderPokedex(response)
      // onPokemonLoad()
    })
}


function onPokemonLoad() {
  const elPokedex = document.querySelector('.pokemon-in-pokedex')
  const elLoader = document.querySelector('.loader')

  elLoader.classList.add('hidden')
  elPokedex.style.display = 'block'
}

function onRenderPokedex(response) {

  const elPokemonSprite = response.sprites.front_default
  const elImg = document.getElementById('pokemonSprite')
  elImg.src = elPokemonSprite
  elImg.style.display = 'block'

  const elPokemonName = document.querySelector('.pokemon-name')
  const elPokemonId = document.querySelector('.pokemon-id')
  const elPokemonType = document.querySelector('.pokemon-type')
  const elPokemonAbilities = document.querySelector('.pokemon-abilities')
  const elPokemonHeight = document.querySelector('.pokemon-height')
  const elPokemonWeight = document.querySelector('.pokemon-weight')

  elPokemonName.innerText = response.name
  elPokemonId.innerText = '#' + response.id
  elPokemonType.innerText = response.types.map(type => type.type.name).join(', ')
  elPokemonAbilities.innerText = response.abilities.map(ability => ability.ability.name).join(', ')
  elPokemonHeight.innerText = response.height
  elPokemonWeight.innerText = response.weight
}