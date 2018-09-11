function ajax() {
	let message = new Object();
	message.loading = 'Загрузка начата...>';	
	message.succes = "Спасибо! Скоро с вами свяжемся";
	message.failure = "Что-то пошло не так...";
 // ajax запрос всплывающего меню дизайн  
 let popupDesign = document.getElementsByClassName('popup-design')[0],
	 form = popupDesign.getElementsByTagName('form')[0],
	input = form.getElementsByTagName('input'),
	inputPhone = form.getElementsByTagName('input')[2],
	statusMessage = document.createElement('div'),
	textMessage = document.createElement('h5');
	formChange = document.querySelectorAll('div .form');
	console.log(inputPhone);
	
	function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
       let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}
 
function mask(event) {
    let matrix = "+7(___)___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
        def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}
    
    inputPhone.addEventListener("input", mask, false);

	


		form.addEventListener('submit', function(event) {
			event.preventDefault();
			form.appendChild(textMessage);
			form.appendChild(statusMessage);

});
			
		// AJAX
		
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
			 		textMessage.textContent = message.loading;
			 		image.src = "img/wait.jpg";

			 	} else if(request.readyState === 4){

			 			if(request.status === 200 && request.status < 300) {
			 					textMessage.textContent = 	message.succes;
			 					image.src = "img/succes.jpg";
											
			 					} else {
			 						textMessage.textContent = 	message.failure;
			 						image.src = "img/error.jpg";
			 			}
			 		}
			 	};

			  for(let i = 0; i < input.length; i++) {
			 	input[i].value = "";
			 }
			};			
	 // ajax запрос всплывающего меню обратного звонка
	 let message = new Object();
	message.loading = 'Загрузка начата...>';	
	message.succes = "Спасибо! Скоро с вами свяжемся";
	message.failure = "Что-то пошло не так...",
    popupCons = document.querySelectorAll('form.form')[1],
   
    formCons = document.querySelectorAll('form.form')[1];


	let	inputCons = formCons.getElementsByTagName('input'),
		inputPhoneCons = inputCons[1];
	statusMessage = document.createElement('div'),
	textMessage = document.createElement('h5');

	function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
       let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}
 
function mask(event) {
    let matrix = "+7(___)___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
        def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}
    
    inputPhoneCons.addEventListener("input", mask, false);

	


		formCons.addEventListener('submit', function(event) {
			event.preventDefault();
			formCons.appendChild(textMessage);
			formCons.appendChild(statusMessage);

// });
// 		// AJAX
			
			
		
			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');

			 request.setRequestHeader("Content-type", "aplication/x-www-form-urlencoded");

			 let formDataCons = new  FormData(formCons);
// // 			 // отправка запроса
			 request.send(formDataCons);
			 let image = document.createElement('img');
			 statusMessage.appendChild(image);

			 request.onreadystatechange = function() {
			 	if(request.readyState < 4) {
			 		textMessage.textContent = message.loading;
			 		image.src = "img/wait.jpg";

			 	} else if(request.readyState === 4){

			 			if(request.status === 200 && request.status < 300) {
			 					textMessage.textContent = 	message.succes;
			 					image.src = "img/succes.jpg";
											
			 					} else {
			 						textMessage.textContent = 	message.failure;
			 						image.src = "img/error.jpg";
			 			}
			 		}
			 	};

			  for(let i = 0; i < inputCons.length; i++) {
			 	inputCons[i].value = "";
			 }
	 

});
module.exports = ajax;