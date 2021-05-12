import { composePipe } from '@williamthome/lilicompose'
import fetch, { Response } from 'node-fetch'

interface Pokemon {
  name: string
}

const fetchPokemon = (name: string): Promise<Response> =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
const responseToPokemon = (res: Response): Promise<Pokemon> => res.json()
const getPokemonName = (pokemon: Pokemon): string => pokemon.name
const atSign = (text: string) => '@' + text
const toUpperCase = (text: string) => text.toUpperCase()
const exclamation = (text: string) => text + '!'

const pokemonToString = composePipe(
  fetchPokemon,
  responseToPokemon,
  getPokemonName,
  atSign,
  toUpperCase,
  exclamation,
)

pokemonToString('ditto')
  .then((pokemon) => console.log({ pokemon }))
  .catch((reason) => console.error(reason))
