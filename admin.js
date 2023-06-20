

$(document).ready(function () {

    $(function () {
        $("#datum").datepicker({
            firstDay: 1,
            dateFormat: 'dd.mm.yy'
        });

        $('.next-day').on("click", function () {
            var date = $('#datum').datepicker('getDate');
            date.setDate(date.getDate() + 1)
            $('#datum').datepicker("setDate", date);
            dohvatiTermine();
        });
        
        $('.prev-day').on("click", function () {
            var date = $('#datum').datepicker('getDate');
            date.setDate(date.getDate() - 1)
            $('#datum').datepicker("setDate", date);
            dohvatiTermine();
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

    const headers = {
        headers: {Authorization: `Bearer ${token}`}
    };

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

    if (
        datum.value !== "" &&
        barber !== undefined &&
        vreme.value !== ""
    ) {

        var url = 'http://134.122.112.114:8080/legat/admin/break';
        var urlLocal = 'http://localhost:8080/admin/break';

        axios.post(url, term, headers)
            .then((response) => {
                window.alert("Uspešno ste dodali vreme za pauzu u raspored.");
                dohvatiTermine();
            }, (error) => {
                window.alert("Došlo je do greške, molimo pokušajte ponovo.");

            });

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

    const token = window.localStorage.getItem('token');

    const headers = {
        headers: {Authorization: `Bearer ${token}`}
    };

    date = document.getElementById('datum').value;
    barber = document.getElementById('berberin').value;
    startTime = document.getElementById('startTime').value;

    endTime = document.getElementById('endTime').value;

    let url = 'http://134.122.112.114:8080/legat/admin/scheduler';
    let urlLocal = 'http://localhost:8080/admin/scheduler';

    var scheduler = {
        "date": date,
        "barber": barber,
        "startTime": startTime,
        "endTime": endTime
    };

    axios.post(url, scheduler, headers)
        .then((response) => {
            window.alert("Uspešno ste promenili radno vreme.")
        }, (error) => {
            window.alert("Došlo je do greške, molimo pokušajte ponovo.");
        });

}

function zakazivanje(e) {

    const token = window.localStorage.getItem('token');

    const headers = {
        headers: {Authorization: `Bearer ${token}`}
    };

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

    if (
        datum.value !== "" &&
        usluga.value !== "" &&
        barber !== undefined &&
        vreme.value !== "" &&
        ime.value !== "" &&
        broj.value !== ""
    ) {
        var url = 'http://134.122.112.114:8080/legat/admin/term';
        var urlLocal = 'http://localhost:8080/admin/term';

        axios.post(url, term, headers)
            .then((response) => {
                window.alert("Uspešno ste rezervisali termin.");
                dohvatiTermine()
                č
            }, (error) => {
                window.alert("Došlo je do greške, molimo pokušajte ponovo.");
            });

    } else {
        if (ime.value == "") {
            $('#ime').css('border', '3px solid red');
        } else {
            $('#ime').css('border', '0px');
        }
    }

}

const istorijaBtn = document.querySelector('#istBtn');
const istorijaContent = document.querySelector('#tTermin')
istorijaBtn.addEventListener('click', () => {
    istorijaContent.className = istorijaContent.className === "prikazi" ? "" : "prikazi";
})

const tTermin = document.querySelector('#tTermin');

function removeTerm() {
    const date = document.getElementById('datum').value;
    const token = window.localStorage.getItem('token');

    const headers = {
        headers: {Authorization: `Bearer ${token}`}
    };

    let urlRemoveLocal = 'http://localhost:8080/admin/term/';
    let urlRemove = 'http://134.122.112.114:8080/legat/admin/term/';

    //nov kod
    const now = new Date();
    
    const tacanTerm = $(this).parent().parent().html();
    const tacanTermin = tacanTerm.split('<button')[0].replace(/<td>/g, ' ');
    console.log(tacanTermin);
    
    function zabeleziBrisanje() {
        const htmlTermin = `
            <div class='tt'>
                    <p>Datum termina: ${date}</p>
                    <p>Vreme brisanja: ${now.toLocaleString()}</p>
                ${tacanTermin}
            </div>
           `;
        //    const htmlVreme = `<p>${now.toLocaleString()}</p>`;
           
           
           localStorage.setItem("lastData", htmlTermin);
           tTermin.innerHTML += localStorage.getItem('lastData');
           console.log(localStorage.getItem('lastData'));
    }
    zabeleziBrisanje();

    //kraj novog koda

axios.delete(urlRemove + $(this).attr('id'), headers)
    .then((response) => {
        window.alert("Uspešno ste obrisali termin.")
        dohvatiTermine();
    }, (error) => {
        window.alert("Došlo je do greške, molimo pokušajte ponovo.");
    });

}

tTermin.innerHTML += localStorage.getItem('lastData');
console.log(localStorage.getItem('lastData'));

let brisanjeIstorijeBtn = document.getElementById('brisanjeIstorije');
brisanjeIstorijeBtn.addEventListener("click", () => {
    localStorage.removeItem('lastData')
    tTermin.innerHTML = '';
    console.log('obrisano');
})

function dohvatiTermine() {

    const token = window.localStorage.getItem('token');

    const headers = {
        headers: {Authorization: `Bearer ${token}`}
    };

    date = document.getElementById('datum').value;
    barber = document.getElementById('berberin').value;


    if (
        date !== "" &&
        barber !== ""
    ) {

        let urlLocal = 'http://localhost:8080/admin/terms/';
        let url = 'http://134.122.112.114:8080/legat/admin/terms/';

        axios.get(url + barber + '/' + date, headers).then(
            (response) => {
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
                for (var key in response.data) {

                    var tr = document.createElement('TR');
                    var tdTime = document.createElement('TD');
                    tdTime.appendChild(document.createTextNode(response.data[key].time));

                    var tdService = document.createElement('TD');
                    tdService.appendChild(document.createTextNode(response.data[key].service));

                    var tdCustomer = document.createElement('TD');
                    tdCustomer.appendChild(document.createTextNode(response.data[key].customerName));

                    var tdPhone = document.createElement('TD');
                    tdPhone.appendChild(document.createTextNode(response.data[key].customerPhone));

                    var tdRemove = document.createElement('TD');
                    var btn = document.createElement('button');


                    btn.innerText = 'Obrisi';
                    tdRemove.appendChild(btn)

                    btn.setAttribute('id', response.data[key].id);
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

                for (var key in response.data) {
                    document.getElementById(`${response.data[key].id}`).addEventListener("click", removeTerm);
                }
            },
            (error) => {
                window.alert("Došlo je do greške prilikom preuzimanja termina, pokušajte da osvežite stranicu.");
            }
        );

        let urlSchedulerLocal = 'http://localhost:8080/admin/scheduler/';
        let urlScheduler = 'http://134.122.112.114:8080/legat/admin/scheduler/';

        axios.get(urlScheduler + barber + '/' + date, headers).then(
            (response) => {
                document.getElementById("startTime").value = response.data.startTime;
                document.getElementById("endTime").value = response.data.endTime;
            },
            (error) => {
                window.alert("Došlo je do greške prilikom dohvatanja radnog vremena, pokušajte da osvežite stranicu.");
            }
        );

    }

}
