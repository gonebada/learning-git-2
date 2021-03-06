'use strict';

/*Funkcja, która przyjmuje temperaturę C i zwraca temperaturę F.*/
var outputF = document.getElementById('output-celcius');
var outputC = document.getElementById('output-farenheit')
var buttonCelcius = document.getElementById('button-celcius');
var buttonFahrenheit = document.getElementById('button-fahrenheit');

buttonCelcius.addEventListener('click', function () {
    var temperatureInCelcius = window.prompt('Jaka temperature chcialbys przeliczyc');
    // WALIDACJE
    if (temperatureInCelcius !== '' && !isNaN(temperatureInCelcius)) {
        var temperatureInFahrenheit = calculateCelciusToFahrenheit(temperatureInCelcius);
        // TEMPERATURE IN FAHRENHEIT ZAWIERA PRZELICZONA WARTOSC WSKAZANEJ PRZEZ UZYTKOWNIKA temperatury
        outputF.innerHTML = 'Temperature in Farenheit is: ' + temperatureInFahrenheit + '<br>' + outputF.innerHTML;

        // FUNKCJA PODAJĄCA INFORMACJĘ O POGODZIE I UBIORZE
        var informacja = informacjaOPogodzie(temperatureInCelcius);
        outputF.innerHTML = 'Informacja: ' + informacja + '<br>' + outputF.innerHTML;
        // output3.innerHTML - dopisac te wartosc
    } else {
        outputF.innerHTML = 'Wprowadzona wartość jest niepoprawna ' + '<br>' + outputF.innerHTML;
    }
});

buttonFahrenheit.addEventListener('click', function () {
        var temperatureInFarenheit = window.prompt('Podaj temperaturę jaką chcesz przeliczyć na Celcjusze');
        // TEMPERATURE IN CELCIUS ZAWIERA PRZELICZONA WARTOSC WSKAZANEJ PRZEZ UZYTKOWNIKA temperatury
        var temperatureInCelcius = calculateFahrenheitToCelcius(temperatureInFarenheit);

        outputC.innerHTML = 'Temperature in Celcius is: ' + temperatureInCelcius + '<br>' + outputC.innerHTML;
        // FUNKCJA PODAJĄCA INFORMACJĘ O POGODZIE I UBIORZE
        var informacja = informacjaOPogodzie(temperatureInCelcius);
        outputC.innerHTML = 'Informacja: ' + informacja + '<br>' + outputC.innerHTML;
    }

)
/*Funkcja, która przyjmuje temperaturę C i zwraca temperaturę F.*/

var calculateCelciusToFahrenheit = function (tempertaure) {
    var temperatureInFahrenheit = tempertaure * 1.8 + 32;
    return temperatureInFahrenheit;
}

/*Funkcja, która przyjmuje temperaturę F i zwraca temperaturę C.*/
var calculateFahrenheitToCelcius = function (tempertaure) {
    var temperatureInCelcius = (tempertaure - 32) / 1.8;
    return temperatureInCelcius;
}

/*Funkcja, która przyjmuje temperaturę C i zwraca informację np. o stanie skupienia wody.*/
var informacjaOPogodzie = function (tempertaure) {
    if (tempertaure < 0) {
        /* output3.innerHTML ='Woda zamarza'+'<br>'+output3.innerHTML;*/
        return 'Woda zamarza, lepiej ubierz kurtke';
    } else if (tempertaure > 0 && tempertaure < 75) {
        /* output3.innerHTML ='Water is liquid'+'<br>'+output3.innerHTML;*/
        return 'Woda jest w stanie ciekłym, spokojnie letnia kurtka jest ok!';
    } else {

        /*output3.innerHTML ='Water evaporates'+'<br>'+output3.innerHTML;*/
        return 'woda paruje...'
    }
}
