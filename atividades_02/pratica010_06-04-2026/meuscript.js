function aparecer() {
    document.getElementById("corvinal").style.display = "block";
    document.getElementById("grifinoria").style.display = "block";
    document.getElementById("sonserina").style.display = "block";
    document.getElementById("lufalufa").style.display = "block";
}

function definirCores() {
    
}

function aparecer_2() {
    var paragrafos = document.getElementsByClassName("oculto");
    var i;
    for (i = 0; i < paragrafos.length; i++) {
        paragrafos[i].style = "block";
    }
}

function aparecer_1() {
    var paragrafos = document.getElementsByClassName("oculto");
    while (paragrafos.length > 0) {
        paragrafos[0].classList.remove("oculto");
    }
}