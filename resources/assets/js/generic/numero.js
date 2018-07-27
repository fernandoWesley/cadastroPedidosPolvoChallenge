function SomenteNumero(campo){
	var digits="0123456789"
	var campo_temp 
	for (var i=0;i<campo.value.length;i++){
	  campo_temp=campo.value.substring(i,i+1)	
	  if (digits.indexOf(campo_temp)==-1){
		    campo.value = campo.value.substring(0,i);
		    break;
	  }
	}
}

function float2moeda(num) {

	   x = 0;

	   if(num<0) {
	      num = Math.abs(num);
	      x = 1;
	   }
	   if(isNaN(num)) num = "0";
	      cents = Math.floor((num*100+0.5)%100);

	   num = Math.floor((num*100+0.5)/100).toString();

	   if(cents < 10) cents = "0" + cents;
	      for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	         num = num.substring(0,num.length-(4*i+3))+'.'
	               +num.substring(num.length-(4*i+3));
	      ret = num + ',' + cents;
	      if (x == 1) ret = ' - ' + ret;return ret;

}

function moeda2float(moeda){

	   moeda = moeda.replace(".","");

	   moeda = moeda.replace(",",".");

	   return parseFloat(moeda);

	}

function DigitaNumero(campo)
{
 var valid    = "0123456789";
 var numerook = "";
 var temp;
  
    
  for (var i=0; i< campo.value.length; i++) {
    temp = campo.value.substr(i, 1);
    if (valid.indexOf(temp) != "-1") 
      numerook = numerook + temp;
  }
   
 campo.value = numerook;

}

function FormatoMoeda(campo)
{
   
   var Moeda = SoNumero(campo.value);
   var MoedaAux = ''; 
   var campo1 = campo.value;
   var ponto = 3;

   
     for (var i=Moeda.length; i > 0; i--) {
     
       if ((i == Moeda.length - 2) && (Moeda.length > 2)){
         
         MoedaAux =  "," + MoedaAux;
         ponto = 3;
        }
       if ((ponto == 0) && (Moeda.length > 5)){
         MoedaAux =  '.' + MoedaAux;
         ponto = 3;
        }               
       MoedaAux = Moeda.substr(i-1,1) + MoedaAux;     
       ponto --;
      }  
     campo.value = MoedaAux;

}

function MascaraNumeroDecimal(campo)
{
   
   var Numero = SoNumero(campo.value);
   var MoedaAux = ''; 
   var campo1 = campo.value;
   var ponto = 3;

     for (var i=Numero.length; i > 0; i--) {
     
       if ((i == Numero.length - 2) && (Numero.length > 2)){
         MoedaAux =  "." + MoedaAux;
         ponto = 3;
        }
       
       MoedaAux = Numero.substr(i-1,1) + MoedaAux;     
       ponto --;
      }  
     campo.value = MoedaAux;

}

