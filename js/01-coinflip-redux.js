
let coinFlip;

let flipNumber = parseInt(prompt('Enter the number of times you want the coin to be flipped'));

for (i=1; i <= flipNumber; i++) {
    coinFlip = Math.round(Math.random());

    if (coinFlip === 0) {
        console.log(`Heads`);
    } else {
        console.log('Tails');
    }
}