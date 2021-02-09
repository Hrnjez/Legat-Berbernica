//Buttons-Events iz NavBar-a
$(document).ready(function () {
    $('.popup-box').hide();
    $('.popup-btn button').click(function () {
        $('.popup-box').fadeOut(500);
    });
    $('.popup-box-2').hide();
    $('.popup-btn-2 button').click(function () {
        $('.popup-box-2').fadeOut(500);
    });
    $('.popup-box-3').hide();
    $('.popup-btn-3 button').click(function () {
        $('.popup-box-3').fadeOut(500);
    });
    $('.popup-box-4').hide();
    $('.popup-btn-4 button').click(function () {
        $('.popup-box-4').fadeOut(500);
    });
    document.getElementById("btnGlavna").addEventListener("click", glavna);

    function glavna() {
        var viewGlavna = document.getElementById("glavna");
        viewGlavna.scrollIntoView({block: "start", behavior: "smooth"});
        // $("#glavna").show(1000);
        // $("#oNama").show(1000);
        // $("#nasiRadovi").show(1000);
        // $("#cenovnik").show(1000);
        // $("#zakazivanje").show(1000);
        // $("#footer").show(1000);
        // $("#terminiDemo").hide();
        // $("#login").hide(1000);
        // $("#addImg").hide(1000);
    }

    document.getElementById("btnONama").addEventListener("click", oNama);

    function oNama() {
        var viewONama = document.getElementById("oNama");
        viewONama.scrollIntoView({block: "start", behavior: "smooth"});
        // $("#glavna").show(1000);
        // $("#oNama").show(1000);
        // $("#nasiRadovi").show(1000);
        // $("#cenovnik").show(1000);
        // $("#zakazivanje").show(1000);
        // $("#footer").show(1000);
        // $("#terminiDemo").hide();
        // $("#login").hide(1000);
        // $("#addImg").hide(1000);
    }

    document.getElementById("btnCene").addEventListener("click", cene);

    function cene() {
        var viewCene = document.getElementById("cenovnik");
        viewCene.scrollIntoView({block: "start", behavior: "smooth"});
        // $("#glavna").show(1000);
        // $("#oNama").show(1000);
        // $("#nasiRadovi").show(1000);
        // $("#cenovnik").show(1000);
        // $("#zakazivanje").show(1000);
        // $("#footer").show(1000);
        // $("#terminiDemo").hide();
        // $("#login").hide(1000);
        // $("#addImg").hide(1000);
    }

    document.getElementById("btnRez").addEventListener("click", rezervacija);

    function rezervacija() {
        var viewZakazivanje = document.getElementById("zakazivanje");
        viewZakazivanje.scrollIntoView({block: "start", behavior: "smooth"});
        // $("#glavna").show(1000);
        // $("#oNama").show(1000);
        // $("#nasiRadovi").show(1000);
        // $("#cenovnik").show(1000);
        // $("#zakazivanje").show(1000);
        // $("#footer").show(1000);
        // $("#login").hide(1000);
        // $("#addImg").hide(1000);
        // $("#terminiDemo").hide();
    }

    document.getElementById("btnKontakt").addEventListener("click", kontakt);

    function kontakt() {
        var viewKontakt = document.getElementById("footer");
        viewKontakt.scrollIntoView({block: "start", behavior: "smooth"});
        // $("#glavna").show(1000);
        // $("#oNama").show(1000);
        // $("#nasiRadovi").show(1000);
        // $("#cenovnik").show(1000);
        // $("#zakazivanje").show(1000);
        // $("#footer").show(1000);
        // $("#terminiDemo").hide();
        // $("#login").hide(1000);
        // $("#addImg").hide(1000);
    }

    document.getElementById("rezBtn").addEventListener("click", rezervacijaBtn);

    function rezervacijaBtn() {
        var viewZakazivanje = document.getElementById("zakazivanje");
        viewZakazivanje.scrollIntoView({block: "start", behavior: "smooth"});
        // $("#glavna").show(1000);
        // $("#oNama").show(1000);
        // $("#nasiRadovi").show(1000);
        // $("#cenovnik").show(1000);
        // $("#zakazivanje").show(1000);
        // $("#footer").show(1000);
        // $("#terminiDemo").hide();
        // $("#login").hide(1000);
        // $("#addImg").hide(1000);
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
        $('#ime').css('border', '0px');
        $('#broj').css('border', '0px');
        $('#broj').val(+381);
    });

    function birajCviju() {
        $('#cvija').toggleClass('active');
        $('#cvijaCheck').toggleClass('active');
        $('#zabac').removeClass('active');
        $('#zabacCheck').removeClass('active');
        dohvatiTermine();
    }

    birajCviju(); //direktno biranje cvije

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
            "customerPhone": broj.value
        };

        if (
            datum.value !== "" &&
            usluga.value !== "" &&
            frizer !== undefined &&
            vreme.value !== "" &&
            ime.value !== "" &&
            broj.value !== ""
        ) {

            var url = 'http://134.122.112.114:8080/legat/term';
            var urlLocal = 'http://localhost:8080/term';

            axios.post(url, term)
                .then((response) => {
                    $('#zakazi').hide(500);
                    $('#inputBoxes').hide(500, function () {
                        $('.popup-box').fadeIn(1000);
                    });
                }, (error) => {
                    // window.alert("Traženi termin je zauzet, pokušajte neki od slobodnih termina.");
                    $('.popup-box-2').fadeIn(1000);
                    dohvatiTermine();
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

    function dohvatiTermine() {

        $("#demo").show();
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
            var url = 'http://134.122.112.114:8080/legat/freeTerms/';
            var urlLocal = 'http://localhost:8080/freeTerms/';

            axios.get(url + frizer + "/" + datum.value + "/" + usluga.value).then(
                (response) => {
                    console.log(response.data);
                    if (response.data.length == 0) {
                        // window.alert("Nema slobodnih termina za traženi datum i uslugu.");
                        $('.popup-box-3').fadeIn(1000);
                    }
                    var terms = document.getElementById("vreme");
                    terms.innerHTML = '';
                    for (var key in response.data) {
                        var option = document.createElement("option");
                        option.text = response.data[key];
                        terms.add(option);
                    }
                },
                (error) => {
                    // window.alert("Došlo je do grekse, molimo pokušajte ponovo.");
                    $('.popup-box-4').fadeIn(1000);
                }
            );

        }
    }

    function unavailable(date) {

        var today = new Date();
        today.setDate((today.getDate() - 1));

        var lastDate = new Date(today);
        lastDate.setDate(lastDate.getDate() + 30);

        if (date >= today && date <= lastDate && date.getDay() !== 0) {
            return [true, ""];
        } else {
            return [false, "", "Unavailable"];
        }
    }

    $(function () {
        $("#datum").datepicker({
            firstDay: 1,
            dateFormat: 'dd.mm.yy',
            beforeShowDay: unavailable
        });

    });

});
//initial srb flag
$('#srb').addClass('focusClass');
$('#eng').removeClass('focusClass');
$('#eng').addClass('blurClass');


//toggle flags
$("#srb").on("click", function () {
    $('#srb').addClass('focusClass');
    $('#eng').removeClass('focusClass');
    $('#eng').addClass('blurClass');
});

$("#eng").on("click", function () {
    $('#eng').addClass('focusClass');
    $('#srb').removeClass('focusClass');
    $('#srb').addClass('blurClass');
});
