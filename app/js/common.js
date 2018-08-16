$(function() {

	$('.main-slider').slick({
		autoplay: true,
		arrows: false,
		draggable: false,
		infinite: true,
		fade: true,
		cssEase: 'linear',
		autoplaySpeed: 5000,
	});

	let $menu = $(".navigation");

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
				$menu.removeClass("default").addClass("fixed");
		} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
				$menu.removeClass("fixed").addClass("default");
		}
	});

	var navMain = $(".navbar-collapse"); 
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
	
	$("#menu").on("click","a", function (event) {
		event.preventDefault();

		let id  = $(this).attr('href'),

		top = $(id).offset().top;

		$('body,html').animate({scrollTop: top - 100}, 1500);
	});

	$("#product").on("click","a", function (event) {
		event.preventDefault();

		let id  = $(this).attr('href'),

		top = $(id).offset().top;

		$('body,html').animate({scrollTop: top - 20}, 1500);
	});

	$('#form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			tel: {
				required: true,
				minlength: 11
			}
		},
		messages: {
			name: {
				required: "Поле обязательно к заполнению",
				minlength: "Введите не менее 2-х символов в поле 'Имя'"
			},
			tel: {
				required: "Поле обязательно к заполнению",
				minlength: "формат телефона X XXX XX XX XX" 
			}
		}
	});
});

var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
	if (isScrolling == false) {
		window.requestAnimationFrame(function() {
			scrolling(e);
			isScrolling = false;
		});
	}
	isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

let imgProduct = document.querySelector("#vertical");
let imgProduct2 = document.querySelector("#sloping");

function scrolling(e) {
	if (isPartiallyVisible(imgProduct)) {
		imgProduct.classList.remove("fadeInRight");
		imgProduct.classList.add("fadeOutRight");
	}

	if (isFullyVisible(imgProduct)) {
		imgProduct.classList.add("fadeInRight");
		imgProduct.classList.remove("fadeOutRight");
	}
 
	if (isPartiallyVisible(imgProduct2)) {
		imgProduct2.classList.remove("fadeInRight");
		imgProduct2.classList.add("fadeOutRight");
	}

	if (isFullyVisible(imgProduct2)) {
		imgProduct2.classList.add("fadeInRight");
		imgProduct2.classList.remove("fadeOutRight");
	}
}

function isFullyVisible(el) {
	let elementBoundary = el.getBoundingClientRect();

	let top = elementBoundary.top;
	let bottom = elementBoundary.bottom;

	return ((top >= 0) && (bottom <= window.innerHeight));
}

function isPartiallyVisible(el) {
	let elementBoundary = el.getBoundingClientRect();

	let top = elementBoundary.top;
	let bottom = elementBoundary.bottom;
	let height = elementBoundary.height;

	return ((top + height <= 0) || (top + height >= window.innerHeight));
}