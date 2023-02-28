/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

const email = ['alessio.laudicina@gmail.com', 'roberto.laudicina@gmail.com', 'aldo.laudicina@gmail.com'];
console.log(email);

let emailUtente = prompt("Inserisci la tua email");
console.log(emailUtente);

let accesso = false;

for(let i = 0; i < email.length; i++ ){
    const emailCorrente = email[i];

    if(emailUtente == email[i]){
        accesso = true;
        
    }
}

if(accesso){
    console.log("Accesso approvato")
    document.getElementById("accesso").innerHTML = "Accesso approvato";

} else{
    console.log("Accesso negato")
    document.getElementById("accesso").innerHTML = "Accesso negato";

 
}


