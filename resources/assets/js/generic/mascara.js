document.write("<meta http-equiv='Pragma' content='no-cache'>");
document.write("<meta http-equiv='Expires' content='Thu, 01 Jan 1970 00:00:00 GMT'>");
document.write("<meta http-equiv='Cache-Control' content='no-store'>");

function Tecla(e)
{
	if (document.all) // Internet Explorer
		var tecla = e.keyCode;
	else 
		var tecla = e.which;
			
	if (tecla == 8 || (tecla > 47 && tecla < 58)) // numeros de 0 a 9
		return true;
	else
		return false;
/*	{
		if (tecla != 8) // backspace
			if (document.all) // Internet Explorer
				e.keyCode = 0;
			else  // Nestcape
				e.which = 0;
		else
			return true;
	}
*/
}
function MascaraCep(e,cpoCep)
{
	Tecla(e);
	var  strCep=cpoCep.value;
	var  nBytes =strCep.length;	

	if (document.all) // Internet Explorer
		var tecla = e.keyCode;
	else 
		var tecla = e.which;
		
	if(tecla != 8) { //Diferente de Backspace
		if((nBytes==5))
			cpoCep.value=strCep+"-";
	}

	return true;
}	

function MascaraFone(e,cpoFone)
{
	var  strFone=cpoFone.value;
	var  nBytes =strFone.length;
	
	var tecla = (window.event) ? e.keyCode : e.which;
	
	if(tecla > 47 && tecla < 58) {
		if(tecla != 8) { //Diferente de Backspace
			if((nBytes==4))
			  cpoFone.value=strFone+"-";
		}
	}
	if(tecla == 8 || tecla == 0 || (tecla > 47 && tecla < 58)){
		return true;
	}else{
		return false;
	}
}	

function MascaraCelular(e,cpoFone)
{
	var  strFone=cpoFone.value;
	var  nBytes =strFone.length;
	
	var tecla = (window.event) ? e.keyCode : e.which;
	var Fone = strFone.replace(/\D/g,"");   
	var foneAux = "";
	if(tecla > 47 && tecla < 58) { //Diferente de Backspace
		if(nBytes <= 9){
			for (var i=0; i< Fone.length; i++) {
				foneAux = foneAux + Fone[i];
				if(Fone.length < 8 && i == 3){
					foneAux  = foneAux + "-";
				}
				if(Fone.length == 8 && i == 4){
					foneAux  = foneAux + "-";
				}
			}
			cpoFone.value=foneAux;
		}
	}
	if(tecla == 8 || tecla == 0 || (tecla > 47 && tecla < 58)){
		return true;
	}else{
		return false;
	}
}		

function Maiusculo(strCpo)
{
   strCpo.value=strCpo.value.toUpperCase();
   return true;
}

function Minusculo(strCpo)
{
   strCpo.value=strCpo.value.toLowerCase();
   return true;
}

function MascaraData(w,campo)
{
   var Data = SoNumero(campo.value);
   var DataAux = ''; 
   var campo1 = campo.value;

   if (w.keyCode == 8) {      
     if (campo1.length == 2 || campo1.length == 5) {
        Data = Data.substr(0,Data.length-1);
       } 
    }
    
   if (Data.length < 9) {
     for (var i=0; i < Data.length; i++) {
       DataAux = DataAux + Data.substr(i,1);     
       if (i == 1 || i == 3) {
         DataAux = DataAux + "/";
        }
      }  
     campo.value = DataAux;
    }
   else {
      campo.value = campo.value.substr(0,10);
     }    
}

function MascaraData6(w,campo)
{
   var Data = SoNumero(campo.value);
   var DataAux = ''; 
   var campo1 = campo.value;

   if (w.keyCode == 8) {      
     if (campo1.length == 2 || campo1.length == 5) {
        Data = Data.substr(0,Data.length-1);
       } 
    }
    
   if (Data.length < 6) {
     for (var i=0; i < Data.length; i++) {
       DataAux = DataAux + Data.substr(i,1);     
       if (i == 1) {
         DataAux = DataAux + "/";
        }
      }  
     campo.value = DataAux;
    }
   else {
      campo.value = campo.value.substr(0,7);
     }    
}


function MascaraPlaca(cpoPlaca)
{
	var  strPlaca=cpoPlaca.value;
	var  nBytes =strPlaca.length;
	if(nBytes==3)
		cpoPlaca.value=strPlaca.toUpperCase()+"-";
	else if(nBytes==9)
		cpoPlaca.value=strPlaca.substr(0,8);
	
	return true;
}

function MascaraHora(cpoHora)
{
	var  strHora=cpoHora.value;
	var  nBytes =strHora.length;
	if(nBytes==2)
		cpoHora.value=strHora.toUpperCase()+":";
	
	return true;
}

function formataReal(ValoraFormatar) {
	Tecla(e);
    var i ;
    var decimalPointDelimiter = ",";
    var posDecPoint = parseInt("");
    var hasDecPoint = false;
    var s = new String(ValoraFormatar);
    var sAux = new String("");

    for (i = 0; i < s.length; i++)
    {   
    	var c = s.charAt(i);
    	if ( c == '.' ) c = decimalPointDelimiter;
	    sAux += c;
      if (c == decimalPointDelimiter){ 
        	  hasDecPoint = true;
        	  posDecPoint = i;
        	  break;}
    }
    for (var j = i+1; j < s.length; j++) sAux += s.charAt(j);
    
    if (!hasDecPoint) //(isNaN(posDecPoint)) 
      {	ValoraFormatar = s + ",00";}
    else
      {	
      	s = sAux + '00';
        ValoraFormatar= s.charAt(0);
        for (i = 1; i <= (posDecPoint+2); i++){ 
            ValoraFormatar += s.charAt(i);}
        if (posDecPoint == 0) ValoraFormatar = '0'+ValoraFormatar;
      }
    s = ValoraFormatar;
    ValoraFormatar = "";
    i=0;

    for (var j=s.length-4; j>=0; j--)
	{
		i++;
		ValoraFormatar = s.charAt(j) + ValoraFormatar;
		if (i == 3 && j != 0)
		{
			ValoraFormatar = "." + ValoraFormatar;
			i = 0;
		}
	}	    	
	ValoraFormatar +=  s.substring(s.length-3,s.length);
	
    return ValoraFormatar;
}

//-----------------------------------------------------
//Funcao: MascaraMoeda
//Sinopse: Mascara de preenchimento de moeda
//Parametro:
//   objTextBox : Objeto (TextBox)
//   SeparadorMilesimo : Caracter separador de mil?simos
//   SeparadorDecimal : Caracter separador de decimais
//   e : Evento
//Retorno: Booleano
//Autor: Gabriel Fr?es
//Data Cria??o: 15/02/2005
//-----------------------------------------------------
function MascaraMoeda(objTextBox, SeparadorMilesimo, SeparadorDecimal, e)
{
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789-';
    var aux = aux2 = '';
    var whichCode = (window.Event) ? e.which : e.keyCode;

	if (document.all) // Internet Explorer
		var whichCode = event.keyCode;
	else if(document.layers) // Nestcape
		var whichCode = e.which;
	
	if (whichCode == 13 || whichCode == 8 || whichCode == 0 || whichCode == 45) 
		return true;
    
	key = String.fromCharCode(whichCode); // Valor para o c?digo da Chave
    if (strCheck.indexOf(key) == -1) 
		return false; // Chave inv?lida

    len = objTextBox.value.length;

    for(i = 0; i < len; i++)
    {
	    if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) 
			break;
    }
	aux = '';
    
	for(; i < len; i++)
	{
        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) 
			aux += objTextBox.value.charAt(i);
	}
    
	aux += key;
    len = aux.length;
    
	if (len == 0) 
		objTextBox.value = '';
    if (len == 1) 
		objTextBox.value = '0'+ SeparadorDecimal + '0' + aux;
    if (len == 2) 
		objTextBox.value = '0'+ SeparadorDecimal + aux;
    if (len > 2) 
	{
        aux2 = '';
        for (j = 0, i = len - 3; i >= 0; i--) 
		{
            if (j == 3) 
			{
                aux2 += SeparadorMilesimo;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
        	objTextBox.value += aux2.charAt(i);
        
		objTextBox.value += SeparadorDecimal + aux.substr(len - 2, len);
    }
    return false;
}

function MascaraMoeda3(objTextBox, SeparadorMilesimo, SeparadorDecimal, e)
{
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789-';
    var aux = aux2 = '';
    var whichCode = (window.Event) ? e.which : e.keyCode;

	if (document.all) // Internet Explorer
		var whichCode = event.keyCode;
	else if(document.layers) // Nestcape
		var whichCode = e.which;
	
	if (whichCode == 13 || whichCode == 8 || whichCode == 0 || whichCode == 45) 
		return true;
    
	key = String.fromCharCode(whichCode); // Valor para o c?digo da Chave
    if (strCheck.indexOf(key) == -1) 
		return false; // Chave inv?lida

    len = objTextBox.value.length;

    for(i = 0; i < len; i++)
    {
	    if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) 
			break;
    }
	aux = '';
    
	for(; i < len; i++)
	{
        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) 
			aux += objTextBox.value.charAt(i);
	}
    
	aux += key;
    len = aux.length;
    
	if (len == 0) 
		objTextBox.value = '';
    if (len == 1) 
		objTextBox.value = '0'+ SeparadorDecimal + '00' + aux;
    if (len == 2) 
		objTextBox.value = '0'+ SeparadorDecimal + '0'+ aux;
    if (len == 3) 
		objTextBox.value = '0'+ SeparadorDecimal + aux;
    if (len > 3) 
	{
        aux2 = '';
        for (j = 0, i = len - 4; i >= 0; i--) 
		{
            if (j == 3) 
			{
                aux2 += SeparadorMilesimo;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
        	objTextBox.value += aux2.charAt(i);
        
		objTextBox.value += SeparadorDecimal + aux.substr(len - 3, len);
    }
    return false;
}

function MascaraMoeda4(objTextBox, SeparadorMilesimo, SeparadorDecimal, e)
{
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789-';
    var aux = aux2 = '';
    var whichCode = (window.Event) ? e.which : e.keyCode;

	if (document.all) // Internet Explorer
		var whichCode = event.keyCode;
	else if(document.layers) // Nestcape
		var whichCode = e.which;
	
	if (whichCode == 13 || whichCode == 8 || whichCode == 0 || whichCode == 45) 
		return true;
    
	key = String.fromCharCode(whichCode); // Valor para o c?digo da Chave
    if (strCheck.indexOf(key) == -1) 
		return false; // Chave inv?lida

    len = objTextBox.value.length;

    for(i = 0; i < len; i++)
    {
	    if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) 
			break;
    }
	aux = '';
    
	for(; i < len; i++)
	{
        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) 
			aux += objTextBox.value.charAt(i);
	}
    
	aux += key;
    len = aux.length;
    
	if (len == 0) 
		objTextBox.value = '';
    if (len == 1) 
		objTextBox.value = '0'+ SeparadorDecimal + '000' + aux;
    if (len == 2) 
		objTextBox.value = '0'+ SeparadorDecimal + '00'+ aux;
    if (len == 3) 
		objTextBox.value = '0'+ SeparadorDecimal +'0'+ aux;
    if (len == 4) 
		objTextBox.value = '0'+ SeparadorDecimal + aux;
    if (len > 4) 
	{
        aux2 = '';
        for (j = 0, i = len - 5; i >= 0; i--) 
		{
            if (j == 3) 
			{
                aux2 += SeparadorMilesimo;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
        	objTextBox.value += aux2.charAt(i);
        
		objTextBox.value += SeparadorDecimal + aux.substr(len - 4, len);
    }
    return false;
}

function MascaraMoeda2(objTextBox, SeparadorMilesimo, SeparadorDecimal, e,tamanho)
{
	if (tamanho == objTextBox.value.length)
		return false;
   
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    
	 var whichCode = (window.Event) ? e.which : e.keyCode;

	if (document.all) // Internet Explorer
		var whichCode = event.keyCode;
	else if(document.layers) // Nestcape
		var whichCode = e.which;
	
	if (whichCode == 13 || whichCode == 8 || whichCode == 0) 
		return true;
    
	key = String.fromCharCode(whichCode); // Valor para o c?digo da Chave
    if (strCheck.indexOf(key) == -1) 
		return false; // Chave inv?lida

    len = objTextBox.value.length;

    for(i = 0; i < len; i++)
    {
	    if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) 
			break;
    }
	
	aux = '';
    
	for(; i < len; i++)
	{
        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) 
			aux += objTextBox.value.charAt(i);
	}
    
	aux += key;
    len = aux.length;
    
	if (len == 0) 
		objTextBox.value = '';
    if (len == 1) 
		objTextBox.value = '0'+ SeparadorDecimal + '0' + aux;
    if (len == 2) 
		objTextBox.value = '0'+ SeparadorDecimal + aux;
    if (len > 2) 
	{
        aux2 = '';
        for (j = 0, i = len - 3; i >= 0; i--) 
		{
            if (j == 3) 
			{
                aux2 += SeparadorMilesimo;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
        	objTextBox.value += aux2.charAt(i);
        
		objTextBox.value += SeparadorDecimal + aux.substr(len - 2, len);
    }
    return false;
}

function mascaraValor(valor)
{
	var aux=0;
	var valorAux="";
	for(i=0;i<valor.length;i++)
	{
		if(valor.charAt(i) == ".")
		{
			aux = i;
			valorAux = valorAux + ",";
		}
		else
			valorAux = valorAux + valor.charAt(i);
	}
	diferenca = parseInt(valor.length) - parseInt(aux);
	if (diferenca == 2)
		valorAux = valorAux + "0";
	
	parteInteira = valorAux.substring(0,aux);
	parteInteiraAux = "";
	cont=0;
	
	if (parteInteira.length > 3)
	{
		
		for(i=parteInteira.length-1;i>=0;i--)
		{
			parteInteiraAux = parteInteiraAux + parteInteira.charAt(i);
			cont++;
			if(cont==3)
			{
				parteInteiraAux = parteInteiraAux + ".";
				cont=0;
			}
		}
		parteInteira = "";
		for(i=parteInteiraAux.length-1;i>=0;i--)
			parteInteira = parteInteira + parteInteiraAux.charAt(i);

		parteDecimal = valorAux.substring(aux,valorAux.length);
		valorAux = parteInteira + parteDecimal;
	}
	return valorAux;
}


function MascaraPorcentagem(objTextBox, SeparadorDecimal, e)
{
	var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    var whichCode = (window.Event) ? e.which : e.keyCode;

	if (document.all) // Internet Explorer
		var whichCode = event.keyCode;
	else if(document.layers) // Nestcape
		var whichCode = e.which;
	
	if (whichCode == 13 || whichCode == 8 || whichCode == 0) 
		return true;
    
	key = String.fromCharCode(whichCode); // Valor para o c?digo da Chave
    if (strCheck.indexOf(key) == -1) 
		return false; // Chave inv?lida

    len = objTextBox.value.length;
	
    for(i = 0; i < len; i++)
    {
	    if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) 
			break;
    }
	aux = '';
    
	for(; i < len; i++)
	{
        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) 
			aux += objTextBox.value.charAt(i);
	}
    
	aux += key;
    len = aux.length;
    
	if (len == 0) 
		objTextBox.value = '';
    if (len == 1) 
		objTextBox.value = '0'+ SeparadorDecimal + '0' + aux;
    if (len == 2) 
		objTextBox.value = '0'+ SeparadorDecimal + aux;
    if (len > 2) 
	{
        aux2 = '';
        for (j = 0, i = len - 3; i >= 0; i--) 
		{
            if (j == 3) 
			{
                return false;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
        	objTextBox.value += aux2.charAt(i);
        
		objTextBox.value += SeparadorDecimal + aux.substr(len - 2, len);
    }
    return false;
}


function MascaraPorcentagem2(objTextBox, SeparadorDecimal, e)
{
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    
    var whichCode = (window.Event) ? e.which : e.keyCode;

	if (document.all) // Internet Explorer
		var whichCode = event.keyCode;
	else if(document.layers) // Nestcape
		var whichCode = e.which;
	
	if (whichCode == 13 || whichCode == 8 || whichCode == 0) 
		return true;
    
	key = String.fromCharCode(whichCode); // Valor para o c?digo da Chave
    if (strCheck.indexOf(key) == -1) 
		return false; // Chave inv?lida

    len = objTextBox.value.length;
	
    for(i = 0; i < len; i++)
    {
	    if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) 
			break;
    }
	aux = '';
    
	for(; i < len; i++)
	{
        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) 
			aux += objTextBox.value.charAt(i);
	}
    
	aux += key;
    len = aux.length;
    
	if (len == 0) 
		objTextBox.value = '';
    if (len == 1) 
		objTextBox.value = '0'+ SeparadorDecimal + '000' + aux;
    if (len == 2) 
		objTextBox.value = '0'+ SeparadorDecimal + '00' + aux;

    if (len == 3) 
		objTextBox.value = '0'+ SeparadorDecimal + '0' + aux;

    if (len == 4) 
		objTextBox.value = '0'+ SeparadorDecimal + aux;
	
    if (len > 4) 
	{
        aux2 = '';
        for (j = 0, i = len - 5; i >= 0; i--) 
		{
            if (j == 3) 
			{
                return false;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
        	objTextBox.value += aux2.charAt(i);
		
		objTextBox.value += SeparadorDecimal + aux.substr(len - 4, len);
    }
    return false;
}

function MascaraPorcentagem3(objTextBox, SeparadorDecimal, e)
{
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    
    var whichCode = (window.Event) ? e.which : e.keyCode;

	if (document.all) // Internet Explorer
		var whichCode = event.keyCode;
	else if(document.layers) // Nestcape
		var whichCode = e.which;
	
	if (whichCode == 13 || whichCode == 8 || whichCode == 0) 
		return true;
    
	key = String.fromCharCode(whichCode); // Valor para o c?digo da Chave
    if (strCheck.indexOf(key) == -1) 
		return false; // Chave inv?lida

    len = objTextBox.value.length;
	
    for(i = 0; i < len; i++)
    {
	    if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) 
			break;
    }
	aux = '';
    
	for(; i < len; i++)
	{
        if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) 
			aux += objTextBox.value.charAt(i);
	}
    
	aux += key;
    len = aux.length;
    
   	if (len == 0) 
		objTextBox.value = '';
    if (len == 1) 
		objTextBox.value = '0'+ SeparadorDecimal + '00000' + aux;
    if (len == 2) 
		objTextBox.value = '0'+ SeparadorDecimal + '0000' + aux;
	if (len == 3) 
		objTextBox.value = '0'+ SeparadorDecimal + '000' + aux;
	if (len == 4) 
		objTextBox.value = '0'+ SeparadorDecimal + '00' + aux;
	if (len == 5) 
		objTextBox.value = '0'+ SeparadorDecimal + '0' + aux;
    if (len == 6) 
		objTextBox.value = '0'+ SeparadorDecimal + aux;
	
    if (len > 6) 
	{
        aux2 = '';
        for (j = 0, i = len - 7; i >= 0; i--) 
		{
            if (j == 3) 
			{
                return false;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
        	objTextBox.value += aux2.charAt(i);
        
		objTextBox.value += SeparadorDecimal + aux.substr(len - 6, len);
    }
    
    return false;
}


function tiraMascaraValor(valor)
{
	valorAux = "";
	for(w=0;w<valor.value.length;w++)
	{
		if(valor.value.charAt(w) != ".")
		{
			if(valor.value.charAt(w) == ",")
				valorAux = valorAux + ".";
			else
				valorAux = valorAux + valor.value.charAt(w);
		}
	}
	return valorAux;
}


function mascaraMutuario(o,f){
    v_obj=o
    v_fun=f
    setTimeout('execmascara()',1)
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

function permiteNumeros(e, obj) {
	var tecla = (window.event) ? e.keyCode : e.which;
	var texto = obj.value
	var indexvir = texto.indexOf(",")

	if (tecla == 8 || tecla == 0)
		return true;
	if (tecla != 44 && tecla < 48 || tecla > 57)
		return false;
	if (tecla == 44) {
		if (indexvir !== -1) {
			return false
		}
	}
}

function permiteNumerosPonto(e, obj) {
	var tecla = (window.event) ? e.keyCode : e.which;
	var texto = obj.value

	if (tecla == 8 || tecla == 0)
		return true;
	if (tecla != 46 && tecla < 48 || tecla > 57)
		return false;
}

function permiteNumerosInteiros(e) {
	var tecla = (window.event) ? e.keyCode : e.which;

	if((tecla>47 && tecla<58)) 
		return true;
	else{
		if (tecla==8 || tecla==0) 
			return true;
		else  
			return false;
	 }
}

function cpfCnpj(v){

    //Remove tudo o que não é dígito
    v=v.replace(/\D/g,"")

    if (v.length <= 11) { //CPF

        //Coloca um ponto entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d)/,"$1.$2")

        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v=v.replace(/(\d{3})(\d)/,"$1.$2")

        //Coloca um hífen entre o terceiro e o quarto dígitos
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")

    } else { //CNPJ

        //Coloca ponto entre o segundo e o terceiro dígitos
        v=v.replace(/^(\d{2})(\d)/,"$1.$2")

        //Coloca ponto entre o quinto e o sexto dígitos
        v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")

        //Coloca uma barra entre o oitavo e o nono dígitos
        v=v.replace(/\.(\d{3})(\d)/,".$1/$2")

        //Coloca um hífen depois do bloco de quatro dígitos
        v=v.replace(/(\d{4})(\d{1,2})/,"$1-$2")

    }

    return v

}
