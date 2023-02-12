window.addEventListener('load', function(){
    new Glider(document.querySelector('.tarjetas-carrusel'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.indicadores',
        arrows: {
          prev: '.anterior',
          next: '.siguiente'
        },
        responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 900,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: '1',
              slidesToScroll: '1',
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    })
  })