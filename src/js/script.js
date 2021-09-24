/*jshint esversion: 6 */

const 	hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		closeElem = document.querySelector('.menu__close'),
		menuOverlay = document.querySelector('.menu__overlay'),
		contactsOverlay = document.querySelector('.contacts__btn');

hamburger.addEventListener('click', () => {
		menu.classList.add('active');
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
			$('#consultation, #order').fadeOut();
			$('.overlay, #thaks').fadeIn('slow');
			$('form').trigger('reset');
		});
		return false;
	});

function checkParams() {
    var name = $('#name').val();
    var email = $('#email').val();
    var textarea = $('#text').val();
     
    if(name.length >= 2 && email.length >= 5 && textarea.length >= 7) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}

