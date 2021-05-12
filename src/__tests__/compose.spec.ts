import { compose, composePipe } from '@/compose'
import fetch, { Response } from 'node-fetch'

describe('Compose', () => {
  it('should return 11 as number and 20 as string', async () => {
    const concatZero = (s: string): string => s + '0'
    const addOne = (s: number): number => s + 1
    const parseStringToNumber = async (s: string): Promise<number> =>
      parseFloat(s)
    const parseNumberToString = async (s: number): Promise<string> =>
      s.toString()

    // compose starts from addOne to concatZero
    const composed = compose(concatZero, parseNumberToString, addOne)
    const composeResult = await composed(1)

    // composePipe starts from concatZero to addOne
    const composedPipe = composePipe(concatZero, parseStringToNumber, addOne)
    const composePipeResult = await composedPipe('1')

    expect(composeResult).toBe('20')
    expect(composePipeResult).toBe(11)
  })

  it('should return fetched pokemon', async () => {
    interface Pokemon {
      name: string
    }

    const fetchPokemon = async (name: string): Promise<Response> =>
      await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    const parseFetchResponseToPokemon = async (
      response: Response,
    ): Promise<Pokemon> => await response.json()
    const prefixWithAtSign = (text: string) => '@' + text
    const transformToUpperCase = (text: string) => text.toUpperCase()
    const sufixWithExclamation = (text: string) => text + '!'

    const pokemonToString = composePipe(
      fetchPokemon,
      parseFetchResponseToPokemon,
      (pokemon: Pokemon) => pokemon.name,
      prefixWithAtSign,
      transformToUpperCase,
      sufixWithExclamation,
    )

    const pokemonName = 'ditto'

    const result = await pokemonToString(pokemonName)
    const expected = `@${pokemonName.toUpperCase()}!`

    expect(result).toEqual(expected)
  })
})
