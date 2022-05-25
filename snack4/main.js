let nomiLista = ["giorgio", "marco", "francesca", "lucia", "ornella"];
nomeUtente = prompt("come ti chiami?")
i = -1;
let trovato = false
while (nomeUtente !== nomiLista[i] && i < nomiLista.length) {
    i++
    console.log(i)
    if (nomeUtente == nomiLista[i]) {
        trovato = true
    }
}
if (trovato) {
    alert("puoi parteciapre alla festa")
}
else {
    alert("non sei stato invitato, levati")

}
