function trasformaScelta(scelta) {
    var sceltaBinaria;

    if (scelta == "pari") {
        sceltaBinaria = 0;
    } else {
        sceltaBinaria = 1;
    }

    return sceltaBinaria;
}

function numeroCasuale(maggiore, minore) {
    var numero = Math.floor(Math.random() * maggiore) + minore;

    return numero;
}

function generaDadi(primoNumero, secondoNumero) {
    var pallinePrimoDado = "";

    for (var i = 0; i < primoNumero; i++) {
        pallinePrimoDado += '<span class"pallina"></span>'
    }
    var pallineSecondoDado = "";

    for (var i = 0; i < secondoNumero; i++) {
        pallineSecondoDado += '<span class"pallina"></span>'
    }

    document.getElementById('cubo-sinistra').innerHTML = pallineSecondoDado;
    document.getElementById('cubo-destra').innerHTML = pallinePrimoDado;
}

function controlloVincitore(utente, sceltaUtente, computer) {
    var somma = parseInt(utente) + parseInt(computer);

    console.log(somma);

    if ((somma % 2) == sceltaUtente) {
        return '<span>Hai vinto</span>';
    } else {
        return '<span>Hai perso</span>';
    }
}

function pariDispari() {
    do {
        var numeroUtente = prompt("Inserisci un numero da 1 a 5");
    }while ((numeroUtente < 1) || (numeroUtente > 5));

    do {
        var sceltaUtenteStringa = prompt("Inserisci 'pari' o 'dispari'");
    }while ((sceltaUtenteStringa != "pari") && (sceltaUtenteStringa != "dispari"));

    var sceltaUtenteBinaria = trasformaScelta(sceltaUtenteStringa);

    var numeroComputer = numeroCasuale(5,1);

    console.log(numeroComputer);

    generaDadi(numeroUtente,numeroComputer);

    var vincitore = controlloVincitore(numeroUtente, sceltaUtenteBinaria, numeroComputer);

    document.getElementById('esito').innerHTML = vincitore;
}
