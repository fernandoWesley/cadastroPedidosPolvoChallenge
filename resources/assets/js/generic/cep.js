function MascaraCEP(campo,w)
{
   var Cep = SoNumero(campo.value);
   var CepAux = ''; 
   var campo1 = campo.value;

   if (w.keyCode == 8) {      
     if (campo1.length == 5) {
        Cep = Cep.substr(0, Cep.length-1);
       } 
    }
    
   if (Cep.length < 9) {
     for (var i=0; i < Cep.length; i++) {
       CepAux = CepAux + Cep.substr(i,1);     
       if (i == 4) {
         CepAux = CepAux + "-";
        }
      }  
     campo.value = CepAux;
    }
   else {
      campo.value = campo.value.substr(0,10);
     }    
}