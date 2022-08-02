
		function verificar(){
			var n = document.getElementById("numero").value;
			
			var verificar = parseInt(n)
			if (n % 2 == 0) {
				var par = "O número:"+n+", é par!!";

				document.getElementById("comparar").innerHTML = par
			} 
			else {
				var impar = "O número:"+n+", é par!!";
				document.getElementById("comparar").innerHTML = impar;
			}
			
		}
		