// Funciones para cambiar los colores del documento.

function colorCrim() {
	var aCambiar = document.getElementById('todo');
	aCambiar.removeAttribute("class");
	aCambiar.setAttribute("class", "crimson");

}

function colorClaro() {
	var aCambiar = document.getElementById('todo');
	aCambiar.removeAttribute("class");
	aCambiar.setAttribute("class", "blueLight");
}

function colorOscu() {
	var aCambiar = document.getElementById('todo');
	aCambiar.removeAttribute("class");
	aCambiar.setAttribute("class", "blueDark");
}

function colorRojo() {
	var aCambiar = document.getElementById('todo');
	aCambiar.removeAttribute("class");
	aCambiar.setAttribute("class", "rojo");

}

function colorNaranja() {
	var aCambiar = document.getElementById('todo');
	aCambiar.removeAttribute("class");
	aCambiar.setAttribute("class", "naranja");
}

function colorAmarillo() {
	var aCambiar = document.getElementById('todo');
	aCambiar.removeAttribute("class");
	aCambiar.setAttribute("class", "amarillo");
}

function colorVerde() {
	var aCambiar = document.getElementById('todo');
	aCambiar.removeAttribute("class");
	aCambiar.setAttribute("class", "verde");
}

// Función que 

function agregaTarea() {
	var nuevaTarea = document.createElement("div"); 

	var checkBox = document.createElement("input");
	checkBox.setAttribute("type", "checkbox");
	nuevaTarea.appendChild(checkBox);
	
	var negrita = document.createElement("b");
	nuevaTarea.appendChild(negrita);

	checkBox.onchange=function(){
    if (checkBox.checked) {
        negrita.setAttribute("class", "terminado");
    }
    else {
        negrita.removeAttribute("class");
    }
	};

	var inputTareaText = document.createTextNode(document.getElementById("inputsito").value);

	if (document.getElementById("inputsito").value == "") {
		alert("Su tarea está en blanco, por favor rellenar");
		nuevaTarea.innerHTML("");
	};

	negrita.appendChild(inputTareaText);

	var iconoLink = document.createElement("a");
	iconoLink.setAttribute("type", "button");
	iconoLink.setAttribute("onClick", "removerTarea()");

	var iconito = document.createElement("i");
	iconito.setAttribute("class", "fa fa-times");
	iconito.setAttribute("aria-hidden", "true");

	iconoLink.appendChild(iconito);
	nuevaTarea.appendChild(iconoLink);

	iconoLink.onclick=function(){
		var contenedor = document.getElementById("added");
		contenedor.removeChild(nuevaTarea);
	};

	nuevaTarea.setAttribute("class", "tareaNueva");
	document.getElementById("added").appendChild(nuevaTarea);

}
