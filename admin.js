$(document).ready(function () {

    $("#datum").on("change", dohvatiTermine);
    $("#berberin").on("change", dohvatiTermine);
    $("#changeWorkingHours").on("click", changeWorkingHours);

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


    function dohvatiTermine() {

        console.log("get terms")
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
                        btn.innerText='Obrisi';
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

    function removeTerm() {
    console.log('evo ga kumicc'+ ' ' + $(this).attr('id'));
       
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
