
function novoItem() {
  var campos = document.querySelectorAll("#formulario input");
  var novaLinha = document.createElement("tr");

  for (var i = 0; i < campos.length; i++) {
    var novaColuna = document.createElement("td");
    novaColuna.innerHTML = campos[i].value;
    novaLinha.appendChild(novaColuna);
    campos[i].value = "";
  }

  var tabela = document.getElementById("tabela");
  tabela.appendChild(novaLinha);
}