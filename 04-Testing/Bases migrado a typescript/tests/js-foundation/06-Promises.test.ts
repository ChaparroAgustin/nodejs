import { getPokemonById } from "../../src/js-foundation/06-promises";

describe('06-Promises', () => {

    test('getPokemonById shoul return a pokemon', async () => {

        const pokemonId = 1;
        const pokemonName = await getPokemonById(pokemonId);

        expect(pokemonName).toBe('bulbasaur');

    })

    test('getPokemonById should return error if pokemon does not exist', async () => {

        const pokemonId = 1000000;
        try {
            await getPokemonById(pokemonId);
            expect(true).toBeFalsy();

        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`)
        }


    });

});