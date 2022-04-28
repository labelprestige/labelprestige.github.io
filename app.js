const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
//New things//
var modalContainer = document.createElement('Div');
modalContainer.setAttribute('id', 'modal');

var customBox = document.createElement('Div');
customBox.className = 'custom-box';

var choix ;
var filiere;

document.getElementById("first").addEventListener('click' , () => {
	customBox.innerHTML = '<p>Entrez MPSI ou MP selon vôtre filière</p>';
	customBox.innerHTML += '<input type="text" id="modal-prompt" placeholder="entrez la filière"/><br/>'
	customBox.innerHTML += '<button id="modal-submit" onclick= "choix = "vrai"">Valider</button>';
	customBox.innerHTML += '<button id="modal-close" onclick= "choix = "faux"">Annuler</button>';
	filiere = document.getElementById('modal-promt');
	 modalShow();
});
if ( choix === "vrai" & filiere === "MPSI"){
	window.location.href = "";
}else{
    window.location.href = "";
}

function modalShow(){
    modalContainer.appendChild(customBox);
    document.body.appendChild(modalContainer);
	document.getElementById('modal-close').addEventListener('click' , function(){
		modalClose();
	});

	if (document.getElementById('modal-confirm')){
		document.getElementById('modal-confirm').addEventListener('click', function(){
			console.log('comfirmé');
			modalClose();
		});
	} else if (document.getElementById('model-submit')){
		document.getElementById('click', function(){
			console.log(document.getElementById('modal-prompt').value);
			    modalClose();
		});
	}
}
function modalClose(){
	while (modalContainer.hasChildNodes()){
		modalContainer.removeChild(modalContainer.firstChild);
	}
	document.body.removeChild(modalContainer);
}
