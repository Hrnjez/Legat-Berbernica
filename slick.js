$(document).ready(function () {
 

      jQuery('.slider-for').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        autoplay: true, 
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        asNavFor: '.slider-nav',
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }]
      })
      
      jQuery('.slider-nav').slick({
        dots: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true
          }
        }]
      })
      
});