
//MUSICA


var song = document.getElementById("song");
var icono = document.getElementById("icono");
var texto = document.getElementById("texto");

icono.onclick = function(){
    if(song.paused){
        song.play();
        icono.className = "fa-regular fa-circle-pause"
        texto.textContent="Pausar Musica"
    }else{
        song.pause();
        icono.className = "fa-regular fa-circle-play"
        texto.textContent="Reanudar Musica"
    }
}

//