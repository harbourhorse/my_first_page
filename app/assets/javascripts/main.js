function toggleMenu() {
	$('.navLink1').hover(function(){
    	$(this).find('.dropDownMenu li').stop().slideToggle(450);
    });
};

function stickyNavbar() {
	var navOffset = $('.navMenu').offset().top;

	$(window).scroll(function() {
	var scrollPos = $(window).scrollTop();

		if (scrollPos >= navOffset) {
			$('body').addClass('navbar-fixed');
		} else {
			$('body').removeClass('navbar-fixed');
		};
	});
};

function activeSite() {
	$('.navMenu a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('current');
  	};
	});
};

function slideDownMenu() {
	$('.mainContent, .mainContentImg').slideDown(700);
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
		if (hour < 10)
			hour = '0' + hour;
		var minute = clock.getMinutes();
			if (minute < 10)
				minute = '0' + minute;
		var second = clock.getSeconds();
			if (second < 10)
				second = '0' + second;

document.getElementById('clock').innerHTML = hour + ':' + minute + ':' + second;

setTimeout('footerClock()', 1000);
};

function copyrightDate() {
	var today = new Date();
	var year = today.getFullYear();

document.getElementById('copyright').innerHTML = '<p>Copyright © Konrad Slazyk ' + year + '</p>' ;
};

function imgLightbox() {
	$('.lightbox').click(function(event){
		event.preventDefault();
		var src = $(event.target).attr('src');
			$('.backdrop, .box').animate({'opacity':'.50'}, 300, 'linear');
			$('.box').animate({'opacity':'1.00'}, 200, 'linear');
			$('.backdrop, .box').css('display', 'block');
			$('.box').html('<img src="' + src + '" />');
	});
	$('.backdrop').click(function(){
		$('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function(){
			$('.backdrop, .box').css('display', 'none');
		});
	});
};


$(document).ready(function() {
	toggleMenu();
	stickyNavbar();
	slideDownMenu();
	animateText();
	animateLine();
	footerClock();
	copyrightDate();
	imgLightbox();
	activeSite();
});