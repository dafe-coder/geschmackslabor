document.addEventListener('DOMContentLoaded', () => {
	var rellax = new Rellax('.rellax')

	const swiper = new Swiper('.swiper-main', {
		loop: true,
		speed: 1500,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 4000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-main-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return `<span class="${className} main-pag-item"><span>${++index}</span></span>`
			},
		},
	})
	const swiperReviews = new Swiper('.swiper-reviews', {
		loop: true,
		speed: 1000,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
})
