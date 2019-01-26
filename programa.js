// Programa para executar comandos em JavaScript

function darBoasVindas(stnome,fidade){ // criando uma função para exibir um pop-up google
    var stnome=document.getElementById("campNome")
    var fidade=document.getElementById("campNumero")
    var c;

    
    if (stnome.value==0) {
        c=alert("Campo de Nome Inválido")
    } else {
        c=alert("Aproveita aí, "+ stnome.value +" de "+ fidade.value +" anos !")    
    }
      
   
        
}