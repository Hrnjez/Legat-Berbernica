$(document).ready(function () {
document.getElementById("datum").addEventListener("change", dohvatiTermine);
document.getElementById("berberin").addEventListener("change", dohvatiTermine);

function dohvatiTermine() {

    console.log("get terms")
    date = document.getElementById('datum').value;
    barber = document.getElementById('berberin').value;

    console.log(date, barber)

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/terms/' + barber + '/date=' + date, true);

    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.responseText);
        if (xhr.status != '200') {
            window.alert("pogresna lozinka");
        } else {
            localStorage.setItem('token', xhr.responseText);
            window.location.href = 'admin.html';
        }
    };

    xhr.send(null);

}

$(function () {
    $("#datum").datepicker({
        dateFormat: 'dd MM yy',
        beforeShowDay: unavailable
    });

});
});