'use strict';

let result = document.getElementById('result');
let storedSettings;
let redirect = document.getElementById('redirect');

const getdata = function () {
    result.innerHTML += '<br>';
    result.innerHTML += '<h3 style="margin: 2vh 0 2vh 0;">' + 'Reservations count:  '+ localStorage.length + '</h3>';
    result.innerHTML += '<h4 style="margin: 10px;">' + 'Guest list' + '</h4>';
    for(let i = 0; i < localStorage.length; i++){
       storedSettings = JSON.parse(localStorage.getItem('reservation' + i));
       result.innerHTML += '<li>' + storedSettings.name + " " +  storedSettings.surname + " " + storedSettings.date + '</li>';
    }
}

window.onload = function() {
    document.body.style.background = "#f3f3f3 url('./img/bg.jpg') no-repeat center ";
    getdata();
}

document.getElementById("redirect").addEventListener("click", function() {
    window.location = "index.html";
  });