// Criando variavel que recebe a busca no documento html.
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// Método setInterval para atualizar a hora.

const relogio = setInterval(function time(){
  
  let  horatualizado = new Date();
  
  let hr = horatualizado.getHours();
  let min = horatualizado.getMinutes();
  let seg = horatualizado.getSeconds();

  if(hr < 10) hr = "0" + hr;
  if(min < 10) min = "0" + min;
  if(seg < 10) seg = "0" + seg;

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = seg;

});

