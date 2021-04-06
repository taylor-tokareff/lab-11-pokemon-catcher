import { pokemon } from './pokemon.js';
import { seenPokemon } from './local-storage-utils.js';

export function findById(array, id) {
    for (let item of array) {
        if (item.name === id) {
            return item;
        }
    }
}

export function randomPoke() {

    const pokeNumber = Math.floor(Math.random() * pokemon.length);

    return pokemon[pokeNumber];
}

export function threeUnique() {

    let randomPoke1 = randomPoke();
    let randomPoke2 = randomPoke();
    let randomPoke3 = randomPoke();

    while (
        randomPoke1 === randomPoke2
        || randomPoke2 === randomPoke3
        || randomPoke1 === randomPoke3
    ) {
        let randomPoke1 = randomPoke();
        let randomPoke2 = randomPoke();
        let randomPoke3 = randomPoke();
    }

    seenPokemon(randomPoke1);
    seenPokemon(randomPoke2);
    seenPokemon(randomPoke3);

    return [randomPoke1, randomPoke2, randomPoke3];

}

export function findName(name) {
    return pokemon.find(pokemon => name === pokemon.pokemon);
}