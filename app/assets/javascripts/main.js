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

// Body Div //

$(document).ready(function() {
	$('.mainContent').slideDown(700);
});

$(document).ready(function() {
	$('.mainContentImg').slideDown(700);
});

// Animate text //

$(document).ready(function() {
	$('.animateText').textillate({
		in: { effect: 'flipInX', delay:1.5},
	});
});

$(document).ready(function() {
	$('.line').hide().animate({width: 'toggle'}, 1000);
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

// Img //

$(document).ready(function(){
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
	})
});
