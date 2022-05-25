
let i = 0;
j = true
while (j) {

    let n = prompt("inserisci un numero di array da generare")

    if (isNaN(n)) {
        alert("inserisci un numero valido")
    }

    else {
        j = false
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
}