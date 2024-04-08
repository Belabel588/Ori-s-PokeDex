'use strict'

function getPokemon(pokemon) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    .then(response => {
      const elPokemonSprite = response.data.sprites.front_default
      const elImg = document.getElementById('pokemonSprite')
      elImg.src = elPokemonSprite
      elImg.style.display = 'block'
    })
    .catch(error => console.error(error))
}