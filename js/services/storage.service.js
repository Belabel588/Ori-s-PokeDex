'use strict'


const STORAGE_KEY_POKEMONS = 'PokemonDB'
const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
let gCache = loadFromStorage(STORAGE_KEY_POKEMONS)

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
  var val = localStorage.getItem(key)
  return JSON.parse(val)
}


function getPokemons() {
  gCache = loadFromStorage(STORAGE_KEY_POKEMONS)


  if (gCache) return gCache
  return axios.get(url)
    .then(res => {
      saveToStorage(STORAGE_KEY_POKEMONS, res.data)
      gCache = res.data
      return res.data
    })
}