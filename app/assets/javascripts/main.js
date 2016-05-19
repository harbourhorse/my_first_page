// toggle menu //

$(document).ready(function() {
    $('.navLink1').hover(function(){
    	$(this).find('.dropDownMenu li').stop().slideToggle(450);
    })
});

// Sticky Navbar //

$(document).ready(function() {
	var navOffset = $('.navMenu').offset().top;
	
	$('.navMenu').wrap('<div class="navHeight"></div>');
	$('.navHeight').height($('.navMenu').outerHeight);

	$(window).scroll(function() {
	var scrollPos = $(window).scrollTop();

	if (scrollPos >= navOffset) {
		$('.navMenu').addClass('fixed');
	} else {
		$('.navMenu').removeClass('fixed');
	}
})
});


// Clock //

function timer() {

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

setTimeout('timer()', 1000);

};

// Copyright //

function copyrightDate() {

var today = new Date();
var year = today.getFullYear();

document.getElementById('copyright').innerHTML = '<p>Copyright © Konrad Slazyk ' + year + '</p>' ;
};
