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
// rispetto a quello scritto nel readme il calcolo passa da 100-20/100 a 1-0.2 perchè ho semplificato la frazione//

const minorDiscount = 0.2;
const seniorDiscount = 0.4;

if (age < 18) {
    totalPrice *= 1 - minorDiscount;
    console.log(`Sconto applicato: ${minorDiscount * 100}% per i minorenni.`);
    discountApplied = '20% (minorenni)';
} else if (age >= 65) {
    totalPrice *= 1 - seniorDiscount;
    console.log(`Sconto applicato: ${seniorDiscount * 100}% per gli over 65.`);
    discountApplied = '40% (anziani)';
} else {
    console.log("Nessuno sconto applicato.");
    discountApplied = 'Nessuno';
}

//output biglietto 

const finalPrice = totalPrice.toFixed(2);

//mostra prezzo finale in console

console.log(`Il prezzo totale del viaggio è di ${finalPrice} €.`);

//Scrivo nel browser
document.getElementById("km").textContent += km;
document.getElementById("eta").textContent += age;
document.getElementById("sconto").textContent += discountApplied;
document.getElementById("prezzoFinale").textContent += `${finalPrice} €.`;
