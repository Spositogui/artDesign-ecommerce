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

open_Menu_Produtos = () => {
	document.getElementById('menu-a').
	classList.add('active-produtos');

	document.getElementById('menu-b').
	classList.add('active-produtos');
}

back_Menu_A = () => {
	document.getElementById('menu-a').
	classList.remove('active-produtos');

	document.getElementById('menu-b').
	classList.remove('active-produtos');
}

colecaoDrop = () => {
	let colecao = document.getElementById('menu-b-colecao');

	if(colecao.classList.contains('drop'))
		colecao.classList.remove("drop");
	else
		colecao.classList.add("drop");
}

materialDrop = () => {
	let material = document.getElementById('menu-b-material');

	if(material.classList.contains('drop'))
		material.classList.remove("drop");
	else
		material.classList.add("drop");
}