function toggleMenu() {
  $('.mainMenu__link--dropdown').hover(function(){
      $('.dropDownMenu').toggleClass('dropDownMenu--visible');
    });
};

function stickyNavbar() {
  var navOffset = $('.navMenu').offset().top;

  $(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    $('body').toggleClass('navbar-fixed', scrollPos >= navOffset);
  });
};

function activeSite() {
  $('.mainMenu__link, .dropDownMenu__item').each(function() {
      if ($(this).prop('href') == window.location.href) {
        $(this).addClass('current');
      };
  });
};

function slideDownContent() {
  $('.mainContent, .mainContentImg').hide().slideDown(700);
};

function animateText() {
  $('.animateText').textillate({
    in: { effect: 'flipInX', delay:1.5},
  });
};

function animateLine() {
  $('.line').hide().animate({width: 'toggle'}, 1000);
};

function footerClock() {
  var clock = new Date();
  var hour = clock.getHours();
  if (hour < 10) { hour = '0' + hour };
  var minute = clock.getMinutes();
  if (minute < 10) { minute = '0' + minute };
  var second = clock.getSeconds();
  if (second < 10) { second = '0' + second };

  $('#clock').html(hour + ':' + minute + ':' + second);

};

function copyrightDate() {
  var today = new Date();
  var year = today.getFullYear();

  $('#copyright').html('<p>Copyright © Konrad Slazyk ' + year + '</p>');
};

function imgLightbox() {
  $('.lightbox').click(function(event){
    event.preventDefault();
    var src = $(event.target).attr('src');
    $('.backdrop, .box').addClass('visible');
    $('.box img').attr('src', src);
  });

  $('.backdrop').click(function(event){
    event.preventDefault();
    $('.backdrop, .box').removeClass('visible');
  });
};

$(document).ready(function() {
  toggleMenu();
  stickyNavbar();
  slideDownContent();
  animateText();
  animateLine();
  setInterval(footerClock, 1000);
  copyrightDate();
  imgLightbox();
  activeSite();
});
