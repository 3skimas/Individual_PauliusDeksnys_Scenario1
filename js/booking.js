'use strict';
let button = document.getElementById('btn');
let counter = 1;
let storedSettings;
/* Taking values from input and storing them into localstorage*/
const writedata = function () {

    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let date = document.getElementById('datetime').value;

    const reservation = {
            id: counter,
            name: name,
            surname: surname,
            date: date
    }  /* object = id, name, surname, date */
    localStorage.setItem('reservation' + counter, JSON.stringify(reservation));

    /* information alert of succesfully reservation */
    alert(reservation.name + " thanks for the reservation! We will be waiting for you on " + reservation.date);
}

/* retrieving data from localstorage */

/* Every time page loads sets the latest id from localstorage */
window.onload = function () {
    document.body.style.background = "#f3f3f3 url('./img/bg.jpg') no-repeat center ";
    counter = localStorage.length;
}

const run = function(){

    /* Form validation to check if form input has some value */
    var v1 = document.forms["bookingform"]["name"].value;
    var v2 = document.forms["bookingform"]["surname"].value;
    var v3 = document.forms["bookingform"]["date"].value;

        if (v1 == "") {
            alert("Please enter the name!");
            return false;
        }
        if (v2 == "") {
            alert("Please enter the surname!");
            return false;
        } 
        if (v3 == "") {
            alert("Please enter the date!");
            return false;
        }
    
    writedata();
    console.log(localStorage.getItem('reservation' + counter));
    counter++;
}


document.getElementById("redirect").addEventListener("click", function() {
    window.location = "result.html";
  });