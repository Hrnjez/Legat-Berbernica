//Buttons-Events iz NavBar-a
$(document).ready(function () {
    $('.popup-box').hide();
    $('.popup-btn button').click(function () {
        $('.popup-box').fadeOut(500);
    });
    document.getElementById("btnGlavna").addEventListener("click", glavna);

    function glavna() {
        var viewGlavna = document.getElementById("glavna");
        viewGlavna.scrollIntoView({block: "start", behavior: "smooth"});
        console.log("Glavna");
        $("#glavna").show(1000);
        $("#oNama").show(1000);
        $("#nasiRadovi").show(1000);
        $("#cenovnik").show(1000);
        $("#zakazivanje").show(1000);
        $("#footer").show(1000);
        $("#terminiDemo").hide();
        $("#login").hide(1000);
        $("#addImg").hide(1000);
    }

    document.getElementById("btnONama").addEventListener("click", oNama);

    function oNama() {
        var viewONama = document.getElementById("oNama");
        viewONama.scrollIntoView({block: "start", behavior: "smooth"});
        $("#glavna").show(1000);
        $("#oNama").show(1000);
        $("#nasiRadovi").show(1000);
        $("#cenovnik").show(1000);
        $("#zakazivanje").show(1000);
        $("#footer").show(1000);
        $("#terminiDemo").hide();
        $("#login").hide(1000);
        $("#addImg").hide(1000);
        console.log("O nama");
    }

    document.getElementById("btnCene").addEventListener("click", cene);

    function cene() {
        var viewCene = document.getElementById("cenovnik");
        viewCene.scrollIntoView({block: "start", behavior: "smooth"});
        $("#glavna").show(1000);
        $("#oNama").show(1000);
        $("#nasiRadovi").show(1000);
        $("#cenovnik").show(1000);
        $("#zakazivanje").show(1000);
        $("#footer").show(1000);
        $("#terminiDemo").hide();
        $("#login").hide(1000);
        $("#addImg").hide(1000);
        console.log("Cene");
    }

    document.getElementById("btnRez").addEventListener("click", rezervacija);

    function rezervacija() {
        var viewZakazivanje = document.getElementById("zakazivanje");
        viewZakazivanje.scrollIntoView({block: "start", behavior: "smooth"});
        $("#glavna").show(1000);
        $("#oNama").show(1000);
        $("#nasiRadovi").show(1000);
        $("#cenovnik").show(1000);
        $("#zakazivanje").show(1000);
        $("#footer").show(1000);
        $("#login").hide(1000);
        $("#addImg").hide(1000);
        $("#terminiDemo").hide();
        console.log("Rezervacija");
    }

    document.getElementById("btnKontakt").addEventListener("click", kontakt);

    function kontakt() {
        var viewKontakt = document.getElementById("footer");
        viewKontakt.scrollIntoView({block: "start", behavior: "smooth"});
        $("#glavna").show(1000);
        $("#oNama").show(1000);
        $("#nasiRadovi").show(1000);
        $("#cenovnik").show(1000);
        $("#zakazivanje").show(1000);
        $("#footer").show(1000);
        $("#terminiDemo").hide();
        $("#login").hide(1000);
        $("#addImg").hide(1000);
        console.log("Kontakt");
    }

    document.getElementById("rezBtn").addEventListener("click", rezervacijaBtn);

    function rezervacijaBtn() {
        var viewZakazivanje = document.getElementById("zakazivanje");
        viewZakazivanje.scrollIntoView({block: "start", behavior: "smooth"});
        $("#glavna").show(1000);
        $("#oNama").show(1000);
        $("#nasiRadovi").show(1000);
        $("#cenovnik").show(1000);
        $("#zakazivanje").show(1000);
        $("#footer").show(1000);
        $("#terminiDemo").hide();
        $("#login").hide(1000);
        $("#addImg").hide(1000);
        console.log("Rezervacija");
    }

    // Zakazivanje termina jQuery
    $("#terminiDemo").hide();
    $("#zakazivanje p").hide();
    $("#inputBoxes").hide();
    $("#zakazi").hide();
    $("#rezTermini").hide();
    $("#login").hide();
    $("#table button").hide();
    $("#addImg").hide();
    $("#zakaziOvde").click(function () {
        $("#inputBoxes").toggle(1000);
        $("#zakazivanje p").fadeToggle(2000);
        $("#zakazi").toggle(1000);
        $("#rezTermini").toggle(1000);
        $("input ").val("");
        $("select ").val("");
        $('#ime').css('border','0px');
        $('#broj').css('border','0px');
        $('#broj').val(+381);
    });

    // Zakazivanje termina js

    //izbor frizera
    document.getElementById('zabac').addEventListener('click', birajZabu);
    document.getElementById('cvija').addEventListener('click', birajCviju);

    function birajZabu() {
        $('#zabac').toggleClass('active');
        $('#zabacCheck').toggleClass('active');
        $('#cvija').removeClass('active');
        $('#cvijaCheck').removeClass('active');
        dohvatiTermine();
    }

    function birajCviju() {
        $('#cvija').toggleClass('active');
        $('#cvijaCheck').toggleClass('active');
        $('#zabac').removeClass('active');
        $('#zabacCheck').removeClass('active');
        dohvatiTermine();
    }

    $("#zakazi").on("click", zakazivanje);
    $("#datum").on("change", dohvatiTermine);
    $("#usluga").on("change", dohvatiTermine);

    function zakazivanje(e) {
        e.preventDefault();
        $("#demo").show();
        var demo = document.getElementById("demo");
        var datum = document.getElementById("datum");
        var vreme = document.getElementById("vreme");
        var usluga = document.getElementById("usluga");
        var ime = document.getElementById('ime');
        var broj = document.getElementById('broj');
        var cvija = document.getElementById('cvija');
        var zabac = document.getElementById('zabac');
        var frizer = undefined;

        if (cvija.className == 'active') {
            frizer = cvija.id;
        } else if (zabac.className == 'active') {
            frizer = zabac.id;
        }

        var term = {
            "barber": frizer,
            "service": usluga.value,
            "date": datum.value,
            "time": vreme.value,
            "customerName": ime.value,
            "customerPhone": broj.value,
            "unitsOfTime": 3
        };

        var json = JSON.stringify(term);
        console.log(json);

        if (
            datum.value !== "" &&
            usluga.value !== "" &&
            frizer !== undefined &&
            vreme.value !== "" &&
            ime.value !== "" &&
            broj.value !== ""
        ) {

            var xhr = new XMLHttpRequest();
            var url = 'http://134.122.112.114:8080/legat/term';
            var urlLocal = 'http://localhost:8080/term';
            xhr.open('POST', url, false);

            xhr.onload = function () {
                console.log(xhr.status);
                console.log(xhr.responseText);
                if (xhr.status != '200') {
                    window.alert("wrong request");
                } else {
                    console.log('rezervisao!')
                    $('#zakazi').hide(500);
                    $('#inputBoxes').hide(500, function () {
                        $('.popup-box').fadeIn(1000);
                    });

                }
            };
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(json);
            
        } else {
            console.warn("Nisu sva polja popunjena");
            if (ime.value == "") {$('#ime').css('border','3px solid red'); }
            else {$('#ime').css('border','0px');}
            if (broj.value == "" ||broj.value == 381 ) {$('#broj').css('border','3px solid red'); }
            else {$('#broj').css('border','0px');}
        }
        
    }

    function dohvatiTermine() {

        $("#demo").show();
        var demo = document.getElementById("demo");
        var datum = document.getElementById("datum");
        var usluga = document.getElementById("usluga");
        var cvija = document.getElementById('cvija');
        var zabac = document.getElementById('zabac');
        var frizer = undefined;

        if (cvija.className == 'active') {
            frizer = cvija.id;
        } else if (zabac.className == 'active') {
            frizer = zabac.id;
        }

        if (
            datum.value !== "" &&
            usluga.value !== "" &&
            frizer !== undefined
        ) {
            console.warn("neophodna polja su popunjena");

            var url = 'http://134.122.112.114:8080/legat/freeTerms/';
            var urlLocal = 'http://localhost:8080/freeTerms/';

            var xhr = new XMLHttpRequest();
            xhr.open('GET', url + frizer + "/" + datum.value + "/" + usluga.value, false);

            xhr.onload = function () {
                console.log(xhr.status);
                console.log(xhr.responseText);
                var data = JSON.parse(xhr.responseText);
                if (xhr.status != '200') {
                    window.alert("error");
                } else {
                    var terms = document.getElementById("vreme");
                    terms.innerHTML = '';
                    for (var key in data) {
                        var option = document.createElement("option");
                        option.text = data[key];
                        terms.add(option);
                    }
                }
            };
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(null);

            console.log(usluga.value)
            // demo.innerHTML = `<p style='font-family:OSC;'>${datum.value},  ${usluga.value} <i  style="border:0px !important; color: #ab4646; margin-bottom:10px;" class="fas fa-check fa-2x"></i> </p>`;
            // rez =
            //   '<span id="rez">' +
            //   "<h3>Rezervacija:</h3> <h3> Datum:  " +
            //   datum.value +
            //   "  - Vreme:  " +
            //   usluga.value +
            //   " </h3> </span>" +
            //   '<div> <button id="potvrdi">Potvrdi</button> ' +
            //   ' <button id="otkazi">Promeni unete podatke</button></div>';
            // demo.innerHTML = rez;
            console.log([
                datum.value,
                // vreme.value,
                // ime.value,
                // broj.value,
                // email.value,
                usluga.value,
                frizer
            ]);
            // document.getElementById("potvrdi").addEventListener("click", potvrdiRez);
            // document.getElementById("otkazi").addEventListener("click", otkaziRez);
        } else {
            console.warn("Nisu sva polja popunjena");
            // demo.innerHTML = `<h3 style='margin-bottom:0px;'>Popunite sva poqa!</h3><h4 style="font-family:OSC; margin-top:0px;">Fill in all fields!</h4>`;
        }
    }

    //potvrda rezervacije
    // function potvrdiRez() {
    //   var demo = document.getElementById("demo");
    //   rez = "<h3>Va{a rezervacija je potvr|ena !</h3>";
    //   demo.innerHTML = rez;
    //   $("#demo").fadeOut(2000);
    //   console.log("Potvrdjeno");
    //   var table = document.getElementById("table");
    //   var tr = document.createElement("tr");
    //   var tr2 = document.createElement("button");
    //   var td1 = document.createElement("td");
    //   var td2 = document.createElement("td");
    //   var td3 = document.createElement("td");
    //   var td4 = document.createElement("td");
    //   var td5 = document.createElement("td");
    //   var td6 = document.createElement("td");
    //   var td7 = document.createElement("td");
    //   var td8 = document.createElement("td");
    //   var td9 = document.createElement("td");
    //   var td10 = document.createElement("td");
    //   var td11 = document.createElement("td");
    //   var td12 = document.createElement("td");

    //   console.log("sdfsdf");

    //   td1.innerHTML = "<span id='green'>" + datum.value + "</span>";
    //   td2.innerHTML = "<span id='green'>" + vreme.value + "</span>";
    //   td3.innerHTML = ime.value;
    //   td4.innerHTML = broj.value;
    //   td5.innerHTML = email.value;
    //   td6.innerHTML = "<span id='green'>" + usluga.value + "</span>";
    //   td7.innerHTML = "<span id='red'>Datum: </span>";
    //   td8.innerHTML = "<span id='red'>Vreme: </span>";
    //   td9.innerHTML = "<span id='red'>Ime: </span>";
    //   td10.innerHTML = "<span id='red'>Broj Telefona: </span>";
    //   td11.innerHTML = "<span id='red'>Email Adresa: </span>";
    //   td12.innerHTML = "<span id='red'>Usluga: </span>";
    //   tr2.innerHTML = "Obri{i rezervaciju";
    //   tr.appendChild(td7);
    //   tr.appendChild(td1);
    //   tr.appendChild(td8);
    //   tr.appendChild(td2);
    //   tr.appendChild(td12);
    //   tr.appendChild(td6);
    //   tr.appendChild(td9);
    //   tr.appendChild(td3);
    //   tr.appendChild(td10);
    //   tr.appendChild(td4);
    //   tr.appendChild(td11);
    //   tr.appendChild(td5);

    //   table.appendChild(tr);
    //   table.appendChild(tr2);

    //   $("#nemaRez").hide();
    //   $("#table button").hide();
    //   $("#addImg").hide();
    //   $("#table button").click(function () {
    //     $(this)
    //       .prev()
    //       .remove();
    //     $(this).remove();
    //   });
    // }

    // $("#rezTermini").click(function () {
    //   $("#glavna").hide();
    //   $("#oNama").hide();
    //   $("#nasiRadovi").hide();
    //   $("#cenovnik").hide();
    //   $("#zakazivanje").hide();
    //   $("#footer").hide();
    //   $("#terminiDemo").show(1000);
    // });
    // // otkaz rezervacije
    // function otkaziRez() {
    //   var demo = document.getElementById("demo");
    //   rez = "<h3>Promena podataka.</h3>";
    //   demo.innerHTML = rez;
    //   $("#demo").fadeOut(2000);
    //   console.log("Otkazano");
    // }

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




