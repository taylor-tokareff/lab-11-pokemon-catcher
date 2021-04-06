// import functions and grab DOM elements
import { threeUnique } from './utils.js';
import { catchPokemon } from './local-storage-utils.js';
import { findName } from './utils.js';

const button = document.querySelector('#button');

function pokemonInjector() {
    const pokeRadio1 = document.querySelector('#poke1-radio');
    const pokeRadio2 = document.querySelector('#poke2-radio');
    const pokeRadio3 = document.querySelector('#poke3-radio');

    const pokeLabel1 = document.querySelector('#poke1-label');
    const pokeLabel2 = document.querySelector('#poke2-label');
    const pokeLabel3 = document.querySelector('#poke3-label');

    const threeUnique = threeUnique();

    const img1 = document.querySelector('#poke1-img');
    img1.src = threeUnique[0].url_image;
    pokeLabel1.append(img1);
    pokeRadio1.value = threeUnique[0].pokemon;

    const img2 = document.querySelector('#poke2-img');
    img2.src = threeUnique[1].url_image;
    pokeLabel2.append(img2);
    pokeRadio2.value = threeUnique[1].pokemon;

    const img3 = document.querySelector('#poke3-img');
    img3.src = threeUnique[2].url_image;
    pokeLabel3.append(img3);
    pokeRadio3.value = threeUnique[2].pokemon;
}

pokemonInjector();

button.addEventListener('click', () => {
    const selectedPokemon = document.querySelector('input:checked');

    const object = findName(selectedPokemon.value);

    catchPokemon(object);

    pokemonInjector();

});




