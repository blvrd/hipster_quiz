// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
var currentBackground = 0;
var backgrounds = [];
backgrounds[0] = 'hipster1.jpg';
backgrounds[1] = 'hipster2.jpg';
backgrounds[2] = 'hipster3.jpg';
backgrounds[3] = 'hipster4.jpg';
backgrounds[4] = 'hipster5.jpg';
backgrounds[5] = 'hipster6.jpg';
backgrounds[6] = 'hipster7.jpg';
backgrounds[7] = 'hipster8.jpg';

function changeBackground() {
    currentBackground++;
    if(currentBackground > 7) currentBackground = 0;
    //$('#container').animate({opacity: 0}, 'slow', function() {
      //      $(this).css({'background-image' : "url('" + backgrounds[currentBackground]"')"}).animate({opacity: 1});
    //}); 
   $('#container').fadeOut(1000,function() {
       $('#container').css({'background-image' : "url('/assets/" + backgrounds[currentBackground] + "')"});
       $('#container').fadeIn(1000);
   });
    
    
    setTimeout(changeBackground, 8000);
}

$(document).ready(function() {
    setTimeout(changeBackground, 8000);
    $('input[type="submit"]').click(function() {
	$(this).parent().parent().animate({
            left: '-50%'
	}, 500, function() {
            $(this).parent().parent().css('left', '150%');
            //$(this).parent().parent().appendTo('#container');
	});
	
	$(this).parent().parent().next().animate({
            left: '50%'
	}, 500);
    });
    $('input[type="submit"]').last().click(function() {
	$('progress').css('display', 'block');
	$('.status').css('display', 'block');
    });
});
