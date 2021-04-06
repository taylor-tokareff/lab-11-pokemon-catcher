import { pokemon } from './pokemon.js';

export function findById(array, id) {
    for (let item of array) {
        if (item.name === id) {
            return item;
        }
    }
}

export function randomPoke(array) {

    const pokeNumber = Math.floor(Math.random() * array.length);

    return array[pokeNumber];
}

