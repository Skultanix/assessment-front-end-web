console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully.');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function duckComplement(evt) {
	evt.preventDefault()

	alert("You have aged better than this duck.")
}

let duck = document.querySelector('img')

duck.addEventListener('mouseover', duckComplement)