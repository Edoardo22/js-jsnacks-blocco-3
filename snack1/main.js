let numeri = []
let somma = 0;
while (somma < 50) {

    let numeroUtente = prompt("inserisci un numero");

    if (isNaN(numeroUtente)) {
        alert("inserisci un nummero valido")
    }
    else {
        somma = somma + parseInt(numeroUtente);
        numeri.push(numeroUtente)
    }
}