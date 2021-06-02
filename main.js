$(document).ready(function() {	
	
	// Random Alert shown for the fun of it
	function randomAlert() {
		var min = 5,
			max = 20;
		var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 20
		// post time in a <span> tag in the Alert
		$("#time").html('Next alert in ' + rand + ' seconds');
		$('#timed-alert').fadeIn(500).delay(3000).fadeOut(500);
		setTimeout(randomAlert, rand * 1000);
	};
	randomAlert();
});

/* Use 'data-target=' to show link text in Alert popup */
$('.btn').click(function(event) {
    event.preventDefault();
    var target = $(this).data('target');
	// console.log('#'+target);
	$('#click-alert').html('data-target= ' + target).fadeIn(50).delay(3000).fadeOut(1000);
	
});


/* Carousel cards */
(function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    
	// append each Card to one before it
    $('.carousel .carousel-item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
      }
      else {
      	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
    });
    
})(jQuery);

