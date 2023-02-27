/*
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto. */


let numeroUtente = Math.floor(Math.random() * 6) +1;
console.log(numeroUtente)
document.getElementById("computer-number").innerHTML = numeroUtente;



let numeroComputer = Math.floor(Math.random() * 6) +1;
console.log(numeroComputer)
document.getElementById("utente-number").innerHTML = numeroUtente;



if(numeroComputer > numeroUtente){
    console.log("Vittoria Computer")
    document.getElementById("risultato").innerHTML = "Vittoria Computer";

} else if(numeroComputer < numeroUtente){
    console.log("Vittoria Utente")
    document.getElementById("risultato").innerHTML = "Vittoria Utente";


    
} else{
    console.log("Pareggio")
    document.getElementById("risultato").innerHTML = "Pareggio";


}