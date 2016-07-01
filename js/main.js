function agregaTarea() {
	var nuevaTarea = document.createElement("div"); 

	var checkBox = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	nuevaTarea.appendChild(checkBox);

	var negrita = document.createElement("b");
	nuevaTarea.appendChild(negrita);

	var contenido = document.createTextNode("hola, texto de prueba");
	negrita.appendChild(contenido);

	var iconoLink = document.createElement("a");
	iconoLink.setAttribute("type", "button");

	var iconito = document.createElement("i");
	iconito.setAttribute("class", "fa fa-times");
	iconito.setAttribute("aria-hidden", "true");

	iconoLink.appendChild(iconito);
	nuevaTarea.appendChild(iconoLink);

	nuevaTarea.setAttribute("class", "tareaNueva");

	document.getElementById("added").appendChild(nuevaTarea)

}
