function hover() {
	function imgHover() {
	let wrapperHover = document.querySelector('.sizes-wrapper'),
	 sizesBlock = document.querySelector('.sizes-block');
	console.log(wrapperHover);
	console.log(sizesBlock);
	
		let image = wrapperHover.getElementsByTagName('img');
			console.log(image);
		wrapperHover.addEventListener('mouseover', function(event) {
			let startStr = event.target.getAttribute('src').slice(0, 11);
			var srcStr = event.target.getAttribute('src');
			event.target.setAttribute('src', startStr + "-1.png");

		});
		wrapperHover.addEventListener('mouseout', function(event) {
			let startStr = event.target.getAttribute('src').slice(0, 11);
			// var srcStr = event.target.getAttribute('src');
			event.target.setAttribute('src', startStr + ".png");
		});
	}	
	imgHover();
}
module.exports = hover;