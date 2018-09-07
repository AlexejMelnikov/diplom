// slider
// индекс слайда
let slideIndex = 1,
	feedback = document.getElementsByClassName('feedback-slider');
	n = 0,
	slides = document.getElementsByClassName('main-slider-item');
	console.log(slides);
	
	showSlide(slideIndex);
function showSlide(n) {
	if(n > slides.length) {
		sideIndex = 1;
	};
	if(n < 1) {
		slideIndex = slide.length;
	};
	for(let i =0;i < slides.length; i++) {
		slides[i].style.display = 'none';
	} 
	slides[slideIndex -1].style.display = "flex";
	
}

function plusSlides(n) {
	showSlide(slideIndex +=n)
	}
slides[0].addEventListener('click', function() {
	plusSlides(1);
		});

let popUpDesign = document.querySelector('.popup-design'),
	close = document.querySelector('.popup-close'),
	fixedGift = document.querySelector('.fixed-gift'); 
console.log(close);

fixedGift.addEventListener('click', function() {
	popUpDesign.style.display = "flex";
	console.log('hi');
});
console.log(popUpDesign);
close.addEventListener('click', function() {
	popUpDesign.style.display = "none";
	console.log('hi');
});

