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

function generaFacciaDadi(numero) {
    var x = "";

    if (numero == 1) {
        x = "dice first-face";
    } else if (numero == 2) {
        x = "dice second-face";
    } else if (numero == 3) {
        x = "dice third-face";
    } else if (numero == 4) {
        x = "dice fourth-face";
    } else if (numero == 5) {
        x = "dice fifth-face";
    }

    return x;
}

function generaPalliniDadi(numero) {
    var x = "";

    if (numero == 1) {
        x = '<span class="dot"></span>';
    } else if (numero == 2) {
        x = '<span class="dot"></span><span class="dot"></span>';
    } else if (numero == 3) {
        x = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
    } else if (numero == 4) {
        x = '<div class="column"><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div>';
    } else if (numero == 5) {
        x = '<div class="column"><span class="dot"></span><span class="dot"></span></div><div class="column"><span class="dot"></span></div><div class="column"><span class="dot"></span><span class="dot"></span></div>';
    }

    return x;
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
        var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
    }while ((numeroUtente < 1) || (numeroUtente > 5));

    do {
        var sceltaUtenteStringa = prompt("Inserisci 'pari' o 'dispari'");
    }while ((sceltaUtenteStringa != "pari") && (sceltaUtenteStringa != "dispari"));

    var sceltaUtenteBinaria = trasformaScelta(sceltaUtenteStringa);

    var numeroComputer = numeroCasuale(5,1);

    var primoDado = document.getElementById('cubo-sinistra');

    primoDado.className = generaFacciaDadi(numeroUtente);

    var secondoDado = document.getElementById('cubo-destra');

    secondoDado.className = generaFacciaDadi(numeroComputer);

    console.log(numeroUtente);

    document.getElementById('cubo-sinistra').innerHTML = generaPalliniDadi(numeroUtente);

    console.log(numeroComputer);

    document.getElementById('cubo-destra').innerHTML = generaPalliniDadi(numeroComputer);

    var vincitore = controlloVincitore(numeroUtente, sceltaUtenteBinaria, numeroComputer);

    document.getElementById('esito').innerHTML = vincitore;
}
