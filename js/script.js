
window.addEventListener("DOMContentLoaded", () => {

	let Modal = require('./src/modal.js');
	let ajax = require('./src/ajax.js');
	let slider = require('./src/slider.js');
	let calc = require('./src/calc.js');
	let hover = require('./src/hover.js');
	let hiden = require('./src/hiden.js');

	Modal();
	ajax();
	// slider();
	calc();
	hover();
	hiden();
});
	