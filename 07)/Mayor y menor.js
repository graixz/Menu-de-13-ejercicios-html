function float(){
    var n1=parseFloat(document.resultados1.num1.value);
    var n2=parseFloat(document.resultados1.num2.value);

     if(n1==n2){
        alert("Joa mani estos numeros son iguales")
    }
    if(n1>n2){
        document.resultados1.mayor.value=n1;
        document.resultados1.menor.value=n2;
    }
    if(n1<n2){
        document.resultados1.mayor.value=n2;
        document.resultados1.menor.value=n1;
    }

}