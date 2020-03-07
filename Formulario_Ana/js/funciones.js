function onFocus(){

}

function verificarNombre(){
  	var nombre=document.getElementById("nombre");
  	if (nombre.value==""){
  		  nombre.className="Incorrecto";
  		}
    else{
  		  nombre.className="Correcto";
  	}
}

function verificarEmail(){
  	var email=document.getElementById("email");
  	var email_ok=validarEmail(email.value);
  	if (email_ok==true)
  	{
  		email.className="Correcto";
  	}
  	else
  	{
  		email.className="Incorrecto";
  	}
}

function validarEmail(email){
    var comprobar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return comprobar.test(String(email).toLowerCase());
}

function verificarEdad(){
  	var edad=document.getElementById("edad");
  	if (edad.value<18 || edad.value>100){
  		edad.className="Incorrecto";
  	}
  	else{
  	edad.className="Correcto";
  	}
}

function verificarDNI(){
  	var dni_ok=validarDNI();
  	if (dni_ok)
  	{

  		document.getElementById("dni").className="Correcto";
  	}
  	else{
  		document.getElementById("dni").className="Incorrecto";
  	}
}

function validarDNI(){
    var dni=document.getElementById("dni").value;
  	if(dni.length!=9){
  		return false;
  	}

    var numero=dni.substr(0,8);
  	if(isNaN(numero)==true){
  	   return false;
  	}

  	var letra=dni.charAt(8);
  	if(isNaN(letra)==false){
  	   return false;
  	}

  	var resto = numero%23;
  	var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  	var letra_dni = letras.charAt(resto);
  	if(letra!=letra_dni){
  	   return false;
  	}

  	return true;
}
