function aparecer_2(){
  var paragrafos = document.getElementsByClassName("oculto");

  for(var i=0; i<paragrafos.length; i++){
    paragrafos[i].style.display = "block";
  }
}