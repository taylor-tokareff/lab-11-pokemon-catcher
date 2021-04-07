console.log('results js');
import { localizePokedex } from '../local-storage-utils.js';

const pokedex = localizePokedex();
console.log(pokedex, 'pokedex');
var ctx = document.getElementById('myChart').getContext('2d');

const names = [];
const captured = [];
const encountered = [];

for (let pokemon of pokedex) {
    names.push(pokemon.id);
    captured.push(pokemon.captured);
    encountered.push(pokemon.encountered);
}

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Pokemon captured',
            data: captured,
            backgroundColor: 'pink',
            borderColor: 'red',
            borderWidth: 1,
        },
        {
            label: 'Pokemon encountered',
            data: encountered,
            backgroundColor: 'lightblue',
            borderColor: 'steelblue',
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});