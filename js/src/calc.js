function calc() {

	// размер 
	let size = document.querySelector('#size'),
		// материал
	    material = document.querySelector('#material'),
	    // Дополнительные услуги
	    options = document.querySelector('#options'),
	    // ценник 
	    calcPrice = document.querySelector('.calc-price'),
	    promo = document.querySelector('.promocode');
	   var sizeInd = 1,
	    materialInd = 1,
	    sizePrice = 0,
	    optInd;
	    
	    calcPrice.textContent = 0;
	    size.addEventListener('input', function(){
	    	sizeInd = size.selectedIndex;

	    	sizePrice = 500 * sizeInd;
	    		    	console.log(sizePrice);
	    	calcPrice.textContent = sizePrice * materialInd;
	    })
	    material.addEventListener('input', function(){
	    	 materialInd = material.selectedIndex;
	    	
	    	calcPrice.textContent = sizePrice * materialInd;
	   	    })
	    options.addEventListener('input', function() {
	    	optInd = options.selectedIndex;
	    	(!optInd)?optInd = 1: optInd = optInd;
	    	calcPrice.textContent = sizePrice * materialInd * optInd;
	    });
	    promo.addEventListener('input', function() {
	    	// console.log(promo.value);	
	    	(promo.value +"" == "IWANTPOPART")? calcPrice.textContent =calcPrice.textContent*0.7: calcPrice.textContent = calcPrice.textContent;  
	    })

	    
}
module.exports = calc;