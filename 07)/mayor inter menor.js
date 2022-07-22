function resultados(){
    var numero1= parseFloat(document.resultados1.Numero1.value);  
    var numero2= parseFloat(document.resultados1.Numero2.value); 
    var numero3= parseFloat(document.resultados1.Numero3.value); 

if(numero1<numero2 & numero2<numero3){    ///* if para una probabilidad de cual sera el menor mayor y intermedio*/
document.resultados1.resulmayor.value= numero3;  
document.resultados1.resulmenor.value= numero1;
document.resultados1.resulintermedio.value= numero2;
}
else if (numero2<numero1 & numero1<numero3){ /* 2 if para una probabilidad de cual sera el menor mayor y intermedio*/
document.resultados1.resulmayor.value= numero3;  
document.resultados1.resulmenor.value= numero2;
document.resultados1.resulintermedio.value= numero1;
}
else if (numero1>numero2 & numero2<numero1){
document.resultados1.resulmayor.value= numero1;
document.resultados1.resulmenor.value= numero3;
document.resultados1.resulintermedio.value= numero2;
} 
else if (numero3>numero1 & numero1<numero2){
document.resultados1.resulmayor.value= numero2;
document.resultados1.resulmenor.value= numero1;
document.resultados1.resulintermedio.value= numero3;
}  
else if (numero2>numero3 & numero3<numero1){
document.resultados1.resulmayor.value= numero2;
document.resultados1.resulmenor.value= numero3;
document.resultados1.resulintermedio.value= numero1;
} 
else if (numero3>numero2 & numero2<numero1){
document.resultados1.resulmayor.value= numero3;
document.resultados1.resulmenor.value= numero2;
document.resultados1.resulintermedio.value= numero1;
} 
else if (numero1>numero3 & numero3<numero2){
document.resultados1.resulmayor.value= numero1;
document.resultados1.resulmenor.value= numero3;
document.resultados1.resulintermedio.value= numero2;
}    
else if(numero1==numero2 & numero2==numero3 & numero3==numero1){
alert ("Joa maní todos son iguales")
}
else if(numero1==numero2 & numero3>numero1){ /* 8 if para una probabilidad de un igual menor y mayor*/
document.resultados1.resulmayor.value= numero3;  
document.resultados1.resulmenor.value= numero1;
document.resultados1.numeriguales.value= numero1;
document.resultados1.numeriguales.value= numero2;
}
else if(numero1==numero2 & numero3<numero1){ /* 9 if para una probabilidad de un igual menor y mayor*/
document.resultados1.resulmayor.value= numero1;  
document.resultados1.resulmenor.value= numero3;
document.resultados1.numeriguales.value= numero1;
document.resultados1.numeriguales.value= numero2;
}  
else if(numero2==numero3 & numero1>numero2){/* 10 if para una probabilidad de un igual menor y mayor*/
document.resultados1.resulmayor.value= numero1;  
document.resultados1.resulmenor.value= numero2;
document.resultados1.numeriguales.value= numero2;
document.resultados1.numeriguales.value= numero3;
}  
else if(numero2==numero3 & numero1<numero2){/* 11 if para una probabilidad de un igual menor y mayor*/
document.resultados1.resulmayor.value= numero2;  
document.resultados1.resulmenor.value= numero1;
document.resultados1.numeriguales.value= numero2;
document.resultados1.numeriguales.value= numero3;
}  
else if(numero1==numero3 & numero2>numero1){ /* 12 if para una probabilidad de un igual menor y mayor*/
document.resultados1.resulmayor.value= numero2;  
document.resultados1.resulmenor.value= numero1;
document.resultados1.numeriguales.value= numero1;
document.resultados1.numeriguales.value= numero3;
} 
else if(numero1==numero3 & numero2<numero1){  /*13 if para una probabilidad de un igual menor y mayor*/
document.resultados1.resulmayor.value= numero3;  
document.resultados1.resulmenor.value= numero2;
document.resultados1.numeriguales.value= numero3;
document.resultados1.numeriguales.value= numero1;
}
}