$(document).ready(function () {

    $(function () {
        $("#datum").datepicker({
            firstDay: 1,
            dateFormat: 'dd.mm.yy'
        });

    });

    $("#datum").on("change", dohvatiTermine);
    $("#berberin").on("change", dohvatiTermine);
    $("#changeWorkingHours").on("click", changeWorkingHours);
    $("#zakazi").on("click", zakazivanje);
    $("#setBreak").on("click", pauza);

});

function pauza(e) {

    const token = window.localStorage.getItem('token');

    barber = document.getElementById('berberin').value;

    e.preventDefault();
    $("#demo").show();
    var datum = document.getElementById("datum");
    var vreme = document.getElementById("startPause");
    var unitsOfTime = document.getElementById("unitsOfTime");


    var term = {
        "barber": barber,
        "service": "pauza",
        "date": datum.value,
        "time": vreme.value,
        "customerName": "/",
        "customerPhone": "/",
        "unitsOfTime": unitsOfTime.value
    };

    var json = JSON.stringify(term);
    console.log(json);

    if (
        datum.value !== "" &&
        barber !== undefined &&
        vreme.value !== ""
    ) {

        var xhr = new XMLHttpRequest();
        var url = 'http://134.122.112.114:8080/legat/admin/break';
        var urlLocal = 'http://localhost:8080/admin/break';
        xhr.open('POST', url, false);
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);

        xhr.onload = function () {
            console.log(xhr.status);
            console.log(xhr.responseText);
            if (xhr.status != '200') {
                window.alert("Došlo je do grekse, molimo pokušajte ponovo.");
            } else {
                window.alert("Rezervisan termin");
                dohvatiTermine();
            }
        };
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(json);

    } else {
        if (ime.value == "") {
            $('#ime').css('border', '3px solid red');
        } else {
            $('#ime').css('border', '0px');
        }
        if (broj.value == "" || broj.value == 381) {
            $('#broj').css('border', '3px solid red');
        } else {
            $('#broj').css('border', '0px');
        }
    }
}

function changeWorkingHours() {

    date = document.getElementById('datum').value;
    barber = document.getElementById('berberin').value;
    startTime = document.getElementById('startTime').value;
    endTime = document.getElementById('endTime').value;

    var scheduler = {
        "date": date,
        "barber": barber,
        "startTime": startTime,
        "endTime": endTime
    };

    var json = JSON.stringify(scheduler);
    console.log(json);

    var xhr = new XMLHttpRequest();
    let url = 'http://134.122.112.114:8080/legat/admin/scheduler';
    let urlLocal = 'http://localhost:8080/admin/scheduler';
    xhr.open('POST', url, false);
    const token = window.localStorage.getItem('token');
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.onload = function () {
        console.log(xhr.status);
        console.log(xhr.responseText);
        if (xhr.status != '200') {
            window.alert("Doslo je do greske!" + xhr.responseText);
        } else {
            window.alert("Uspesno ste setovali vreme.")
        }
    };

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json);

}

function zakazivanje(e) {

    const token = window.localStorage.getItem('token');

    e.preventDefault();
    $("#demo").show();

    barber = document.getElementById('berberin').value;

    var datum = document.getElementById("datum");
    var vreme = document.getElementById("vreme");
    var usluga = document.getElementById("usluga");
    var ime = document.getElementById('ime');
    var broj = document.getElementById('broj');

    var term = {
        "barber": barber,
        "service": usluga.value,
        "date": datum.value,
        "time": vreme.value,
        "customerName": ime.value,
        "customerPhone": broj.value
    };

    var json = JSON.stringify(term);
    console.log(json);

    if (
        datum.value !== "" &&
        usluga.value !== "" &&
        barber !== undefined &&
        vreme.value !== "" &&
        ime.value !== "" &&
        broj.value !== ""
    ) {

        var xhr = new XMLHttpRequest();
        var url = 'http://134.122.112.114:8080/legat/admin/term';
        var urlLocal = 'http://localhost:8080/admin/term';
        xhr.open('POST', url, false);
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);

        xhr.onload = function () {
            console.log(xhr.status);
            console.log(xhr.responseText);
            if (xhr.status != '200') {
                window.alert("Došlo je do grekse, molimo pokušajte ponovo.");
            } else {
                window.alert("Rezervisan termin");
                dohvatiTermine();
            }
        };
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(json);

    } else {
        if (ime.value == "") {
            $('#ime').css('border', '3px solid red');
        } else {
            $('#ime').css('border', '0px');
        }
        if (broj.value == "" || broj.value == 381) {
            $('#broj').css('border', '3px solid red');
        } else {
            $('#broj').css('border', '0px');
        }
    }

}

function removeTerm() {
    const token = window.localStorage.getItem('token');

    var xhrRemove = new XMLHttpRequest();
    let urlRemoveLocal = 'http://localhost:8080/admin/term/';
    let urlRemove = 'http://134.122.112.114:8080/legat/admin/term/';
    xhrRemove.open('DELETE', urlRemove + $(this).attr('id'), true);
    xhrRemove.setRequestHeader('Authorization', 'Bearer ' + token);

    xhrRemove.onload = function () {
        if (xhrRemove.status != '200') {
            window.alert("Doslo je do greske prilikom brisanja termina.");
        } else {
            window.alert("Uspesno ste obrisali termin.")
            dohvatiTermine();
        }
    };

    xhrRemove.send(null);
}

function dohvatiTermine() {

    date = document.getElementById('datum').value;
    barber = document.getElementById('berberin').value;


    if (
        date !== "" &&
        barber !== ""
    ) {
        console.log(date, barber)

        var xhr = new XMLHttpRequest();
        let urlLocal = 'http://localhost:8080/admin/terms/';
        let url = 'http://134.122.112.114:8080/legat/admin/terms/';
        xhr.open('GET', url + barber + '/' + date, true);
        const token = window.localStorage.getItem('token');
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        xhr.onload = function () {
            if (xhr.status != '200') {
                window.alert("Doslo je do greske prilikom preuzimanja termina, pokusajte ponovo ili kontaktirajte podrsku: milosevic.etf@gmail.com, h.nemanja@yahoo.com");
            } else {
                var data = JSON.parse(xhr.responseText);
                var termResults = document.getElementById("term_results");
                termResults.innerText = '';
                var table = document.createElement('TABLE');
                var tableBody = document.createElement('TBODY');

                table.border = '1';
                table.appendChild(tableBody);

                var heading = ['Vreme', 'Usluga', 'Korisnik', 'Broj Telefona', 'Brisanje'];

                //TABLE COLUMNS
                var trHead = document.createElement('TR');
                tableBody.appendChild(trHead);
                for (let i = 0; i < heading.length; i++) {
                    var th = document.createElement('TH');
                    th.width = '75';
                    th.appendChild(document.createTextNode(heading[i]));
                    trHead.appendChild(th);
                }

                //TABLE ROWS
                for (var key in data) {

                    var tr = document.createElement('TR');
                    var tdTime = document.createElement('TD');
                    tdTime.appendChild(document.createTextNode(data[key].time));

                    var tdService = document.createElement('TD');
                    tdService.appendChild(document.createTextNode(data[key].service));

                    var tdCustomer = document.createElement('TD');
                    tdCustomer.appendChild(document.createTextNode(data[key].customerName));

                    var tdPhone = document.createElement('TD');
                    tdPhone.appendChild(document.createTextNode(data[key].customerPhone));

                    var tdRemove = document.createElement('TD');
                    var btn = document.createElement('button');


                    //TODO: za KUMICA - svaki red u tabeli treba da poziva funckiju "removeTerm()" sa id-jem kao parametrom, id se nalazi u polju data[key].id :) SRECNO!
                    btn.innerText = 'Obrisi';
                    tdRemove.appendChild(btn)

                    //TODO
                    btn.setAttribute('id', data[key].id);
                    btn.setAttribute('value', "Obrisi");
                    btn.setAttribute('class', 'rem-btn');
                    tr.appendChild(tdTime);
                    tr.appendChild(tdService);
                    tr.appendChild(tdCustomer);
                    tr.appendChild(tdPhone);
                    tr.appendChild(tdRemove);

                    tableBody.appendChild(tr);

                }
                termResults.appendChild(table);

                //TODO
                for (var key in data) {
                    document.getElementById(`${data[key].id}`).addEventListener("click", removeTerm);
                }
                //TODO
            }

        };

        xhr.send(null);


        var xhrScheduler = new XMLHttpRequest();
        let urlSchedulerLocal = 'http://localhost:8080/admin/scheduler/';
        let urlScheduler = 'http://134.122.112.114:8080/legat/admin/scheduler/';
        xhrScheduler.open('GET', urlScheduler + barber + '/' + date, true);
        xhrScheduler.setRequestHeader('Authorization', 'Bearer ' + token);

        xhrScheduler.onload = function () {
            if (xhrScheduler.status != '200') {
                window.alert("Doslo je do greske prilikom dohvatanja radnog vremena, pokusajte ponovo ili kontaktirajte podrsku: milosevic.etf@gmail.com, h.nemanja@yahoo.com");
            } else {
                var data = JSON.parse(xhrScheduler.responseText);
                document.getElementById("startTime").value = data.startTime;
                document.getElementById("endTime").value = data.endTime;

            }
        };

        xhrScheduler.send(null);

    }

}
