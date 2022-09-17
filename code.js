function scrolll(){
	var left=document.querySelector(".scroll-images");
	left.scrollBy(230,0)
}
function scrollr(){
	var right=document.querySelector(".scroll-images");
	right.scrollBy(-230,0)
}

document.querySelector('#recherche').addEventListener('keyup' , (e) => {
	const searchbar= document.querrySelector('#recherche')
	const card= document.querrySelector('.cards');
	const searchbarL= e.target.value;
	filterElements(searchbarL, card);
})
		

function filterElements(letters, elements) {
	if (letters.length >2 ){
		for (let i=0 ;i<elements.length; i++){
			if(elements[i].textContenent.toLowerCase().includes(letters)){
				elements[i].style.display = "block"
			}
			else{
				elements.style.display = "none"
			}

		}
	}
}