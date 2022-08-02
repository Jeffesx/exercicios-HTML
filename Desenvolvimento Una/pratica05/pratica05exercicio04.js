
function pares(){
var n= document.getElementById("num").value;
var n=parseInt(n);
var i;
 
for (i=0;i<=n;i++){
if (i % 2==0)
document.getElementById("resposta").innerHTML+=(i)+";";
}
 
}
 