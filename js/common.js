
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});
  

 // Initialize the map
 var map = L.map('map').setView([19.0760, 72.8777], 13); // Mumbai coordinates

 // Add a tile layer (OpenStreetMap)
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Add a marker to the map
 L.marker([19.0760, 72.8777]).addTo(map) // Mumbai coordinates
   .bindPopup('Mumbai, India');

  
   var mainSlider = new Swiper(".mySwiper2", {
    // parallax: true,
    speed: 1200,
    effect: 'slide',
      direction: "vertical",
      autoplay: true,
    navigation: {
      nextEl: '.upk-button-next',
      prevEl: '.upk-button-prev',
    },
      pagination: {
           el: '.swiper-pagination',
           clickable: true,
           renderBullet: function(index, className) {
               return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="3"></circle></svg></span>';
           },
       },
    });

    // testominal
    $(document).ready(function(){
      $(".testimonial .indicators li").click(function(){
        var i = $(this).index();
        var targetElement = $(".testimonial .tabs li");
        targetElement.eq(i).addClass('active');
        targetElement.not(targetElement[i]).removeClass('active');
                });
                $(".testimonial .tabs li").click(function(){
                    var targetElement = $(".testimonial .tabs li");
                    targetElement.addClass('active');
                    targetElement.not($(this)).removeClass('active');
                });
            });
    $(document).ready(function(){
        $(".slider .swiper-pagination span").each(function(i){
            $(this).text(i+1).prepend("0");
        });
    });


    // our menu
    const buttons = document.querySelectorAll('.button');
const menus = document.querySelectorAll('.menu');

const highlight = document.createElement('span');
document.body.appendChild(highlight);
highlight.classList.add('highlight');

// Set initial dimensions and position of 'highlight' based on activeButton coords 
function initialHightlightLocation() {
  const activeButton = document.querySelector('.button--is-active');
  const activeButtonCoords = activeButton.getBoundingClientRect();

  const initialCoords = {
    width: activeButtonCoords.width,
    height: activeButtonCoords.height,
    left: activeButtonCoords.left + window.scrollX,
    top: activeButtonCoords.top + window.scrollY
  }

  highlight.style.width = `${initialCoords.width}px`;
  highlight.style.height = `${initialCoords.height}px`;
  highlight.style.transform = `translate(${initialCoords.left}px, ${initialCoords.top}px)`;
}

function handleClick(e) {
  e.preventDefault();

  buttons.forEach(button => button.classList.remove('button--is-active'));
  this.classList.add('button--is-active');

  // Set current dimensions and position of 'highlight' based on the clicked button 
  const buttonCoords = this.getBoundingClientRect();
  const coords = {
    width: buttonCoords.width,
    height: buttonCoords.height,
    left: buttonCoords.left + window.scrollX,
    top: buttonCoords.top + window.scrollY
  }
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

  // Show the menu associated to the clicked button
  const targetMenu = document.querySelector(`#${this.dataset.target}`);
  menus.forEach(menu => {
    menu.classList.remove('menu--is-visible');
    targetMenu.classList.add('menu--is-visible');
  })
}

window.addEventListener('load', initialHightlightLocation);
window.addEventListener('resize', initialHightlightLocation);
buttons.forEach(button => button.addEventListener('click', handleClick));