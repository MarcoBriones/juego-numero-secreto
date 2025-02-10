
let numeroMaximo=20;
let intentos=1; //esta variable inicializa en uno para que se imprima y tome en cunta el primer intento
               
let  intentos2=0; /*esta variable iniciaiza en cero para que cuando llegue al maximo de intentos corresponta la 
                 cantidad de intentos que dimos ya que si usamos la moisma variable (intentos) cuando llegue a intentos va a para el juego 
                y no estaria cumpliado con los 6 intentos*/
let numeroSecreto = 0;
let maximoIntentos=5;
let listaNumerosSorteados = [];

console.log(numeroSecreto);

function tituloParrafo(titulo,parrafo){
    let titulos = document.querySelector(titulo);
    titulos.innerHTML=parrafo;
    return;
}
tituloParrafo('h1',"Juego del numero secreto!");
tituloParrafo("p", `Escriba un numero del 1 al ${numeroMaximo}, tiene un máximo de ${maximoIntentos} intentos `);

//funciones para los botones

//boton intento
function botonIntento(){
 numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
 console.log(intentos);
  if(numeroUsuario===numeroSecreto){
    tituloParrafo('p', `Acertaste el numero en ${(intentos==1) ? 'el primer intento': intentos+ ' intentos'}` );
  }else if(numeroUsuario<numeroSecreto){

    tituloParrafo('p', "No acertaste, el numero secreto es mayor" );
  }else if(numeroUsuario>numeroSecreto){

tituloParrafo('p', 'No acertaste, el numero secreto es menor');
  }
  intentos++;
  intentos2++;
  if(intentos2===maximoIntentos){
  
    tituloParrafo('p','Haz completado el máximo de intentos');
  
   }
 
limpiarCaja();// llamamos la funcion limpiarCaja() para que se elimine el numemo despues de un intento
return;
}
//limpiar caja
function limpiarCaja(){
  document.getElementById('valorUsuario').value='';  
}
//boton nuevo juego
function btn_nuevoJuego(){
    
    limpiarCaja();//al tocar el boton nuevo juego se limpia la caja
    
   condicionesIniciales();  
}
condicionesIniciales();
function condicionesIniciales(){
    tituloParrafo('h1',"Juego del numero secreto!");
    tituloParrafo("p", `Escriba un numero del 1 al ${numeroMaximo}, tiene un máximo de ${maximoIntentos} intentos `);

    numeroSecreto = numeroSecretoRandom(); //al tocar el boton nuevo juego se genera un nuevo numero aleatorio
    intentos=1;
    intentos2=0;
}
//funcion para generar un numero secreto aleatorio 

function numeroSecretoRandom() {
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el numero generado esta  e la lista 
   if(listaNumerosSorteados.length==numeroMaximo){
  tituloParrafo("p", 'Ya se sortearon todos los numeros posibles');
    }else{

    if(listaNumerosSorteados.includes(numeroGenerado)){
return numeroSecretoRandom();

    }else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}
