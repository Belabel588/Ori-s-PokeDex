'use strict'

function getPokemon(pokemon) {
  const pokedex = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

  pokedex.then(response => onRenderPokedex(response))
    .catch(error => {

      alert('There is no such Pokemon!')
      const elLoader = document.querySelector('.loader')
      elLoader.classList.add('hidden')


    })
}


