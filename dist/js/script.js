/*jshint esversion: 6 */

const 	hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		closeElem = document.querySelector('.menu__close'),
		menuOverlay = document.querySelector('.menu__overlay'),
		checkbox = document.querySelector('[type="checkbox"]');

hamburger.addEventListener('click', () => {
		menu.classList.add('active');
	});

closeElem.addEventListener('click', () => {
		menu.classList.remove('active');
	});
menuOverlay.addEventListener('click', () => {
	menu.classList.remove('active');
});


const 	counters  = document.querySelectorAll('.skills__ratings-counter'),
	  	lines = document.querySelectorAll('.skills__ratings-line span');
counters.forEach( (item, i) => {
	lines[i].style.width = item.innerHTML;
});


$(document).ready(function(){
	$('form').submit(function(e)  {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");

			
			$('form').trigger('reset');
		});
		return false;
	});
});

$('[data-modal="submit"]').on('click', function() {
	$('#close').fadeIn('slow');
});
$('.contacts__close, .contacts__overlay').on('click', function() {
	$('#close').fadeOut('slow');
});





function checkParams() {
    let name = $('#name').val(),
    	email = $('#email').val(),
    	textarea = $('#text').val(),
		checkboxTrue = checkbox.checked;

     
    if(name.length >= 2 && email.length >= 12 && textarea.length >= 7)  {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
} 


