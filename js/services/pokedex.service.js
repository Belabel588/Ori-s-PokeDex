'use strict'

const STORAGE_KEY_POKEMONS = 'PokemonDB'
let gCache = loadFromStorage(STORAGE_KEY_POKEMONS) || {}


function getPokemon(pokemon) {

  if (gCache[pokemon]) {
    return Promise.resolve(gCache[pokemon])
  }


  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    .then(response => {
      gCache[pokemon] = response.data
      saveToStorage(STORAGE_KEY_POKEMONS, gCache)
      return response.data

      // onRenderPokedex(response)
    })


    .catch(error => {
      alert('There is no such Pokemon!')
      const elLoader = document.querySelector('.loader')
      elLoader.classList.add('hidden')


    })
}


