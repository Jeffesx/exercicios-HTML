
		var operacao = parseInt(prompt ("Informe o código da operação desejada:\n"+"[1] Área do Retângulo.\n"+
			"[2] Área do Triângulo.\n"+
			"[3] Raio.\n"+
			"[4] Área de um Trapézio."));
		
		switch(operacao){
			case 1:
			var n1 = parseInt(prompt ("Informe a altura: "));
			var n2 = parseInt(prompt ("Informe a base: "));
			arear = n1*n2
			document.write("A área do retângulo é de:",arear);
			break;
			case 2:
			var n1 = parseInt(prompt ("Informe a altura: "));
			var n2 = parseInt(prompt ("Informe a base: "));
			areat = (n1*n2)/2
			document.write("A área do triângulo é de:",areat);
			break;
			case 3:
			var n1 = parseInt(prompt ("Informe o raio: "));
			raio = Math.PI*Math.pow(n1,2);
			document.write("A o raio é de:",raio);
			break;
			case 4:
			var n1 = parseInt(prompt ("Informe a altura: "));
			var n2 = parseInt(prompt ("Informe a base MAIOR: "));
			var n3 = parseInt(prompt ("Informe a base menor: "));
			areatrap = (n1*(n3+n2))/2;
			document.write("A área do trapézio é de:",areatrap);
			break;
			default:			
			console.log("Código inválido!!!");
		}
	