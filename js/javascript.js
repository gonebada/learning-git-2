'use strict';
var output = document.getElementById('greeter-output');

// Tekst będziemy dodawać w poniższy sposób. Tylko zawartość pierwszego cudzysłowu będzie się zmieniać - reszta jest odpowiedzialna za dodanie pustych linii oraz odwróconą kolejność pisania tekstów. 

output.innerHTML = 'Click the button! I want to say hello!' + '<br><br>' + output.innerHTML;

var button = document.getElementById('greeter-button');
var userName;

button.addEventListener('click', function () {
    if (userName == null || userName == '') {
        userName = window.prompt('Whats your name?')
        output.innerHTML = 'Hello ' + userName + '!' + '<br><br>' + output.innerHTML;
    }
    else {
        output.innerHTML = 'Hello I already said Hi' + '<br><br>' + output.innerHTML;
    }
});
