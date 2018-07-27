	function SoNumero(nro)
	{
	 var valid    = "0123456789";
	 var numerook = "";
	 var temp;
	
	  for (var i=0; i< nro.length; i++) {
	    temp = nro.substr(i, 1);
	    if (valid.indexOf(temp) != "-1") 
	      numerook = numerook + temp;
	   } 
	 return(numerook);
	}
	
	
	function DigitaLetra(obj)
	{
	 var valid    = "abcdefghijklmnopqrstuvwxyz???ABCDEFGHIJKLMNOPQRSTUVWXYZ???";
	 var numerook = "";
	 var temp;
	
	  for (var i=0; i< obj.value.length; i++) {
	    temp = obj.value.substr(i, 1);
	    if (valid.indexOf(temp) != "-1") 
	      numerook = numerook + temp;
	   } 
	 obj.value = numerook;
	}
	
	
	function DigitaNumero(obj)
	{
	 var valid    = "1234567890";
	 var numerook = "";
	 var temp;
	
	  for (var i=0; i< obj.value.length; i++) {
	    temp = obj.value.substr(i, 1);
	    if (valid.indexOf(temp) != "-1") 
	      numerook = numerook + temp;
	   } 
	 obj.value = numerook;
	}
	
	
	function TamanhoMax(campo, TamanhoMaximo)
	{
		if (campo.value.length > TamanhoMaximo)
		{
		  campo.value = campo.value.substring(0,TamanhoMaximo);
	    }
		
	}
	
	function desviaPagina(endereco){
		window.location = endereco;
	}





	function AtualizaAjax(url, parametros, destino)
	{
		var url = url;
		var pars = parametros;
		
		var myAjax = new Ajax.Updater(
			destino, 
			url, 
			{
				method: 'get', 
				parameters: pars
			});
	}
	
	
	

	//chama Layer de busca de localidades
	//idCod 	= id do elemento que vai receber o codigo da localidade
	//idDesc	= id do elemento que vai receber a descrição da localidade
	//idLocal 	= id do elemento onde irá aparecer a busca 
	//metodo	= metodo da classe ajaxAction que irá receber a requisição
	//parametro = lista de parametros que o metodo irá receber
	function Localidade(idCod, idDesc, idLocal, metodo, parametro)
	{
		document.getElementById(idLocal).innerHTML = "";
				
		if (metodo == "") {
			metodo = "obterLocalidadePorNome";	
		}
	
		param = parametro.toString().replace(/&/g, "@@");
		param = param.replace(/=/g, "**");		
			
		var url = 'Main.php?do=ajax&action=editLocalidade';
  		var pars = 'idCod=' + idCod + '&idDesc=' + idDesc + '&idLocal=' + idLocal + '&metodo=' + metodo + '&parametro=' + param;
		var destino = idLocal;
		
		
		AtualizaAjax(url, pars, destino);
		
		document.getElementById(idLocal).style.display = 'block';	
	}


	//resultados da busca de localidade
	//nome parametro da busca
	function obterLocalidade(idCod, idDesc, idLocal, nome, metodo, parametro)
	{
		
		
		parametro = parametro.toString().replace(/@@/g, "&");
		parametro = parametro.toString().replace(/\*\*/g, "=");	
		
		
		if (nome.length > 2) {		
				
			var url = 'Main.php?do=ajax&action=' + metodo;
  			var pars = 'idCod=' + idCod + '&idDesc=' + idDesc + '&nome=' + nome + '&idLocal=' + idLocal + parametro;
			var destino = 'resultadosLocalidade';
	
			AtualizaAjax(url, pars, destino);
		}
	}

		
	function mostraValorLocalidade(idDesc, val)
	{
		document.getElementById(idDesc).value = val;
	}

	//coloca o codigo da localidade em um hidden;
	function preencheCodLocalidade(idCod, cod)
	{
		document.getElementById(idCod).value = cod;
	}
	
	function fecharLocalidade(idLocal)
	{
		document.getElementById(idLocal).style.display = "none";
	}		