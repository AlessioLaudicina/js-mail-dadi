/*
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto. */


let numeroUtente = Math.floor(Math.random() * 6) +1;
console.log(numeroUtente)


let numeroComputer = Math.floor(Math.random() * 6) +1;
console.log(numeroComputer)


if(numeroComputer > numeroUtente){
    console.log("Vittoria Computer")
} else if(numeroComputer < numeroUtente){
    console.log("Vittoria Utente")

    
} else{
    console.log("Pareggio")

}