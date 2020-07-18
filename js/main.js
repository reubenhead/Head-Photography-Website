AOS.init();

function showArrow() {
    var arrow = document.querySelector(".arrow");
    if (arrow.style.visibility === "visible") {
      arrow.style.visibility = "hidden";
    }
    else {
      arrow.style.visibility = "visible";
    }
  }

$('.social-btn').on({
    'click': function(){
        $(".arrow").fadeOut(5000);
        $(".arrow").show();
    }
});

function goToPortfolio(anchor) {
  var loc = document.location.toString().split('#')[0];
  document.location = loc + '#' + anchor;
  return false;
}

$('.home-text1').hover(function() {
    $('.home-text-2').css('display', 'block');
}, function() {
    $('.home-text-2').css('display', 'none');
});


$(function() {
    $('body').removeClass('fade-out');
});

function myFunction(element) {
  var imgSource = element.src;
  $("#myModal .modal-dialog .modal-body img").attr("src", imgSource);
}


(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

(function($) {
	
	'use strict';
	
	var $slides = $('[data-slides]');
	var images = $slides.data('slides');
	var count = images.length;
	var slideshow = function() {
		$slides
			.css('background-image', 'url("' + images[Math.floor(Math.random() * count)] + '")')
			.show(0, function() {
				setTimeout(slideshow, 8000);
			});
	};
	
	slideshow();
	
}(jQuery));