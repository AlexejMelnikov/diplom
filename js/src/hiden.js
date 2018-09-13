function hiden() {
	function hidenBlock() {
		let button = document.querySelector('.button-transparent'),
			blockShow = document.querySelectorAll('.col-xs-offset-1');
			blockUnVith = document.querySelectorAll('.hidden-xs');
			// console.log(block);
		button.addEventListener('click', function(event) {
			event.target.style.display = 'none';
				let classShow = blockShow[0].getAttribute('class');
				let classUnVith = blockUnVith[0].getAttribute('class');
				// console.log(block);
				for(let i = 0; i < blockUnVith.length; i++) {

				blockUnVith[i].setAttribute('class', classShow);
			}
			for(let i = 0; i < blockShow.length; i++) {

				blockShow[i].setAttribute('class', classUnVith);
			}

		})
	}
	hidenBlock();

}
module.exports = hiden;