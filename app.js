// import functions and grab DOM elements
import { threeUnique } from './utils.js';
import { catchPokemon } from './local-storage-utils.js';
import { findName } from './utils.js';

const button = document.querySelector('#choose-button');

let totalCaptures = 0;


function pokemonInjector() {
    const pokeRadio1 = document.querySelector('#poke1-radio');
    const pokeRadio2 = document.querySelector('#poke2-radio');
    const pokeRadio3 = document.querySelector('#poke3-radio');

    const pokeLabel1 = document.querySelector('#poke1-label');
    const pokeLabel2 = document.querySelector('#poke2-label');
    const pokeLabel3 = document.querySelector('#poke3-label');



    const threePokemon = threeUnique();

    const img1 = document.querySelector('#poke1-img');
    img1.src = threePokemon[0].url_image;
    pokeLabel1.append(img1);
    pokeRadio1.value = threePokemon[0].pokemon;

    const img2 = document.querySelector('#poke2-img');
    img2.src = threePokemon[1].url_image;
    pokeLabel2.append(img2);
    pokeRadio2.value = threePokemon[1].pokemon;

    const img3 = document.querySelector('#poke3-img');
    img3.src = threePokemon[2].url_image;
    pokeLabel3.append(img3);
    pokeRadio3.value = threePokemon[2].pokemon;
    console.log(pokeLabel3, img3, pokeRadio3);
}

pokemonInjector();

button.addEventListener('click', () => {
    totalCaptures++;
    const selectedPokemon = document.querySelector('input:checked');

    const object = findName(selectedPokemon.value);

    catchPokemon(object);

    if (totalCaptures >= 10) {
        window.location = '../results/index.html';
    }

    pokemonInjector();

});




