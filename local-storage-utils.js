import { findById } from './utils.js';

const pokedex = 'pokedex';

export function makePokedex(parsedPokedex) {
    const stringyPokedex = JSON.stringify(parsedPokedex);

    localStorage.setItem(pokedex, stringyPokedex);
}

export function localizePokedex() {
    const stringyPokedex = localStorage.getItem(pokedex);

    if (!stringyPokedex) return [];

    const parsedPokedex = JSON.parse(stringyPokedex);
    console.log(parsedPokedex);

    return parsedPokedex;
}

export function seenPokemon(pokemon) {

    const storage = localizePokedex();
    const matchingItem = findById(storage, pokemon.pokemon);

    if (matchingItem) {
        matchingItem.encountered++;
    } else {
        const newItem = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1
        };

        storage.push(newItem);
    }

    makePokedex(storage);

    return storage;
}

export function catchPokemon(pokemon) {

    const storage = localizePokedex();
    const matchingItem = findById(storage, pokemon.pokemon);

    matchingItem.captured++;

    makePokedex(storage);

    return storage;
}