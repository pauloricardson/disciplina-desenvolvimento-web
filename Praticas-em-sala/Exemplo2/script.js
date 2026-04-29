function definircores() {
  var paragrafos = document.getElementsByTagName("p");
  var cores = ["blue","red","green","yellow"];

  for(var i=0; i<paragrafos.length;i++){
    paragrafos[i].style.backgroundColor = cores[i];
  }
}