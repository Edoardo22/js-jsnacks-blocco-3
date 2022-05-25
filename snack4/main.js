let nomiLista = ["giorgio", "marco", "francesca", "lucia", "ornella"];
nomeUtente = prompt("come ti chiami?")
i = -1;

while (nomeUtente !== nomiLista[i]) {
    i++
    console.log(i)
}
if (i !== -1) {
    alert("puoi parteciapre alla festa")
}
else {
    alert("non sei stato invitato, levati")

}
