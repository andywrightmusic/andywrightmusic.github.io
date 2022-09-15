/*jshint jquery:true */

$(document).ready(function($) {
	"use strict";

	/** Load custom fonts **/
	$(function() {
    	var fonts = 'https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900|Poppins:300,400,500,600,700';
    	if (document.createStyleSheet) document.createStyleSheet(fonts);
    	else $("head").append($("<link rel='stylesheet' href='"+ fonts +"' type='text/css' media='screen' />"));
	});

	/** ** /

	/* global google: false */
	/*jshint -W018 */

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('.iso-call');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				$container.trigger('resize');
				$container.isotope({
					filter:'*',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});

				setTimeout(Resize, 1500);
			});
		} catch(err) {
		}

		winDow.on('resize', function(){
			var selector = $filter.find('a.active:not(.responsive-link)').attr('data-filter');

			try {
				/* $container.isotope({ 
					filter	: selector,
					layoutMode:'masonry',
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				}); */
				$container.imagesLoaded( function(){
					$container.trigger('resize');
					$container.isotope({
						filter:selector,
						layoutMode:'masonry',
						animationOptions:{
							duration:750,
							easing:'linear'
						}
					});

					// setTimeout(Resize, 1500);
				});
			} catch(err) {
			}
			return false;
		});
		
		// Isotope Filter 
		$filter.find('a:not(.responsive-link)').on('click', function(){
			var selector = $(this).attr('data-filter');

			try {
				/* $container.isotope({ 
					filter	: selector,
					layoutMode:'masonry',
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				}); */
				$container.imagesLoaded( function(){
					$container.trigger('resize');
					$container.isotope({
						filter:selector,
						layoutMode:'masonry',
						animationOptions:{
							duration:750,
							easing:'linear'
						}
					});

					// setTimeout(Resize, 1500);
				});
			} catch(err) {

			}
			return false;
		});


	var filterItemA	= $('.filter li a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});

	/* ---------------------------------------------------------------------- */
	/*	filter portfolio toggle
	/* ---------------------------------------------------------------------- */

	var togButton = $('a.filter-toggle'),
		filterList = $('ul.filter');

	togButton.on('click', function(event){
		event.preventDefault();
		filterList.slideToggle();
	});

	/* ---------------------------------------------------------------------- */
	/*	magnific-popup
	/* ---------------------------------------------------------------------- */

	try {
		// Example with multiple objects
		$('.zoom').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	menu responsive
	/* ---------------------------------------------------------------------- */
	var menuClick = $('a.elemadded'),
		navbarVertical = $('.nav-menu');
		
	menuClick.on('click', function(e){
		e.preventDefault();

		if( navbarVertical.hasClass('active') ){
			navbarVertical.slideUp(300).removeClass('active');
		} else {
			navbarVertical.slideDown(300).addClass('active');
		}
	});

	/* winDow.on('resize', function(){
		if ( winDow.width() > 991 ) {
			navbarVertical.slideDown(300).removeClass('active');
		} else {
			navbarVertical.slideUp(300).removeClass('active');
		}
	}); */
	var windowWidth = $(window).width();
	winDow.on('resize', function(){
		if ( winDow.width() > 991 ) {
			if(!navbarVertical.hasClass('active')) {
				navbarVertical.slideDown(300).addClass('active');
			} 
		}  else {
			if(windowWidth != $(window).width()) {
				 windowWidth = $(window).width();
				navbarVertical.slideUp(300).removeClass('active');
			}
		} 
	});

	/* ---------------------------------------------------------------------- */
	/*	Header animate after scroll
	/* ---------------------------------------------------------------------- */

	(function() {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 40;
			document.querySelector( 'header, a.go-top' );
		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 100 );
				}
			}, false );
		}
		
		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				$( 'header' ).addClass('active');
				$( 'a.go-top' ).addClass('active');
			}
			else {
				$( 'header' ).removeClass('active');
				$( 'a.go-top' ).removeClass('active');
			}
			didScroll = false;
		}
		
		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}
		
		init();
		
	})();

});

function Resize() {
	$(window).trigger('resize');
}
	
/* ---------------------------------------------------------------------- */
/*	works carousel
/* ---------------------------------------------------------------------- */

$(window).on('load', function() {
	var winDowHeight = $(window).outerHeight();
	$('header').css('height', winDowHeight);
});
$(window).on('resize', function() {
	var winDowHeight = $(window).outerHeight();
	$('header').css('height', winDowHeight);
});