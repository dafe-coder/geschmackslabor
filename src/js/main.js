document.addEventListener('DOMContentLoaded', () => {
	// Rellax Main slider
	if (document.querySelector('.rellax')) {
		var rellax = new Rellax('.rellax')
	}

	// Hover Items
	try {
		const listHoverItems = document.querySelectorAll('.animate-list a')

		listHoverItems.forEach((item, index) => {
			const itemContent = item.querySelector('.animate-item-content')
			const itemContentHeight = itemContent.scrollHeight

			item.addEventListener('mouseover', e => {
				listHoverItems.forEach((itemA, indexA) => {
					if (index !== indexA) {
						itemA.querySelector('img').style.filter = 'grayscale(1)'
					}
				})
				item.style.marginTop = `-${itemContentHeight + 20}px`
				console.log(itemContentHeight)
				itemContent.style.maxHeight = `${itemContentHeight + 20}px`
				itemContent.style.paddingTop = '20px'
			})
			item.addEventListener('mouseleave', () => {
				listHoverItems.forEach(itemA => {
					itemA.querySelector('img').style.filter = 'grayscale(0)'
				})
				item.style.marginTop = 0
				itemContent.style.maxHeight = 0
				itemContent.style.paddingTop = 0
			})
		})
	} catch (error) {}
	// Hover items end

	// Slider Main
	if (document.querySelector('.swiper-main')) {
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
	}
	// Slider Main end

	// Slider Reviews
	if (document.querySelector('.swiper-reviews')) {
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
	}
	// Slider Reviews

	// Tabs

	const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
		const header = document.querySelector(headerSelector),
			tab = document.querySelectorAll(tabSelector),
			content = document.querySelectorAll(contentSelector)
		let showTimer = null
		let localShowTimer = null
		let hideTimer = null

		function hideTabContent() {
			clearTimeout(hideTimer)
			content.forEach(item => {
				item.classList.remove('animate-fade')
				item.classList.add('animate-fadeOut')
				hideTimer = setTimeout(() => {
					item.classList.add('hidden')
				}, 300)
			})
			tab.forEach(item => {
				item.classList.remove(activeClass)
			})
		}

		function showTabContent(i = 0) {
			clearTimeout(localShowTimer)
			content[i].classList.remove('animate-fadeOut')
			content[i].classList.remove('hidden')
			localShowTimer = setTimeout(() => {
				content[i].classList.add('animate-fade')
			}, 10)
			tab[i].classList.add(activeClass)
		}

		hideTabContent()
		setTimeout(() => {
			showTabContent()
		}, 310)

		header.addEventListener('click', e => {
			const target = e.target
			e.preventDefault()
			if (
				target &&
				(target.classList.contains(tabSelector.replace(/\./, '')) ||
					target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
			) {
				tab.forEach((item, i) => {
					if (
						target == item ||
						(target.parentNode == item && !item.classList.contains(activeClass))
					) {
						clearTimeout(showTimer)
						hideTabContent()
						showTimer = setTimeout(() => {
							showTabContent(i)
						}, 310)
					}
				})
			}
		})
	}
	if (document.querySelector('.tab-nav')) {
		tabs('.tab-nav', '.tab-link', '.tab-content', 'tab-active')
	}
	// Tabs end

	// Menu
	const hamburger = document.getElementById('menu-hamburger')
	const headerMobile = document.querySelector('.header-mobile')
	let isAnimating = false

	hamburger.addEventListener('click', () => {
		if (isAnimating) return
		isAnimating = true

		if (hamburger.classList.contains('tham-active')) {
			document.querySelector('body').style.overflow = 'visible'
			hamburger.classList.remove('tham-active')
			headerMobile.classList.remove('animate-fade')
			headerMobile.classList.add('animate-fadeOut')
			setTimeout(() => {
				headerMobile.classList.add('max-lg:hidden')
				isAnimating = false
			}, 300)
		} else {
			document.querySelector('body').style.overflow = 'hidden'
			hamburger.classList.add('tham-active')
			headerMobile.classList.remove('max-lg:hidden')
			headerMobile.classList.remove('animate-fadeOut')
			setTimeout(() => {
				headerMobile.classList.add('animate-fade')
				isAnimating = false
			}, 10)
		}
	})

	const hideMenuBody = () => {
		menuDropdown.forEach(item => {
			item.classList.remove('expand')
		})
		menuBody.forEach(item => {
			item.classList.add('hidden')
			item.classList.remove('animate-fade')
			item.classList.remove('animate-fadeOut')
		})
	}

	const animatedMenuDropdown = document.querySelectorAll('.animated-item')
	const menuDropdown = document.querySelectorAll('.menu-dropdown')
	const menuBody = document.querySelectorAll('.menu-dropdown-body')
	const bgItem = document.querySelector('.bg-item')

	const initMenuAnimate = () => {
		animatedMenuDropdown.forEach(item => {
			item.addEventListener('mouseenter', e => {
				const rect = item.getBoundingClientRect()
				const navRect = item.parentElement.getBoundingClientRect()
				bgItem.style.transform = `translateX(${rect.left - navRect.left}px)`
				bgItem.style.width = `${rect.width}px`
				bgItem.style.opacity = 1
			})
			item.addEventListener('mouseleave', e => {
				bgItem.style.opacity = 0
			})
		})
	}
	initMenuAnimate()

	let hasReached1024 = window.matchMedia(
		'only screen and (max-width: 1024px)'
	).matches

	let isAnimatingMobile = false

	function handleMobileClick(e) {
		if (isAnimatingMobile) return
		isAnimatingMobile = true

		e.preventDefault()
		const item = e.currentTarget
		const menuDropdownBody = item
			.closest('li')
			.querySelector('.menu-dropdown-body')
		const isHidden = menuDropdownBody.classList.contains('hidden')

		if (item.classList.contains('expand')) {
			item.classList.remove('expand')
			menuDropdownBody.style.maxHeight = menuDropdownBody.scrollHeight + 'px'
			menuDropdownBody.classList.remove('animate-fade')
			menuDropdownBody.classList.add('animate-fadeOut')
			setTimeout(() => {
				menuDropdownBody.style.maxHeight = '0'
				setTimeout(() => {
					menuDropdownBody.classList.add('hidden')
					isAnimatingMobile = false
				}, 300)
			}, 10)
		} else {
			item.classList.add('expand')
			if (isHidden) {
				menuDropdownBody.classList.remove('hidden')
			}
			menuDropdownBody.style.maxHeight = '0'
			const heightMenuDropdownBody = menuDropdownBody.scrollHeight + 'px'
			menuDropdownBody.style.maxHeight = heightMenuDropdownBody
			menuDropdownBody.classList.remove('hidden')
			menuDropdownBody.classList.remove('animate-fadeOut')
			menuDropdownBody.classList.add('animate-fade')
			setTimeout(() => {
				isAnimatingMobile = false
			}, 300)
		}
	}

	let hideTimeout
	let showTimeout

	function handleDesktopMouseEnter(e) {
		e.preventDefault()
		hideMenuBody()
		const item = e.currentTarget
		const menuDropdownBody = item
			.closest('li')
			.querySelector('.menu-dropdown-body')

		clearTimeout(hideTimeout)
		menuDropdownBody.classList.remove('animate-fadeOut')
		menuDropdownBody.classList.remove('hidden')

		item.classList.add('expand')
		showTimeout = setTimeout(() => {
			menuDropdownBody.classList.add('animate-fade')
		}, 10)
	}

	function handleDesktopMouseLeave(e) {
		e.preventDefault()
		const item = e.currentTarget
		const menuDropdownBody = item
			.closest('li')
			.querySelector('.menu-dropdown-body')

		clearTimeout(showTimeout)
		menuDropdownBody.classList.remove('animate-fade')

		item.classList.remove('expand')
		menuDropdownBody.classList.add('animate-fadeOut')
		hideTimeout = setTimeout(() => {
			menuDropdownBody.classList.add('hidden')
		}, 300)
	}

	function removeEventListeners() {
		menuDropdown.forEach(item => {
			item.removeEventListener('click', handleMobileClick)
			item.removeEventListener('mouseenter', handleDesktopMouseEnter)
			item.removeEventListener('mouseleave', handleDesktopMouseLeave)
		})
	}

	function initMobileMenu() {
		removeEventListeners()
		menuDropdown.forEach(item => {
			const menuDropdownBody = item
				.closest('li')
				.querySelector('.menu-dropdown-body')
			if (menuDropdownBody) {
				menuDropdownBody.classList.add('hidden')
				menuDropdownBody.style.maxHeight = 0
				item.addEventListener('click', handleMobileClick)
			}
		})
	}

	function initDesktopMenu() {
		headerMobile.classList.remove('animate-fadeOut')
		removeEventListeners()
		menuDropdown.forEach(item => {
			const menuDropdownBody = item
				.closest('li')
				.querySelector('.menu-dropdown-body')
			if (menuDropdownBody) {
				menuDropdownBody.style.maxHeight = 'inherit'
				menuDropdownBody.classList.add('hidden')
				item.addEventListener('mouseenter', handleDesktopMouseEnter)
				item.addEventListener('mouseleave', handleDesktopMouseLeave)
			}
		})
	}

	function onResize() {
		if (
			window.matchMedia('only screen and (max-width: 1024px)').matches &&
			!hasReached1024
		) {
			hasReached1024 = true
			initMobileMenu()
		} else if (
			window.matchMedia('only screen and (min-width: 1024px)').matches &&
			hasReached1024
		) {
			hasReached1024 = false
			initDesktopMenu()
		}
	}

	if (hasReached1024) {
		initMobileMenu()
	} else {
		initDesktopMenu()
	}

	window.addEventListener('resize', onResize)

	const handleClickOutside = event => {
		if (
			!event.target.closest('.menu-dropdown') &&
			!event.target.closest('.menu-dropdown-body')
		) {
			hideMenuBody()
		}
	}
	document.body.addEventListener('click', handleClickOutside)
	headerMobile.classList.add('max-lg:hidden')
	// Menu end
})
