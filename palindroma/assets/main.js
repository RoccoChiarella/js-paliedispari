function palindroma(stringa) {
    var stringaMinuscola = stringa.toLowerCase();

    var stringaMinuscolaRevers = stringaMinuscola.split('').reverse().join('');

    return stringaMinuscolaRevers === stringaMinuscola;
}

var stringaUtente = prompt("Insersci una parola");

var risultatoPalindroma = palindroma(stringaUtente);

if (risultatoPalindroma) {
    document.getElementById('palindroma').innerHTML = '<p>La parola è palindroma</p>';
} else {
    document.getElementById('palindroma').innerHTML = '<p>La parola non è palindroma</p>';
}
