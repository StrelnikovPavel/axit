
//</IBG>========================================================================================================
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();
//</IBG>========================================================================================================
let iconMenu = document.querySelector('.icon-menu');
if (iconMenu != null) {
	let body = document.querySelector('body');
	let menuBody = document.querySelector('.menu__body');
	iconMenu.addEventListener('click', (e) => {
		if (!body.classList.contains('_hide')) {
			iconMenu.classList.toggle('_active');
			menuBody.classList.toggle('_active');
		}
	});
};
//===============================================================================================================
document.querySelectorAll('.tabs-item').forEach((item) =>
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');

		document.querySelectorAll('.tabs-item').forEach(
			(child) => child.classList.remove('_active')
		);
		document.querySelectorAll('.tabs-block').forEach(
			(child) => child.classList.remove('_active')
		);
		item.classList.add('_active');
		document.getElementById(id).classList.add('_active');
	})
);
//======================================================================
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
	window.addEventListener("scroll", animOnScroll);
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}