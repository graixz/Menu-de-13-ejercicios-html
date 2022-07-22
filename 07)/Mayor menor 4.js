function resultado() {
    var num1= parseFloat(document.resultado1.num1.value);
    var num2= parseFloat(document.resultado1.num2.value);
    var num3= parseFloat(document.resultado1.num3.value);
    var num4= parseFloat(document.resultado1.num4.value);
    
    if(num1<num2 & num2<num3 & num3<num4)
    {
    document.resultado1.mayor.value=num4;
    document.resultado1.menor.value=num1;
    }
    
    else if(num1>num2 & num2>num3 & num3>num4){
    document.resultado1.mayor.value=num1;
    document.resultado1.menor.value=num4;
    }
    
    else if(num1>num4 & num4>num3 & num3>num2){
        document.resultado1.mayor.value=num1;
        document.resultado1.menor.value=num2;
        }
    
        else if(num1>num2 & num2>num4 & num4>num3){
            document.resultado1.mayor.value=num1;
            document.resultado1.menor.value=num3;
            }
    
    else if (num2>num1 & num1>num3 & num3>num4){
        document.resultado1.mayor.value=num2;
        document.resultado1.menor.value=num4;
    }
    
    else if(num2>num4 & num4>num3 & num3>num1){
        document.resultado1.mayor.value=num2;
        document.resultado1.menor.value=num1;
        }
    
    else if(num2>num1 & num1>num4 & num4>num3){
        document.resultado1.mayor.value=num2;
        document.resultado1.menor.value=num3;
        }
    
    else if (num3>num2 & num2>num1 & num1>num4){
        document.resultado1.mayor.value=num3;
        document.resultado1.menor.value=num4;
    }
    
    else if (num3>num4 & num4>num2 & num2>num1){
        document.resultado1.mayor.value=num3;
        document.resultado1.menor.value=num1;
    }
    
    else if (num3>num4 & num4>num1 & num1>num2){
        document.resultado1.mayor.value=num3;
        document.resultado1.menor.value=num2;
    }
    
    else if(num4>num2 & num2>num1 & num1>num3){
        document.resultado1.mayor.value=num4;
        document.resultado1.menor.value=num3;
        }
    
    else if(num4>num1 & num1>num3 & num3>num2){
        document.resultado1.mayor.value=num4;
        document.resultado1.menor.value=num2;
        }
    
    else if(num1==num2 & num2==num3 & num3==num4){
       alert("Todos son iguales")
    }
    
    else if(num1>num2 & num3==num4){
        document.resultado1.mayor.value=num1;
        document.resultado1.menor.value=num2;
        alert("el tercer y cuarto numero son iguales")
        }
    
        else if(num1>num3 & num4==num2){
            document.resultado1.mayor.value=num1;
            document.resultado1.menor.value=num3;
            alert("el cuarto y segundo numero son iguales")
        }
    
        else if(num1>num4 & num2==num3){
            document.resultado1.mayor.value=num1;
            document.resultado1.menor.value=num4;
            alert("el segundo y tercer numero son iguales")
        }
    
    else if(num2>num1 & num3==num4){
        document.resultado1.mayor.value=num2;
        document.resultado1.menor.value=num1;
        alert("el tercer y cuarto numero son iguales")
    }
    
    else if(num2>num3 & num1==num4){
        document.resultado1.mayor.value=num2;
        document.resultado1.menor.value=num3;
        alert("el primer y cuarto numero son iguales")
    }
    
    else if(num2>num4 & num1==num3){
        document.resultado1.mayor.value=num2;
        document.resultado1.menor.value=num4;
        alert("el primer y tercer numero son iguales")
    }
    
    else if(num3>num4 & num1==num2){
        document.resultado1.mayor.value=num3;
        document.resultado1.menor.value=num4;
        alert("el primer y segundo numero son iguales")
    }
    
    else if(num3>num2 & num1==num4){
        document.resultado1.mayor.value=num3;
        document.resultado1.menor.value=num2;
        alert("el primer y cuarto numero son iguales")
    }
    
    else if(num3>num1 & num4==num2){
        document.resultado1.mayor.value=num3;
        document.resultado1.menor.value=num1;
        alert("el cuarto y segundo numero son iguales")
    }
    
    else if(num4>num1 & num3==num2){
        document.resultado1.mayor.value=num4;
        document.resultado1.menor.value=num1;
        alert("el tercer y segundo numero son iguales")
    }
    
    else if(num4>num2 & num1==num3){
        document.resultado1.mayor.value=num4;
        document.resultado1.menor.value=num2;
        alert("el primer y cuarto numero son iguales")
    }
    
    else if(num4>num3 & num2==num1){
        document.resultado1.mayor.value=num4;
        document.resultado1.menor.value=num3;
        alert("el primer y segundo numero son iguales")
    }
    
    else if(num4 & num2==num1==num3){
        document.resultado1.mayor.value=num4;
        alert("el primer, segundo y tercer numero son iguales")
    }
    }