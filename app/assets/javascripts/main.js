// toggle menu //

$(document).ready(function() {
    $('.navLink1').hover(function(){
    	$(this).find('.dropDownMenu li').stop().slideToggle(450);
    })
});
