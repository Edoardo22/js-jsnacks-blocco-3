
let i = 0;
let n = prompt("inserisci un numero di array da generare")

if (isNaN(n)) {
    alert("inserisci un numero valido")
}
else {


    while (i < n) {
        i++
        let x = 0
        let list = []
        while (x < 10) {
            let randomN = Math.random() * 100
            randomN = Math.round(randomN)
            list.push(randomN)
            x++
        }
        console.log(list)
    }
}