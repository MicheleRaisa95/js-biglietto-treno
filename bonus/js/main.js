'use strct'

// Chiedi all'utente se vuole "pari" o "dispari"
const sceltaUtentePariDispari = prompt("Vuoi 'pari' o 'dispari'?")
console.log(sceltaUtentePariDispari);

// Chiedi all'utente di inserire un numero intero compreso tra 1 e 9
const numeroUtente = Number(prompt("Inserisci un numero intero compreso tra 1 e 9:"));
console.log(numeroUtente);


// Genera un numero casuale per il computer compreso tra 1 e 9
const numeroComputer = Math.floor(Math.random() * 9) + 1;
console.log(numeroComputer);

// Calcola la somma dei numeri
const totaleNumero = numeroUtente + numeroComputer;
console.log(totaleNumero);

// Determina se la somma è pari o dispari
const risultatoPariDispari = totaleNumero % 2 === 0 ? 'pari' : 'dispari';

// Comunica chi ha vinto
if ((risultatoPariDispari === 'pari' && sceltaUtentePariDispari === 'pari') ||
    (risultatoPariDispari === 'dispari' && sceltaUtentePariDispari === 'dispari')) {
    console.log(`Hai vinto! La somma è ${totaleNumero} ed è ${risultatoPariDispari}.`);
} else {
    console.log(`Il computer vince. La somma è ${totaleNumero} ed è ${risultatoPariDispari}.`);
}