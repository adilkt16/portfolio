//Lines of code Till 80

//From here for navbar (Line no : 1 - 20)

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
  
hamburger.addEventListener("click", mobileMenu);
  
function mobileMenu() {
    hamburger.classList.toggle("activated_menu");
    navMenu.classList.toggle("activated_menu");
    if (navMenu.classList.contains("activated_menu")) {
      $('header').css('height', '100%');
    } else {
      $('header').css('height', '');
    }
}

$('.nav-link').click(function() {
    $('.activated_menu').removeClass('activated_menu');
});



  
//From here for testimonial-navigation [25 - 60]

const swiperEl = document.querySelector('swiper-container')
        
            const params = {
              injectStyles: [`
              .swiper-pagination-bullet {
                width: 30px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                font-size: 16px;
                color: #000;
                opacity: 1;
                background: rgba(0, 0, 0, 0.2);
              }
        
              .swiper-pagination-bullet-active {
                color: #fff;
                background: #007aff;
              }
              `],
              pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (index + 1) + "</span>";
                },
              },
            }
        
            Object.assign(swiperEl, params)
        
            swiperEl.initialize();


//From here for education/skill/experience working [60 - 75 ]

// Add click event listener to menu nav items
$('.each-nav-item').click(function() {
  // Remove active class from all menu nav items
  $('.each-nav-item').removeClass('active');
  // Add active class to clicked menu nav item
  $(this).addClass('active');
  // Get the data-menu attribute value of clicked menu nav item
  var menu = $(this).attr('data-menu');
  // Hide all menu lists
  $('.each-list').hide();
  // Show the menu list with the matching data-menu attribute value
  $('.each-list[data-menu="' + menu + '"]').show();
});



//ENDS HERE