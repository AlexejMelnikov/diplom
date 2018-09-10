 function modal() {
	// подарок
let popupGift = document.querySelector('.popup-gift'),
	closeGift = document.getElementsByClassName('popup-close')[1],
	fixedGift = document.querySelector('.fixed-gift'); 

fixedGift.addEventListener('click', function() {
	popupGift.style.display = "flex";
	
});
popupGift.addEventListener('click', function(e) {
	if(e.target.classList == 'popup-gift')
		{
			popupGift.style.display = "none";
		}
	
});
closeGift.addEventListener('click', function(e) {
	popupGift.style.display = "none";
	fixedGift.style.display = "none";
	
});
// design

let buttonDesign = document.getElementsByClassName('button-design'),
	popupDesign = document.getElementsByClassName('popup-design')[0],
	closeDesign = document.getElementsByClassName('popup-close')[2];
	
		
	
	for(let i = 0;i<buttonDesign.length; i++) {
	buttonDesign[i].addEventListener('click', function() {
		popupDesign.style.display = 'flex';
		})
	}
	closeDesign.addEventListener('click',  function() {
	popupDesign.style.display = "none";
	});

	// закрытие окна при щелчку по подложке
	popupDesign.addEventListener('click',  function(e) {
		if(e.target.classList == 'popup-design')
		{
			popupDesign.style.display = "none";
		}
	
	
	
	});
	



	// КОНСУЛЬТАЦИЯ
	let btnCons = document.getElementsByClassName('button-consultation'),
		poupCons = document.getElementsByClassName('popup-consultation')[0];
		closeCons = document.getElementsByClassName('popup-close')[0];
	
	for (var i = 0; i < btnCons.length; i++) {
		btnCons[i].addEventListener('click', function() {
			poupCons.style.display = 'flex';
		})
	}
	closeCons.addEventListener('click', function() {
		poupCons.style.display = 'none';
	})
	// закрытие окна при щелчку по подложке
	poupCons.addEventListener('click', function(e) {
		if(e.target.classList == 'popup-consultation')
		{
			poupCons.style.display = "none";
		}
	
	})
}
module.exports = modal;