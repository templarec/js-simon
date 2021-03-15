
$(document ).ready(function() {
//genero 5 numeri random
	//li metto in array
//li visualizzo per 30 secondi
//li nascondo
//chiedo 5 numeri all'utente
//verifico quanti ha ricordato
var numeri = [];
var secondiAllaFine = $("#seconds-to-end");
var output = $('.numbers');
var countdown = $('.countdown');
var count = 30;
var j = 1;
//genero e inserisco numeri in array
	for (var i = 0; i < 5; i++) {
		numeri.push(getRndInteger(1,100));
		output.append(numeri[i] + " ");
	}

//timer di tutta la routine
var timer = setInterval(function () {
	//conto alla rovescia
	if (count > 0){
		countdown.text(count);
		count--;
	} else { //quando finisce il conto alla rovescia nascondo i numeri e chiedo
		//input utente e verifico se sono giusti
		countdown.text("Tempo scaduto");
		output.hide();
		secondiAllaFine.hide();
		countdown.text("Numeri indovinati: ");
		var indovinati = 0;
		while (j >= 1 && j <= 5){
			var input = parseInt(prompt("Inserisci numero: (" + j + ")"));
			if (numeri.includes(input)){
				countdown.css("font-weight", "bold");
				countdown.append(input + " ");
				indovinati++;
			}
			j++
		}

		countdown.append("<br>Hai indovinato " + indovinati + " numeri");
		clearInterval(timer);
	}

}, 1000);



});

//funzione genera numeri
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}