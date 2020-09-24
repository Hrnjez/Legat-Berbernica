$(document).ready(function () {

    const serbianLanguage = {
        glavna: 'Glavna',
        oNama: 'O nama',
        cene: 'Cene',
        rezervacija: 'Rezervacija',
        kontakt: 'Kontakt',
        logoTxt: 'Logo',
        slogan: 'Negujemo tradiciju dok pratimo novitete',
        bradaIFriz: 'Brada i Frizura',
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
        nasiRadoviH4: 'Neki od na{ih zadovoqnih klijenata'

      }
    
    const englishLanguage = {
        glavna: 'Home',
        oNama: 'About',
        cene: 'Prices',
        rezervacija: 'Reservation',
        kontakt: 'Contact',
        logoTxt: 'Logo',
        slogan: 'We nurture the tradition while following the newspapers',
        bradaIFriz: 'Beard and Hairstyle',
        bradaIFrizP: 'We believe in quality and strive to provide you with first-class service. The razor is our favorite tool, so shaving is our specialty.',
        oNamaH1 : 'About Us',
        oNamaP: 'Тhe barbershop “Legacy”  is located in one of the most beautiful parts of Vracar, in the heart of Belgrade.The “Legacy” is not an ordinary barbershop, it is a club where every gentleman can enjoy in the comfort of the interior, fine liquor  and the high quality services. We believe that every man should wear a hairstyle that suits his character, and lifestyle. Whether you want a classic ’50s hairstyle, a fade, with countless variations, or a superior rockabilly style, our barbers will be up to the task. While we respect the old school, we keep up with new trends.Aside from hairstyling, we are here to take care of your beard and mustache.  We belive in quality, аnd we take our  time to ensure you get the best haircut and shave possible. The razor is our favorite tool,therefore, shaving is our specialty.',
        kontaktH3: 'Contact',
        kontaktP: 'Visit us at our address',
        kontaktH4: 'Adress:',
        vidiNaMapi: 'See Map',
        radnoVreme: 'Working time',
        radnoVremePonPet: 'Monday - Friday ..11:00 - 21:00',
        radnoVremeSub: 'Saturday .............10:00 - 16:00',
        rezBtn: 'Reservation',
        nasiRadoviH1: 'Our Work',
        nasiRadoviH4: 'Some of our satisfied customers'

    }
    
    $('#srb').on('click',function(){
        $('#btnGlavna').text(`${serbianLanguage.glavna}`);
        $('#btnONama').text(`${serbianLanguage.oNama}`);
        $('#btnCene').text(`${serbianLanguage.cene}`);
        $('#btnRez').text(`${serbianLanguage.rezervacija}`);
        $('#btnKontakt').text(`${serbianLanguage.kontakt}`);
        $('#navBar button').css('font-family','font');
        $('#navBar button').css('font-size','16px');
        $('#slogan').html(`
        <img src="img/legat-logo.png" alt="" />
        <h4 id="legat">${serbianLanguage.logoTxt}</h4>
        <h2>${serbianLanguage.slogan}</h2>
        <div id="tekst">
          <h3>${serbianLanguage.bradaIFriz}</h3>
          <p>
            ${serbianLanguage.bradaIFrizP}
          </p>
        </div>
        `)
        $('#navBar').css('padding','10px 3px');
        $('#oNamaTekst h1').html(`<h1>${serbianLanguage.oNamaH1}</h1>`);
        $('#oNamaTekst p').html(`<p>${serbianLanguage.oNamaP}</p>`);
        $('#oNamaTekst p').css('line-height','24px');
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
        $('#nasiRadovi h1').html(`<h1>${serbianLanguage.nasiRadoviH1}</h1>`);
        $('#nasiRadovi h4').html(`<h4>${serbianLanguage.nasiRadoviH4}</h4>`);
       
    });
    $('#eng').on('click',function(){
        $('#btnGlavna').text(`${englishLanguage.glavna}`);
        $('#btnONama').text(`${englishLanguage.oNama}`);
        $('#btnCene').text(`${englishLanguage.cene}`);
        $('#btnRez').text(`${englishLanguage.rezervacija}`);
        $('#btnKontakt').text(`${englishLanguage.kontakt}`);
        $('#navBar button').css('font-family','OSC');
        $('#navBar button').css('font-size','15px');
        $('#slogan').html(`
        <img src="img/legat-logo.png" alt="" />
        <h4 id="legat">${englishLanguage.logoTxt}</h4>
        <h2 id="logoH2">${englishLanguage.slogan}</h2>
        <div id="tekst">
          <h3>${englishLanguage.bradaIFriz}</h3>
          <p>
            ${englishLanguage.bradaIFrizP}
          </p>
        </div>
        `)
        $('#navBar').css('padding','8px 3px');
        $('#legat').css('font-size','16px');
        $('#legat').css('letter-spacing','4px');
        $('#tekst h3').css('margin','0px');
        $('#tekst p').css('line-height','16px');
        $('#logoH2').css('font-size','40px');
        $('#slogan h2, #slogan h4, #tekst h3, #tekst p').css('font-family','OSC');
        $('#oNamaTekst h1').html(`<h1>${englishLanguage.oNamaH1}</h1>`);
        $('#oNamaTekst p').html(` <p> ${englishLanguage.oNamaP}</p>`);
        $('#oNamaTekst h1').css('font-family','OSC');
        $('#oNamaTekst h1').css('font-size','40px');
        $('#oNamaTekst p').css('font-family','OSC');
        $('#oNamaTekst p').css('line-height','27px');
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
        $('#boxKontakt h3,#boxKontakt h4, #boxKontakt p, #boxKontakt a, #rezBtn').css('line-height','17px');
        $('#nasiRadovi h1').html(`<h1>${englishLanguage.nasiRadoviH1}</h1>`);
        $('#nasiRadovi h4').html(`<h4>${englishLanguage.nasiRadoviH4}</h4>`);
        $('#nasiRadovi h1, #nasiRadovi h4').css('font-family','OSC');
        $('#nasiRadovi h1, #nasiRadovi h4').css('margin','30px');
    });
});