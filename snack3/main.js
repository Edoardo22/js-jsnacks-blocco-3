let i = 0;
let somma = 0;
while (i < 5) {
    i++
    let n = prompt("inserisci 5 numeri")
    if (isNaN(n)) {
        i--
        alert("inserisci un numero valido")
    }
    else {
        somma = somma + parseInt(n)
        console.log(somma);
    }
}
console.log(somma);