'use strict';
var output = document.getElementById('greeter-output');

var button = document.getElementById('greeter-button');
var temp;

button.addEventListener('click', function () {
    temp = window.prompt('What is the temperature today?')
    if (temp == null || temp == undefined || temp =='') {
        output.innerHTML = 'Invalid number' + '<br><br>' + output.innerHTML;
    }
     else {
        if (temp < 0) {
            output.innerHTML = 'Temperature in Celsius is: ' + temp + '<br>' + 'Temperature in Farenheit is: ' + ((temp * 1.8) + 32) + '<br>' + 'Ubierz ciepłą kurtkę i szalik, bo woda zamarza!' + '<br><br>' + output.innerHTML;
        } else if (temp >= 0 && temp < 75) {
            if (temp < 15) {
                output.innerHTML = 'Temperature in Celsius is: ' + temp + '<br>' + 'Temperature in Farenheit is: ' + ((temp * 1.8) + 32) + '<br><br>' + 'Ubierz lekką kurtkę' + '<br><br>' + 'Woda jest jeszcze w stanie ciekłym' + '<br><br>' + output.innerHTML;
            } else {
                output.innerHTML = 'Temperature in Celsius is: ' + temp + '<br>' + 'Temperature in Farenheit is: ' + ((temp * 1.8) + 32) + '<br><br>' + 'Krutkie spodenki będą spoko!' + '<br><br>' + 'Woda jest jeszcze w stanie ciekłym' + '<br><br>' + output.innerHTML;
            }

        } else {
            output.innerHTML = 'Temperature in Celsius is: ' + temp + '<br>' + 'Temperature in Farenheit is: ' + ((temp * 1.8) + 32) + '<br><br>' + 'Woda już paruje!' + '<br><br>' + output.innerHTML;
        }

    }
});


//kalkulator temperatury

var output2 = document.getElementById('greeter-output2');

var button = document.getElementById('greeter-button2');
var temp;
var tempc;

button.addEventListener('click', function () {
    temp = window.prompt('What is the temperature today?')
    tempc = (temp - 32) / 1.8
    if (temp == null || temp == undefined || temp =='') {
        output2.innerHTML = 'Invalid number' + '<br><br>' + output.innerHTML;
    }
    else {
        if (tempc < 0) {
            output2.innerHTML = 'Temperature in Celsius is: ' + tempc + '<br>' + 'Temperature in Farenheit is: ' + temp + '<br>' + 'Ubierz ciepłą kurtkę i szalik, bo woda zamarza!' + '<br><br>' + output2.innerHTML;
        } else if (tempc >= 0 && tempc < 75) {
            if (tempc < 15) {
                output2.innerHTML = 'Temperature in Celsius is: ' + tempc + '<br>' + 'Temperature in Farenheit is: ' + temp + '<br><br>' + 'Ubierz lekką kurtkę' + '<br><br>' + 'Woda jest jeszcze w stanie ciekłym' + '<br><br>' + output2.innerHTML;
            } else {
                output2.innerHTML = 'Temperature in Celsius is: ' + tempc + '<br>' + 'Temperature in Farenheit is: ' + temp + '<br><br>' + 'Krutkie spodenki będą spoko!' + '<br><br>' + 'Woda jest jeszcze w stanie ciekłym' + '<br><br>' + output2.innerHTML;
            }

        } else {
            output2.innerHTML = 'Temperature in Celsius is: ' + tempc + '<br>' + 'Temperature in Farenheit is: ' + temp + '<br><br>' + 'Woda już paruje!' + '<br><br>' + output2.innerHTML;
        }
    }
});
