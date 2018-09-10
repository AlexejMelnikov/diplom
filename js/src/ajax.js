function ajax() {
	let message = new Object();
	// message.loading = '<img src ="gif/ajax-loader.gif">';	
	// message.succes = "Спасибо! Скоро с вами свяжемся";
	// message.failure = "Что-то пошло не так...";
 // ajax запрос всплывающего меню дизайн  
 let popupDesign = document.getElementsByClassName('popup-design')[0],
	 form = popupDesign.getElementsByTagName('form')[0],
	input = form.getElementsByTagName('input'),
	statusMessage = document.createElement('div');
	


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

			 			if(request.status === 200 && request.status < 300) {
			 					image.src = "img/succes.jpg";
								
			 					} else {

			 						image.src = "img/error.jpg";
			 			}
			 		}
			 	};

			  for(let i = 0; i < input.length; i++) {
			 	input[i].value = "";
			 }
};
module.exports = ajax;