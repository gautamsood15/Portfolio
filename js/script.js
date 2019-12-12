$(document).ready(function() {

	$('#slides').superslides({     /* superslide script */
		animation: 'fade',
		play: 5000,
		pagination: false
	});



	var typed = new Typed(".typed", {                    
		strings: ["Software Engineer.", "Python Developer.", "Student."],
		typeSpeed: 70,               
		loop: true,                                 /* Typed script */
		startDelay: 1000,
		showCursor: false
	});



	$('.owl-carousel').owlCarousel({                  /* owl carousel script */
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }
	});


	$('.chart').easyPieChart({
    	       


    });                                                              

});