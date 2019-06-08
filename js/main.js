openMenu = () => {
	document.getElementById("open-menu").
	classList.add("active-menu");
	
	document.getElementById('close-menu').
	classList.add('active-close-menu');
}

closeMenu = () => {
	document.getElementById('close-menu').
	classList.remove('active-close-menu');
	
	document.getElementById('open-menu').
	classList.remove('active-menu');
}