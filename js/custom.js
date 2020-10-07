/*
Template Name: Cake & Bake
Author: Ingrid Kuhn
Author URI: themeforest/user/ingridk
Version: 1.0
*/

	//----------------------------------- Document ready -----------------------------------//
	$(document).ready(function () {
		
		"use strict";
	    		
  
		//Scrolling feature 
		$('.page-scroll a').on('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

        //functions on window over than 1200px
			if ($(window).width() > 1200) {				
				$(".navbar .dropdown").on({
					mouseenter: function () {
					$(this).find('.dropdown-menu').first().stop(true, true).delay(50).slideDown();

					},  
					mouseleave: function () {
					$(this).find('.dropdown-menu').first().stop(true, true).delay(100).fadeOut();
					}
				});									
			}	


		//Owl-carousels	
		$("#owl-services,#owl-posts").owlCarousel({
			nav: true,
			margin: 10,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
			dots: true,
			loop: true,
			autoplay: false,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				991: {
					items: 3,
				}
			}
		});
		
		$('#owl-testimonial').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: true,
			nav: false,
			autoplayHoverPause: true,
			dots: true,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				991: {
					items: 2,
				},

			}
		});
		
		$("#owl-team").owlCarousel({
			nav: true,
			navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
			dots: true,
			margin: 60,
			loop: true,
			autoplay: false,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1200: {
					items: 3,
				},

			}
		});

  
		//back to top button
		$(".back-to-top").on('click', function ()  {
				$('.content-wrapper').animate({
						scrollTop: $("#content").offset().top - 0
					},
		'slow');
		});
					
		
	}); // end document ready


	//----------------------------------- Window load function -----------------------------------//

	$(window).on('load', function () {
	"use strict";


		// Page Preloader 	
		$("#preloader").fadeOut("slow");
		
		
		//Gallery Isotope 
		var $container = $('#gallery-isotope');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
				layoutMode: 'masonry'
			}


		});
		$(window).smartresize(function () {
			$container.isotope({
				columnWidth: '.col-sm-3'
			});
		});
		
	   // Magnific Popup				 
			$('.lightbox').magnificPopup({
				delegate: 'a', // child items selector, by clicking on it popup will open
				type: 'image',
				overflowY:'scroll',
				titleSrc: 'title',
				titleSrc: function(item) {
				return '<a href="' + item.el.attr('href') + '">' + item.el.attr('title') + '</a>';
				},

				callbacks: {open: function() {$('.fixed-top').css('margin-right', '17px');},close: function() {$('.fixed-top').css('margin-right', '0px');}}
			});	

		
		//Gallery Nav Filter
		$('.cat a').on('click', function () {
			$('.cat .active').removeClass('active');
			$(this).addClass('active');

			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			return false;
		});
		
	

	}); // end window load function
