'use strict'

function getPokemon(pokemon) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    .then(response => {
      const elPokemonInPokedex = document.querySelector('.pokemon-in-pokedex')
      const elPokemonSprite = response.data.sprites.front_default
      const elImg = document.getElementById('pokemonSprite')
      elImg.src = elPokemonSprite
      elImg.style.display = 'block'
    })
    .catch(error => console.error(error))
}

function getPokemonInfo(pokemon) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    .then(response => {
      const elPokedex = document.querySelector('.pokemon-in-pokedex')
      const elPokemonName = document.querySelector('.pokemon-name')
      const elPokemonId = document.querySelector('.pokemon-id')
      const elPokemonType = document.querySelector('.pokemon-type')
      const elPokemonAbilities = document.querySelector('.pokemon-abilities')
      const elPokemonHeight = document.querySelector('.pokemon-height')
      const elPokemonWeight = document.querySelector('.pokemon-weight')

      elPokemonName.innerText = response.data.name
      elPokemonId.innerText = '#' + response.data.id
      elPokemonType.innerText = response.data.types[0].type.name
      elPokemonAbilities.innerText = response.data.abilities[0].ability.name
      elPokemonHeight.innerText = response.data.height
      elPokemonWeight.innerText = response.data.weight
      elPokedex.style.display = 'block'


    })
}