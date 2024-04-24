'use strict;'

// prompt per chiedere all'utente quanta distanza vuole percorrere e età

const km = Number(prompt("Inserisci i Km che vuoi percorrere"));
console.log(km);

const age = Number(prompt('Quanti anni hai?'));
console.log(age)

//  condizionale per indicare che il valore inserito non è un numero
if (isNaN(km) && isNaN(age)) {
    console.log ('Il valore inserito non è corretto');
}

//calcolo prezzo totale del viaggio

const basePriceKm = 0.21;
let totalPrice = km * basePriceKm;

// sconti in base età 

const minorDiscount = 1 - 0.2; /* rispetto a quello scritto nel readme il calcolo passa da 100-20/100 a 1-0.2 perchè ho semplificato la frazione*/

const seniorDiscount = 1 - 0.4;

if (age < 18) {
    totalPrice *= minorDiscount;
} else if (age >= 65) {
    totalPrice *= seniorDiscount;
} else {
    console.log("Nessuno sconto applicato.");
}
