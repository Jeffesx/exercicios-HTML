
function calcula(){
var n1 = document.getElementById("primeiroNumero").value;
var n2 = document.getElementById("segundoNumero").value;
var log = Math.log(Math.log(n1)/Math.log(n2));
document.getElementById("log").innerHTML = log;
}