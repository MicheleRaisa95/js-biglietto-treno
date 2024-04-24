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