let video = document.getElementsByClassName("videozinho")[0];
// procurando elemnto videzinho usando a getclassName, na varredura ele procura um objeto indecado indicar a posição do array que deseva o evento[0]


//Método playbackRate responsavel pela velocidade
//Método currentTime responsavél pelo tempo do video


//Evento do botão
function play(){
  video.play()
  video.playbackRate = 1
}
function pause(){
  video.pause()
}
function stopp(){
  video.pause()
  video.currentTime = 0
}

function desc(){
  video.playbackRate -= 0.1 
  
}

function inc(){
  video.playbackRate += 0.1 
  
}

function retroceder(){
  video.currentTime -= 10
}

function avancar(){
  video.currentTime -= 10
}