function aparecer_1() {
  var paragrafos = document.getElementsByClassName("oculto");

  while (paragrafos.length > 0){
    paragrafos[0].classList.remove("oculto");
  }
}