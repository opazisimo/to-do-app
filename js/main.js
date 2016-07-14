var fecha = new Date();
var minutes = fecha.getMinutes();
var hours = fecha.getHours();
var ciudades = ["Chicago", "Sao Paulo", "Santiago", "México D.F", "Caracas", "Brasilia", "Quito", "Guayaquil", "Santa Marta", "Bogotá"];

var zonaHorariaHora = fecha.getUTCHours();
var zonaHorariaMin = fecha.getUTCMinutes();
var horita = zonaHorariaHora + ":" + zonaHorariaMin;

function laHora(){
    var h1Hours = document.getElementById("hora");
    var h1Minutes = document.getElementById("minutos");

    h1Hours.textContent = hours;
    h1Minutes.textContent = minutes;
}

function laFecha(){
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	var h4Fecha = document.getElementById("fechaActual");
	contFecha =	fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear();
	h4Fecha.textContent = contFecha;
}

function plusOtrasHoras(difHoras){
  var zonaHorariaHora = fecha.getUTCHours() + difHoras;
  var zonaHorariaMin = fecha.getUTCMinutes();
  var horita = zonaHorariaHora + ":" + zonaHorariaMin;
  return horita;
}

function lessOtrasHoras(difHoras){
  var zonaHorariaHora = fecha.getUTCHours() - difHoras;
  var zonaHorariaMin = fecha.getUTCMinutes();
  var horita = zonaHorariaHora + ":" + zonaHorariaMin;
  return horita;
}

function mostrarZona(ciudad, horario){
  var cajaCiudades = document.getElementById("mundial");
  var fila = document.createElement("div");
  var col8 = document.createElement("div");
  var col4 = document.createElement("div");

  fila.setAttribute("class", "row");
  col8.setAttribute("class", "col-xs-9");
  col4.setAttribute("class", "col-xs-3");

  var elementoH3Ciudad = document.createElement("h3");
  var elementoH3Hora = document.createElement("h3");

  elementoH3Ciudad.innerHTML = ciudad;
  elementoH3Hora.innerHTML = horario;

  cajaCiudades.appendChild(fila);
  fila.appendChild(col8);
  col8.appendChild(elementoH3Ciudad);
  fila.appendChild(col4);
  col4.appendChild(elementoH3Hora);
}

function checks(){
	var cBoxChicago = document.getElementById("boxChicago");
  var cBoxSaoPaulo = document.getElementById("boxSaoPaulo");
  var cBoxSantiago = document.getElementById("boxSantiago");
  var cBoxMx = document.getElementById("boxMx");
  var cBoxCaracas = document.getElementById("boxCaracas");
  var cBoxBrasilia = document.getElementById("boxBrasilia");
  var cBoxQuito = document.getElementById("boxQuito");
  var cBoxGuayaquil = document.getElementById("boxGuayaquil");
  var cBoxSantaMarta = document.getElementById("boxSantaMarta");
  var cBoxBogota = document.getElementById("boxBogota");

		cBoxChicago.onchange=function(){
    if (cBoxChicago.checked) {
        mostrarZona(ciudades[0],lessOtrasHoras(5));
    }
	};
    cBoxSaoPaulo.onchange=function(){
    if (cBoxSaoPaulo.checked) {
        mostrarZona(ciudades[1],lessOtrasHoras(3));
    }
  };
    cBoxSantiago.onchange=function(){
    if (cBoxSantiago.checked) {
        mostrarZona(ciudades[2],lessOtrasHoras(4));
    }
  };
    cBoxMx.onchange=function(){
    if (cBoxMx.checked) {
        mostrarZona(ciudades[3],lessOtrasHoras(5));
    }
  };
    cBoxCaracas.onchange=function(){
    if (cBoxCaracas.checked) {
        mostrarZona(ciudades[4],lessOtrasHoras(4));
    }
  };
    cBoxBrasilia.onchange=function(){
    if (cBoxBrasilia.checked) {
        mostrarZona(ciudades[5],lessOtrasHoras(3));
    }
  };
    cBoxQuito.onchange=function(){
    if (cBoxQuito.checked) {
        mostrarZona(ciudades[6],lessOtrasHoras(5));
    }
  };
    cBoxGuayaquil.onchange=function(){
    if (cBoxGuayaquil.checked) {
        mostrarZona(ciudades[7],lessOtrasHoras(5));
    }
  };
    cBoxSantaMarta.onchange=function(){
    if (cBoxSantaMarta.checked) {
        mostrarZona(ciudades[8],lessOtrasHoras(5));
    }
  };
    cBoxBogota.onchange=function(){
    if (cBoxBogota.checked) {
        mostrarZona(ciudades[9],lessOtrasHoras(5));
    }
  };
}

$(document).ready(function(){
	console.log("el yeicueri está cargaooo");
	laHora();
	laFecha();
	checks();
});
