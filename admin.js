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
var unavailableDates = ["9-10-2020", "14-10-2020", "15-10-2020"];

function unavailable(date) {
    dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    if ($.inArray(dmy, unavailableDates) == -1) {
        return [true, ""];
    } else {
        return [false, "", "Unavailable"];
    }
}
$(function () {
    $("#datum").datepicker({
        dateFormat: 'dd MM yy',
        beforeShowDay: unavailable
    });

});
});
