
window.addEventListener("DOMContentLoaded", () => {
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
	
	})  // form
 // AJAX
	let message = new Object();
	message.loading = '<img src ="gif/ajax-loader.gif">';	
	message.succes = "Спасибо! Скоро с вами свяжемся";
	message.failure = "Что-то пошло не так...";
 // ajax запрос всплывающего меню дизайн  
	let form = popupDesign.getElementsByTagName('form')[0],
	input = form.getElementsByTagName('input'),
	statusMessage = document.createElement('div');
	console.log(input);
// 		statusMessage.classList.add('status');

		form.addEventListener('submit', function(event) {
			event.preventDefault();
			form.appendChild(statusMessage);

});
// 			// AJAX
			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');

			 request.setRequestHeader("Content-type", "aplication/x-www-form-urlencoded");

			 let formData = new  FormData(form);
			 // отправка запроса
			 request.send(formData);
			 let image = document.createElement('img');
			 statusMessage.appendChild(image);
			 

			 request.onreadystatechange = function() {
			 	if(request.readyState < 4) {
			 		image.src = "img/wait.jpg";
			 				
			 	} else if(request.readyState === 4){
			 		// console.log(request.readyState+"  "+request.status);
			 			if(request.status === 200 && request.status < 300) {
			 					image.src = "img/succes.jpg";
											 								 					
			 					} else {

			 						image.src = "img/error.jpg";
			 			}
			 		}
			 	}
// 			 	console.log(request.readyState);
			  for(let i = 0; i < input.length; i++) {
			 	input[i].value = "";
			 }
		});