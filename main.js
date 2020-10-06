//Buttons-Events iz NavBar-a
$(document).ready(function () {
  document.getElementById("btnGlavna").addEventListener("click", glavna);
  function glavna() {
    var viewGlavna = document.getElementById("glavna");
    viewGlavna.scrollIntoView({ block: "start", behavior: "smooth" });
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
    viewONama.scrollIntoView({ block: "start", behavior: "smooth" });
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
    viewCene.scrollIntoView({ block: "start", behavior: "smooth" });
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
    viewZakazivanje.scrollIntoView({ block: "start", behavior: "smooth" });
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
    viewKontakt.scrollIntoView({ block: "start", behavior: "smooth" });
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
    viewZakazivanje.scrollIntoView({ block: "start", behavior: "smooth" });
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
  });

  // Zakazivanje termina js

  //izbor frizera
  document.getElementById('zabac').addEventListener('click',birajZabu);
  document.getElementById('cvija').addEventListener('click',birajCviju);
function birajZabu(){
  $('#zabac').toggleClass('active');
  $('#zabacCheck').toggleClass('active');
  $('#cvija').removeClass('active');
  $('#cvijaCheck').removeClass('active');
  }
  function birajCviju(){
    $('#cvija').toggleClass('active');
    $('#cvijaCheck').toggleClass('active');
    $('#zabac').removeClass('active');
    $('#zabacCheck').removeClass('active');
    }
//zakazivanje
  document.getElementById("zakazi").addEventListener("click", zakazivanje);
  function zakazivanje() {
    $("#demo").show();
    var demo = document.getElementById("demo");
    var datum = document.getElementById("datum");
    // var vreme = document.getElementById("vreme");
    // var broj = document.getElementById("broj");
    // var ime = document.getElementById("ime");
    // var email = document.getElementById("email");
    var usluga = document.getElementById("usluga");
    var cvija = document.getElementById('cvija');
    var zabac = document.getElementById('zabac');
    var frizer = undefined;
    function izabranFrizer(){
      if (cvija.className == 'active'){
        // console.log(cvija.id);
        frizer = cvija.id;
      }else if (zabac.className == 'active'){
        // console.log(zabac.id);
        frizer = zabac.id;
      }
    }
    izabranFrizer();
    // console.log(frizer);
    if (
      datum.value !== "" &&
      // vreme.value !== "" &&
      // broj.value !== "" &&
      usluga.value !== "" && 
      frizer !== undefined
      // && email.value !== "" &&
      // ime.value !== ""
    ) {
      console.warn("sva polja su popunjena");
      demo.innerHTML = `<p style='font-family:OSC;'>${datum.value},  ${usluga.value} <i  style="border:0px !important; color: #ab4646; margin-bottom:10px;" class="fas fa-check fa-2x"></i> </p>`;
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
      demo.innerHTML = `<h3 style='margin-bottom:0px;'>Popunite sva poqa!</h3><h4 style="font-family:OSC; margin-top:0px;">Fill in all fields!</h4>`;
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
  var unavailableDates = ["9-10-2020", "14-10-2020", "15-10-2020"];
  function unavailable(date) {
      dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      if ($.inArray(dmy, unavailableDates) == -1) {
          return [true, ""];
      } else {
          return [false, "", "Unavailable"];
      }
  }
  $(function() {
      $("#datum").datepicker({
          dateFormat: 'dd MM yy',
          beforeShowDay: unavailable
      });

  });
});




