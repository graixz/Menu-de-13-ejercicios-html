function tablas(){
    var a = parseFloat(document.Form1.a1.value);

    while(a<1|a>50); //condicion
    for( var i = 1; i<=10; i++)// operacion
{
document.write(+a + 'x' +i+ '=' +a*i +'<br>'); // MUESTRA EN PANTALLA
}
}