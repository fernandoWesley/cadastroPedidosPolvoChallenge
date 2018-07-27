document.write("<meta http-equiv='Pragma' content='no-cache'>");
document.write("<meta http-equiv='Expires' content='Thu, 01 Jan 1970 00:00:00 GMT'>");
document.write("<meta http-equiv='Cache-Control' content='no-store'>");

function ValidaCPF(cpoCPF,aviso)
{
	var FormOk   = false;
	var NumAux   = 0;
	var NumAux2  = 0;
	var Digito1  = 0;
	var Digito2  = 0;
	var NumCPF   = "";
	for (i=0;i<cpoCPF.value.length;i++)
	{
		if (cpoCPF.value.charAt(i) != "." && cpoCPF.value.charAt(i) != "-")
			NumCPF = NumCPF + cpoCPF.value.charAt(i);
	}

	var Bytes    = 0;
	var controle;
	if (NumCPF.length>0 ) {
	  if (NumCPF.length<11) {
		 if (aviso==1) {
			alert('Tamanho Inválido: O CPF deve possuir 11 dígitos.');
		 }
	  }
	  else {
		 NumAux2 = 2
		 for ( var contador=9 ; contador > 0 ; contador-=1 )
		 {
			Bytes = parseInt(NumCPF.substring(contador-1,contador),10);
			NumAux+=Bytes*NumAux2;
			NumAux2+=1;
		 }
		 Digito1 = 11 - (NumAux % 11 )
		 if (Digito1 > 9) {
			Digito1 = 0;
		 }
		 NumAux2 = 3
		 NumAux  = 0
		 for ( var contador=9 ; contador > 0 ; contador-=1 )
		 {
			Bytes = parseInt(NumCPF.substring(contador-1,contador),10);
			NumAux +=Bytes*NumAux2;
			NumAux2+=1;
		 }
		 Digito2 = 11 - ((Digito1 * 2 + NumAux) % 11)
		 if (Digito2 > 9) {
			Digito2 = 0;
		 }
		 if ( (Digito1*10+Digito2) == (parseInt(NumCPF.substring(9,11),10)) ) {
			FormOk = true;
		 }
		 else {
			if (aviso==1) {
			   alert('Número Inválido: O CPF informado está incorreto, verifique.');
			}
		 }
	  }
	}
	else {
	  FormOk=true;
	}
	if (FormOk==false) {
	  cpoCPF.focus();
	}
	return (FormOk);
}

function ValidaCNPJ(cpoCNPJ,aviso)
{
   var cnpj = cpoCNPJ.value;
   var FormOk = true;
   var aux_cnpj = "";
   var cnpj1=0,cnpj2=0;

   if (cpoCNPJ.value.length>0)
   {
      for(j=0;j<cnpj.length;j++)
         if(cnpj.substr(j,1)>="0" && cnpj.substr(j,1)<="9")
            aux_cnpj += cnpj.substr(j,1);
      if(aux_cnpj.length!=14)
         FormOk = false;
      else
      {
         cnpj1 = aux_cnpj.substr(0,12);
         cnpj2 = aux_cnpj.substr(aux_cnpj.length-2,2);
         fator = "543298765432";
         controle = "";
         for(j=0;j<2;j++)
         {
            soma = 0;
            for(i=0;i<12;i++)
               soma += cnpj1.substr(i,1) * fator.substr(i,1);
            if(j==1) soma += digito * 2;
               digito = (soma * 10) % 11;
            if(digito==10) digito = 0;
               controle += digito;
            fator = "654329876543";
         }
         if(controle!=cnpj2 || cnpj=='00000000000000' )
            FormOk = false;
      }
   }

   if (aviso==true && FormOk==false)
      alert('CNPJ Inválido. Verifique o valor digitado e corrija.');

   if (FormOk==false)
      cpoCNPJ.focus();
   return (FormOk);
}

function ValidaCpfCnpj(objCampo,aviso)
{
   if(objCampo.value.length>14)
		return(ValidaCNPJ(objCampo,true));
	else
		return(ValidaCPF(objCampo,true));
}

function HoraLimite(hrInicio,hrFinal)
{

   var hrIni = hrInicio.value.substr(0,2);
   var hrFim = hrFinal.value.substr(0,2);
  //alert(hrFim);

   if(hrFim<hrIni)
   {
      alert("Hora Inválido. Horário final é menor do que horário inicial.");
	  hrFinal.value="";
	  hrFinal.focus();
	  return false;
   }
   else
   {      
	  return true;
   }

}


function DataTamanho(dtInicio,dtFinal,msg)
{
   var dtIni = dtInicio.value.substr(6,4)+dtInicio.value.substr(3,2)+dtInicio.value.substr(0,2);
   var dtFim = dtFinal.value.substr(6,4)+dtFinal.value.substr(3,2) +dtFinal.value.substr(0,2);

   if(dtFim<dtIni)
   {
      alert(msg);
	  dtFinal.focus();
	  return false;
   }
   else
   {
      return true;
   }

}

function HoraTamanho(hrInicio,hrFinal)
{

   var hrIni = hrInicio.value.substr(0,2);
   var hrFim  = hrFinal.value.substr(0,2);

   if(hrFim<=hrIni)
   {
      alert("Período Inválido. Hora final é menor do que hora inicial.");
	  hrInicio.value="";
	  hrFinal.focus();
	  return false;
   }
   else
   {
      return true;
   }

}

function DataLimite(cpoData,dtInicio,dtFinal)
{
   if (cpoData.value=="")
   {
	  return true;
   }
   
   ValidaData(cpoData,false);

   var dtIni = new Date(Ano(dtInicio),Mes(dtInicio),Dia(dtInicio));
   var dtFim = new Date(Ano(dtFinal),Mes(dtFinal),Dia(dtFinal));
   var dtDig = new Date(Ano(cpoData.value),Mes(cpoData.value),Dia(cpoData.value));

   if (dtDig >=dtIni && dtDig<=dtFim )
	  return true;
   else 
   {
       alert("Data Inválida. Está fora do período");
	   cpoData.value="";
	   cpoData.focus();
	   return false;
   }  
}

function Dia(dtDia)
{  
   return (dtDia.substr(0,2));
}

function Mes(dtDia)
{
   return (dtDia.substr(3,2));
}

function Ano(dtDia)
{  
   return (dtDia.substr(6,4));
}

function NaoBarra(strData)
{
   var retorno=true;
   for(var i=0;i<strData.length;i++)
      if(strData.indexOf("/")!=-1)
         retorno = false;
   return retorno;
}

function ValidaData(cpoData,aviso) 
{
	var strData = cpoData.value;
	
	if (strData.length==6)
	   strData = strData.substr(0,2)+"/"+strData.substr(2,2)+"/"+strData.substr(4,2);
	else if (strData.length==8 && NaoBarra(strData))
	   strData = strData.substr(0,2)+"/"+strData.substr(2,2)+"/"+strData.substr(4,4);
	
	var datePat=/^(\d{1,2})(\/|-|.)(\d{1,2})\2(\d{2,4})$/;
	var datadiv = strData.match(datePat);
	
	datadiv = strData.match(datePat);
	
	if (strData.length==0)
	  return true;
	
	if (datadiv==null)
	{
	 alert('Data Inválida: Caracteres não permitidos ou tamanho inválido');
	 cpoData.value="";
	 cpoData.focus();
	 return false;
	}
	
	var dia     = datadiv[1];
	var mes     = datadiv[3];
	var ano     = datadiv[4];
	var FormOk  = true;
	
	if (ano.length < 3)
	{
	 if (parseInt(ano) > 30)
	  {
		 ano = parseInt(ano)+1900; 
	  }
	  else
	  {
		 ano = parseInt(ano)+2000;
	  }
	}
	else
	{
	  if(ano.length==4 || ano.length==3)
		if(ano < 1900)
		{
		  if (aviso==1)
		  {
			 alert('Data Inválida: dia, mês ou ano fora do escopo.');
		  }
		  return false;
		}                
	} 
	
	var strNovaData = strZero(dia,2)+"/"+strZero(mes,2)+"/"+ano;
	
	if(dia<1 || dia>31 || mes<1 || mes>12 ) {
	  if (aviso==1) {
		 alert('Data Inválida: dia, mês ou ano fora do escopo.');
	  }
	  return false;
	}
	if ((mes==4 || mes==6 || mes==9 || mes==11) && dia>30) {
	  if (aviso==1) {
		 alert('Data Inválida: Este mês não pode ter mais do que 30 dias.');
	  }
	  return false;
	}
	if(mes==2) {
	  if(dia>29) {
		 if (aviso==1) {
			alert('O mês é fevereiro e o dia não pode ser maior que 29.');
		 }
		 return false;
	  }
	  if(dia==29 && ! (Bissexto(ano)) ) {
		 if (aviso==1) {
			alert('Data inválida: Esse ano não é bissexto.');
		 }
		 return false;
	  }
	}
	if (FormOk==false) {
		alert("Data Inválida");
		cpoData.focus();
		return false;
	}
	if (FormOk)
		cpoData.value=strNovaData;
	
	return (FormOk);
}

function ValidaData6(cpoData,aviso) 
{
	var strDataAux = cpoData.value;
	var strData = "01/"+cpoData.value;
	
	if (strData.length==6)
	   strData = strData.substr(0,2)+"/"+strData.substr(2,2)+"/"+strData.substr(4,2);
	else if (strData.length==8 && NaoBarra(strData))
	   strData = strData.substr(0,2)+"/"+strData.substr(2,2)+"/"+strData.substr(4,4);
	
	var datePat=/^(\d{1,2})(\/|-|.)(\d{1,2})\2(\d{2,4})$/;
	var datadiv = strData.match(datePat);
	
	datadiv = strData.match(datePat);
	
	if (strData.length==0)
	  return true;
	
	if (datadiv==null)
	{
	 alert('Data Inválida: Caracteres não permitidos ou tamanho inválido');
	 cpoData.value="";
	 cpoData.focus();
	 return false;
	}
	
	var dia     = datadiv[1];
	var mes     = datadiv[3];
	var ano     = datadiv[4];
	var FormOk  = true;
	
	if (ano.length < 3)
	{
	 if (parseInt(ano) > 30)
	  {
		 ano = parseInt(ano)+1900; 
	  }
	  else
	  {
		 ano = parseInt(ano)+2000;
	  }
	}
	else
	{
	  if(ano.length==4 || ano.length==3)
		if(ano < 1900)
		{
		  if (aviso==1)
		  {
			 alert('Data Inválida: dia, mês ou ano fora do escopo.');
		  }
		  return false;
		}                
	} 
	
	var strNovaData = strZero(dia,2)+"/"+strZero(mes,2)+"/"+ano;
	
	if(dia<1 || dia>31 || mes<1 || mes>12 ) {
	  if (aviso==1) {
		 alert('Data Inválida: dia, mês ou ano fora do escopo.');
	  }
	  return false;
	}
	if ((mes==4 || mes==6 || mes==9 || mes==11) && dia>30) {
	  if (aviso==1) {
		 alert('Data Inválida: Este mês não pode ter mais do que 30 dias.');
	  }
	  return false;
	}
	if(mes==2) {
	  if(dia>29) {
		 if (aviso==1) {
			alert('O mês é fevereiro e o dia não pode ser maior que 29.');
		 }
		 return false;
	  }
	  if(dia==29 && ! (Bissexto(ano)) ) {
		 if (aviso==1) {
			alert('Data inválida: Esse ano não é bissexto.');
		 }
		 return false;
	  }
	}
	if (FormOk==false) {
		alert("Data Inválida");
		cpoData.focus();
		return false;
	}
	if (FormOk)
		cpoData.value=strNovaData;
	
	cpoData.value = strDataAux;
	return (FormOk);
}


function strZero(nNumero,nBytes)
{
   var strRetorno;
   if (nNumero.length==nBytes)
      return nNumero;
   else
   {
      strRetorno=nNumero;
      for (var i=1;i<=nBytes-nNumero.length;i++)
         strRetorno ="0"+strRetorno;
      return strRetorno;
   }
}


function Bissexto(ano)
{
   if (ano % 100 == 0) {
      if (ano % 400 == 0) {
         return true;
      }
   }
   else {
      if ((ano % 4) == 0) {
         return true;
      }
      return false;
   }
}

function DataMaior(dtInicio,dtAtual)
{
   var dtIni   = dtInicio.value.substr(6,4)+dtInicio.value.substr(3,2)+dtInicio.value.substr(0,2);
   var dtFim   = dtAtual.value.substr(6,4)+dtAtual.value.substr(3,2) +dtAtual.value.substr(0,2);

   var dtResult = dtIni - dtFim ; 

   //alert(dtResult);

   if(dtResult < 0)
   {
      alert("Data deve ser igual ou posterior a hoje.");
	  dtInicio.value="";
	  dtInicio.focus();
	  return false;
   }
   else
   {
      return true;
   }
}

function ValidaEmail(cpoEmail,aviso)
{
   var chars="@#$&[]()/\\\{}!^:'\"";
   var pat=/^(.+)@(.+)$/;
   var emaildiv = cpoEmail.value.match(pat);
   var formOk = true;
   var strMaiusculo="";

   if (cpoEmail.value.length==0)
      return true;

   if (cpoEmail.value.toUpperCase()==cpoEmail.value)
   {
	  strMaiusculo ="Seu e-mail foi digitado em letras maiúsculas. ";
	  strMaiusculo+="Você tem certeza de que isso está correto?\n";
	  strMaiusculo+="Normalmente os endereços de e-mail são em letras minúsculas.\n";
	  strMaiusculo+="Por favor, se estiver errado corrija, para evitar transtornos no ";
	  strMaiusculo+="recebimento das mensagens direcionadas à você.";
	  alert(strMaiusculo);
   }
  
   if (emaildiv==null)
      formOk = false;
   else
   {
      var login =emaildiv[1];
      var server=emaildiv[2];
      for(var i=0;i<chars.length;i++)
         if(login.indexOf(chars.substr(i,1))!=-1)
            formOk = false;
      for(var i=0;i<chars.length;i++)
         if(server.indexOf(chars.substr(i,1))!=-1)
            formOk = false;
   }
   if (cpoEmail.value.indexOf("@.")!=-1)
   {
      formOk = false;
   }
   
   if (!formOk)
   {
      if (aviso==1)
         alert("Email inválido: Caracteres não permitidos, ou formação inválida.");
      cpoEmail.focus();
   }
   return formOk;
}

function ValidaInteiro(objNumero,aviso)
{
   if (objNumero.value.length > 0)
   {
	  nValor = parseInt(objNumero.value);
      if (isNaN(nValor))
      {
         if (aviso==true)
            alert("Número Inválido: Você deve informar um número Inteiro.");
         objNumero.value=0;
         objNumero.focus();
         return false;
      }
      else
      {
         objNumero.value=nValor;
         return true;
      }
   }
}