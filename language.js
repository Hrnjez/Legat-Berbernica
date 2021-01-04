$(document).ready(function () {

    const serbianLanguage = {
        glavna: 'Glavna',
        oNama: 'O nama',
        cene: 'Cene',
        rezervacija: 'Rezervacija',
        kontakt: 'Kontakt',
        // logoTxt: 'Logo',
        slogan: 'Negujemo tradiciju dok pratimo novitete',
        bradaIFriz: 'Brada i frizura',
        bradaIFrizP: 'Verujemo u kvalitet i nastojimo da vam pru`imo prvoklasnu uslugu. Britva je na{ omiljeni alat, zato je brijawe na{a u`a specijalnost.',
        oNamaH1: ' O nama',
        oNamaP: "Berbernica Legat se nalazi u jednom od najlep{ih delova  Vra<span class='small-letter'>^</span>ara, u samom srcu Beograda. Legat nije obi<span class='small-letter'>^</span>na berberbnica, to je klub u kome }e svaki gospodin u`ivati u komforu entrerijera fino}i pi}a i visokom kvalitetu usluga. Verujemo da svaki mu{karac treba da nosi frizuru koja pristaje wegovom karakteru, stilu i na<span class='small-letter'>^</span>inu `ivota. Bilo da `elite klasi<span class='small-letter'>^</span>nu frizuru '50-ih,  <span class='eng-word'>fade</span> sa bezbroj varijacija ili neprevaziđeni <span class='eng-word'>rockabilly</span> stil,na{i berberi }e biti na visini zadatka. Negujemo tradiciju dok pratimo novitete. Poredfrizura, tu smo da se postaramo i za izgled Va{e brade i brkova. Verujemo u kvalitet i nastojimo da vam pru`imo prvoklasnu uslugu. Britva je na{ omiljeni alat, zato je brijawe na{a u`a specijalnost.",
        kontaktH3: 'Kontakt',
        kontaktP: 'Posetite nas na na{oj adresi',
        kontaktH4: 'Adresa:',
        vidiNaMapi: 'Vidi na mapi',
        radnoVreme: 'Radno vreme',
        radnoVremePonPet: 'Ponedeqak - Petak ..11:00 - 21:00',
        radnoVremeSub: 'Subota .............10:00 - 16:00',
        rezBtn: 'Rezervacija',
        nasiRadoviH1: 'NA[I RADOVI',
        nasiRadoviH4: 'Neki od na{ih zadovoqnih klijenata',
        cenovnik: `
        <h1>Cenovnik usluga</h1>
        <br />
        <div>
          <h2>[i{awe</h2>
          <h4>
            Vreme trajawa 45 minuta . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . 
            <span id="ceneSisanja">РСД 1200</span>
          </h4>
        </div>
        <div>
          <h2>[i{awe ma{inicom</h2>
          <h4>
            Vreme trajawa 30 minuta . . . . . . . . . . . . . . . . . . . . . .
            . . . . . .
            <span id="ceneSisanja"> РСД 900</span>
          </h4>
        </div>
  
        <h2>[i{awe, Deca</h2>
        <h4>
          Vreme trajawa 45 minuta . . . . . . . . . . . . . . . . . . . . . . .
          . . . . . 
          <span id="ceneSisanja">РСД 800</span>
        </h4>
        <h2>Brijawe</h2>
        <h4>
          Vreme trajawa 30 minuta . . . . . . . . . . . . . . . . . . . . . . .
          . . . . . 
          <span id="ceneSisanja">РСД 1000</span>
        </h4>
        <h2>Korekcija brade</h2>
        <h4>
          Vreme trajawa 30 minuta . . . . . . . . . . . . . . . . . . . . . . .
          . . . . . 
          <span id="ceneSisanja">РСД 800</span>
        </h4>
        <h2>Komplet 1</h2>
        <h4>
          [i{awe i korekcija brade
        </h4>
        <h4>
          Vreme trajawa 1 sat i 45 minuta . . . . . . . . . . . . . . . . . . .
          . . . 
          <span id="ceneSisanja">РСД 1800</span>
        </h4>
        <h2>Komplet 2</h2>
        <h4>
          [i{awe i brijawe
        </h4>
        <h4>
          Vreme trajawa 1 sat i 45 minuta . . . . . . . . . . . . . . . . . . .
          . . . 
          <span id="ceneSisanja">РСД 2000</span>
        </h4>
        <h2>Komplet 3</h2>
        <h4>
          [i{awe ma{inicom i brijawe
        </h4>
        <h4>
          Vreme trajawa 1 sat i 45 minuta . . . . . . . . . . . . . . . . . . .
          . . . 
          <span id="ceneSisanja">РСД 1750</span>
        </h4>
        <h2>Prawe kose i stilizovawe</h2>
        <h4>
          Vreme trajawa 30 minuta . . . . . . . . . . . . . . . . . . . . . . .
          . . . . . 
          <span id="ceneSisanja">РСД 700</span>
        </h4>
        `,
        zakazivanjeH1: 'Zakazivawe',
        dusan: 'Du{an',
        jovan: 'Jovan',
        izaberiDatum: 'Izaberi datum:',
        vrstaUsluge: 'Vrsta Usluge:',
        nameLabel: 'Ime:',
        phoneLabel: 'Broj telefona:',
        timeLabel: 'Izaberi vreme:',
        btnZakazi: 'Zaka`i',
        izaberiVreme: 'Izaberi vreme',
        napisiIme: 'Ime',
        brojTel: 'Broj telefona',
        usluge: `
          <option>Šišanje (45min)</option>
          <option>Šišanje Mašinicom (30min)</option>
          <option>Šišanje, Deca (45min)</option>
          <option>Brijanje (30min)</option>
          <option>Korekcija brade (30min)</option>
          <option>Komplet 1 (1h 45min)</option>
          <option>Komplet 2 (1h 45min)</option>
          <option>Komplet 3 (1h 45min)</option>
          <option>Pranje kose i stilizovanje (30min)</option>`,
          footer: `
          
            <div id="adresa">
              <h2>Адреса :</h2>
              <p id="pAdresa">
                Цара Николаја 2-86. Београд <br/>
                <br/>
                Србија
              </p>
              <button id="vidiNaMapi">
                <a href="https://goo.gl/maps/rKbjUWZPrmwat5fa7"
                  target="_blank">
                  Види На мапи</a>
              </button>
              <br/>

            </div>
            <div id="radnoVreme">
              <h2>Радно време :</h2>

              <p>
                Понедељак - Петак . . . 11:00 - 21:00 <br/>
                <br/>
                Субота . . . . . . . . . . . . 10:00 - 16:00
              </p>
            </div>
            <div id="dMreze">
              <h2>Друштвене мреже :</h2>
              <p>Пратите нас на друштвеним мрежама.</p>
              <button id="btnFace">
                <a href="https://www.facebook.com/berbernica.legat" target="_blank"><i
                    class="fab fa-facebook-square fa-2x"></i></a>
              </button>
              <button id="btnInsta">
                <a href="https://www.instagram.com/berbernica_legat_/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
              </button>
            </div>
            <div>
              <p id="copyright">Copyright &copy; 2020 - Берберница Легат</p>
            </div>
          
          `
      }
    
    const englishLanguage = {
        glavna: 'Home page',
        oNama: 'About us',
        cene: 'Prices',
        rezervacija: 'Booking',
        kontakt: 'Contact',
        // logoTxt: 'Logo',
        slogan: '',
        bradaIFriz: '',
        bradaIFrizP: '',
        oNamaH1: 'About Us',
        oNamaP: 'Тhe barbershop “Legacy”  is located in one of the most beautiful parts of Vracar, in the heart of Belgrade.The “Legacy” is not an ordinary barbershop, it is a club where every gentleman can enjoy in the comfort of the interior, fine liquor  and the high quality services. We believe that every man should wear a hairstyle that suits his character, and lifestyle. Whether you want a classic ’50s hairstyle, a fade, with countless variations, or a superior rockabilly style, our barbers will be up to the task. While we respect the old school, we keep up with new trends.Aside from hairstyling, we are here to take care of your beard and mustache.  We belive in quality, аnd we take our  time to ensure you get the best haircut and shave possible. The razor is our favorite tool,therefore, shaving is our specialty.',
        kontaktH3: 'Contact',
        kontaktP: 'Visit us at our address',
        kontaktH4: 'Address:',
        vidiNaMapi: 'See Map',
        radnoVreme: 'Working hours',
        radnoVremePonPet: 'Monday - Friday ..11:00 - 21:00',
        radnoVremeSub: 'Saturday .............10:00 - 16:00',
        rezBtn: 'Booking',
        nasiRadoviH1: 'Our Work',
        nasiRadoviH4: 'Some of our satisfied customers',
        cenovnik: ` <h1>Price List</h1>
        <br />
        <div>
          <h2>Haircut</h2>
          <h4>
              Duration 45 minutes . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . .
            <span id="ceneSisanja">RSD 1200</span>
          </h4>
        </div>
        <div>
          <h2>Buzz cut</h2>
          <h4>
          Duration 30 minutes . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . .
            <span id="ceneSisanja"> RSD 900</span>
          </h4>
        </div>
  
        <h2>Children's haircut</h2>
        <h4>
            Duration 30 minutes  . . . . . . . . . . . . . . . . . . . . . . .
          . . . . . . . .
          <span id="ceneSisanja">RSD 800</span>
        </h4>
        <h2>Shaving</h2>
        <h4>
           Duration 30 minutes  . . . . . . . . . . . . . . . . . . . . . . .
          . . . . . . . .
          <span id="ceneSisanja">RSD 1000</span>
        </h4>
        <h2>Beard trim</h2>
        <h4>
            Duration 30 minutes  . . . . . . . . . . . . . . . . . . . . . . .
          . . . . . . . .
          <span id="ceneSisanja">RSD 800</span>
        </h4>
        <h2>Set 1</h2>
        <h4>
            Haircut and beard trim
        </h4>
        <h4>
            Duration 1 hour and 15 minutes . . . . . . . . . . . . . . . . . . .
          . . . . . .
          <span id="ceneSisanja">RSD 1800</span>
        </h4>
        <h2>Set 2</h2>
        <h4>
            Haircut and straight razor shave
        </h4>
        <h4>
            Duration 1 hour and 15 minutes . . . . . . . . . . . . . . . . . . .
          . . . . . .
          <span id="ceneSisanja">RSD 2000</span>
        </h4>
        <h2>Set 3</h2>
        <h4>
           Buzz cut and beard trim
        </h4>
        <h4>
           Duration 1 hour . . . . . . . . . . . . . . . . . . . .
          . . . . . .
          <span id="ceneSisanja">RSD 1650</span>
        </h4>
        <h2>Set 4</h2>
        <h4>
           Buzz cut and straight razor shave
        </h4>
        <h4>
           Duration 1 hour . . . . . . . . . . . . . . . . . . .
          . . . . . .
          <span id="ceneSisanja">RSD 1750</span>
        </h4>
        <h2>Hair Wash and Styling</h2>
        <h4>
            Duration 20 minutes  . . . . . . . . . . . . . . . . . . . . . . .
          . . . . . . . .
          <span id="ceneSisanja">RSD 700</span>
        </h4>
        `,
        zakazivanjeH1: 'Booking',
        dusan: 'Dusan',
        jovan: 'Jovan',
        izaberiDatum: 'Select a Date:',
        vrstaUsluge: 'Type of Service:',
        btnZakazi: 'Schedule',
        izaberiVreme: 'Choose a time',
        napisiIme: 'Name',
        brojTel: 'Phone number',
        usluge: `
          <option>Haircut (45min)</option>
          <option>Haircut with a Clipper (30min)</option>
          <option>Haircut, Children (45min)</option>
          <option>Shaving (30min)</option>
          <option>Chin correction (30min)</option>
          <option>Set 1 (1h 45min)</option>
          <option>Set 2 (1h 45min)</option>
          <option>Set 3 (1h 45min)</option>
          <option>Hair Washing and Styling (30min)</option>`,
          footer: `
          
          <div id="adresa">
            <h2>Adress :</h2>
            <p id="pAdresa">
              Cara Nikolaja 2-86. Beograd <br/>
              <br/>
              Serbia
            </p>
            <button id="vidiNaMapi">
              <a href="https://goo.gl/maps/rKbjUWZPrmwat5fa7"
                target="_blank">
                See on the map</a>
            </button>
            <br/>

          </div>
          <div id="radnoVreme">
            <h2>Working time :</h2>

            <p>
              Monday - Fridayk . . . 11:00 - 21:00 <br/>
              <br/>
              Saturday . . . . . . . . . . . . 10:00 - 16:00
            </p>
          </div>
          <div id="dMreze">
            <h2>Social media :</h2>
            <p>Follow us on social media.</p>
            <button id="btnFace">
              <a href="https://www.facebook.com/berbernica.legat" target="_blank"><i
                  class="fab fa-facebook-square fa-2x"></i></a>
            </button>
            <button id="btnInsta">
              <a href="https://www.instagram.com/berbernica_legat_/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
            </button>
          </div>
          <div>
            <p id="copyright">Copyright &copy; 2020 - Berbernica Legat</p>
          </div>
        
        `
}
    
    $('#srb').on('click',function(){
        $('#btnGlavna').text(`${serbianLanguage.glavna}`);
        $('#btnONama').text(`${serbianLanguage.oNama}`);
        $('#btnCene').text(`${serbianLanguage.cene}`);
        $('#btnRez').text(`${serbianLanguage.rezervacija}`);
        $('#btnKontakt').text(`${serbianLanguage.kontakt}`);
        $('#navBar button').css('font-family','font');
        $('#navBar').css('padding','10px 3px');
        $('#slogan').html(`
        <img src="img/legat-logo.png" alt="" />
  
        <h2>${serbianLanguage.slogan}</h2>
        <div id="tekst">
          <h3>${serbianLanguage.bradaIFriz}</h3>
          <p>
            ${serbianLanguage.bradaIFrizP}
          </p>
        </div>
        `)
        // $('#navBar').css('padding','10px 3px');
        $('#oNamaTekst h1').html(`<h1>${serbianLanguage.oNamaH1}</h1>`);
        $('#oNamaTekst p').html(`<p>${serbianLanguage.oNamaP}</p>`);
        $('#oNamaTekst p').css('line-height', '24px');
        $('#boxKontakt').html(` 
        <h3>${serbianLanguage.kontaktH3}</h3>
        <p>${serbianLanguage.kontaktP}</p>
        <h4>${serbianLanguage.kontaktH4}</h4>
        <p>Cara Nikolaja 2-86. Beograd, Srbija</p>
        <button id="vidiNaMapi">
          <a href="https://www.google.com/maps/place/Cara+Nikolaja+II+86,+Beograd/@44.7980169,20.4830692,18.67z/data=!4m5!3m4!1s0x475a70779cd6ef27:0x117c4bc8ac219f3d!8m2!3d44.7980837!4d20.4836535"
            target="_blank">${serbianLanguage.vidiNaMapi}</a>
        </button>
        <h4>${serbianLanguage.radnoVreme}</h4>
        <p>${serbianLanguage.radnoVremePonPet}</p>
        <p>${serbianLanguage.radnoVremeSub}</p>
        <div id="kontaktBtn">
          <button id="rezBtn">${serbianLanguage.rezBtn}</button>
        </div>`);
        $('#boxKontakt h3,#boxKontakt h4, #boxKontakt p, #boxKontakt a, #rezBtn').css('font-family', 'font');
        $('#nasiRadovi h1').html(`<h1>${serbianLanguage.nasiRadoviH1}</h1>`);
        $('#nasiRadovi h4').html(`<h4>${serbianLanguage.nasiRadoviH4}</h4>`);
        $('#cene h1, #cene h2, #cene h4, #cene span').css('font-family', 'font');
        $('#cene').html(`${serbianLanguage.cenovnik}`);
        $('#cene span').css('float', 'right');
        $('#cene span').css('margin-top', '-15px');
        $('#zakazivanje h1').html(`${serbianLanguage.zakazivanjeH1} `);
        $('#dusan').html(`${serbianLanguage.dusan}`);
        $('#jovan').html(`${serbianLanguage.jovan}`);
        $('#izaberi-datum').html(`${serbianLanguage.izaberiDatum}`);
        $('#vrsta-usluge').html(`${serbianLanguage.vrstaUsluge}`);
        $('#time-label').html(`${serbianLanguage.timeLabel}`);
        $('#name-label').html(`${serbianLanguage.nameLabel}`);
        $('#phone-label').html(`${serbianLanguage.phoneLabel}`);
        $('#zakazivanje h1, #zakazivanje h3, #zakazivanje h4').css('font-family', 'font');
        $('#zakazi strong').html(`${serbianLanguage.btnZakazi}`);
        $('#zakazi strong').css('font-family', 'font');
        $('#usluga').html(`${serbianLanguage.usluge}`)
        $('#usluga option').css('font-family', 'font');
        $('#footer').html(`${serbianLanguage.footer}`);
        $('#izaberi-vreme').html(`${serbianLanguage.izaberiVreme}`);
        $('#napisi-ime').html(`${serbianLanguage.napisiIme}`);
        $('#broj-telefona').html(`${serbianLanguage.brojTel}`);
        $('#footer').html(`${serbianLanguage.footer}`);
        $('#footer, #footer h2, #footer p, #footer a').css('font-family','OSC');
    });
    $('#eng').on('click', function () {
        $('#btnGlavna').text(`${englishLanguage.glavna}`);
        $('#btnONama').text(`${englishLanguage.oNama}`);
        $('#btnCene').text(`${englishLanguage.cene}`);
        $('#btnRez').text(`${englishLanguage.rezervacija}`);
        $('#btnKontakt').text(`${englishLanguage.kontakt}`);
        $('#navBar button').css('font-family', 'OSC');
        // $('#navBar button').css('font-size','15px');
        $('#slogan').html(`
        <img src="img/legat-logo.png" alt="" />

        <h2 id="logoH2">${englishLanguage.slogan}</h2>
        <div id="tekst">
          <h3>${englishLanguage.bradaIFriz}</h3>
          <p>
            ${englishLanguage.bradaIFrizP}
          </p>
        </div>
        `)
         $('#navBar').css('padding','7px 3px');
        // $('#legat').css('font-size','16px');
        // $('#legat').css('letter-spacing','4px');
        // $('#tekst h3').css('margin','0px');
        // $('#tekst p').css('line-height','16px');
        // $('#logoH2').css('font-size','40px');
        $('#slogan h2, #slogan h4, #tekst h3, #tekst p').css('font-family', 'OSC');
        $('#oNamaTekst h1').html(`<h1>${englishLanguage.oNamaH1}</h1>`);
        $('#oNamaTekst p').html(` <p> ${englishLanguage.oNamaP}</p>`);
        $('#oNamaTekst h1').css('font-family', 'OSC');
        // $('#oNamaTekst h1').css('font-size','40px');
        $('#oNamaTekst p').css('font-family', 'OSC');
        // $('#oNamaTekst p').css('line-height','27px');
        $('#boxKontakt').html(` 
        <h3>${englishLanguage.kontaktH3}</h3>
        <p>${englishLanguage.kontaktP}</p>
        <h4>${englishLanguage.kontaktH4}</h4>
        <p>Cara Nikolaja 2-86. Beograd, Srbija</p>
        <button id="vidiNaMapi">
          <a href="https://www.google.com/maps/place/Cara+Nikolaja+II+86,+Beograd/@44.7980169,20.4830692,18.67z/data=!4m5!3m4!1s0x475a70779cd6ef27:0x117c4bc8ac219f3d!8m2!3d44.7980837!4d20.4836535"
            target="_blank">${englishLanguage.vidiNaMapi}</a>
        </button>
        <h4>${englishLanguage.radnoVreme}</h4>
        <p>${englishLanguage.radnoVremePonPet}</p>
        <p>${englishLanguage.radnoVremeSub}</p>
        <div id="kontaktBtn">
          <button id="rezBtn">${englishLanguage.rezBtn}</button>
        </div>`);
        $('#boxKontakt h3,#boxKontakt h4, #boxKontakt p, #boxKontakt a, #rezBtn').css('font-family','OSC');
        $('#boxKontakt h3,#boxKontakt h4, #boxKontakt p, #boxKontakt a, #rezBtn').css('line-height','95%');
        $('#nasiRadovi h1').html(`<h1>${englishLanguage.nasiRadoviH1}</h1>`);
        $('#nasiRadovi h4').html(`<h4>${englishLanguage.nasiRadoviH4}</h4>`);
        $('#nasiRadovi h1, #nasiRadovi h4').css('font-family', 'OSC');
        $('#nasiRadovi h1, #nasiRadovi h4').css('margin', '30px');
        $('#cene').html(`${englishLanguage.cenovnik}`);
        $('#cene h1, #cene h2, #cene h4, #cene span').css('font-family', 'OSC');
        $('#cene span').css('float', 'right');
        $('#cene span').css('margin-top', '-20px');
        $('#zakazivanje h1').html(`${englishLanguage.zakazivanjeH1} `);
        $('#dusan').html(`${englishLanguage.dusan}`);
        $('#jovan').html(`${englishLanguage.jovan}`);
        $('#izaberi-datum').html(`${englishLanguage.izaberiDatum}`);
        $('#vrsta-usluge').html(`${englishLanguage.vrstaUsluge}`);
        $('#time-label').html(`${englishLanguage.timeLabel}`);
        $('#name-label').html(`${englishLanguage.nameLabel}`);
        $('#phone-label').html(`${englishLanguage.phoneLabel}`);
        $('#zakazivanje h1, #zakazivanje h3, #zakazivanje h4').css('font-family', 'OSC');
        $('#zakazi strong').html(`${englishLanguage.btnZakazi}`);
        $('#zakazi strong').css('font-family', 'OSC');
        $('#usluga').html(`${englishLanguage.usluge}`)
        $('#usluga option').css('font-family','OSC');
        $('#izaberi-vreme').html(`${englishLanguage.izaberiVreme}`);
        $('#napisi-ime').html(`${englishLanguage.napisiIme}`);
        $('#broj-telefona').html(`${englishLanguage.brojTel}`);
        $('#footer').html(`${englishLanguage.footer}`);
        $('#footer, #footer h2, #footer p, #footer a').css('font-family','OSC');
    });
});
