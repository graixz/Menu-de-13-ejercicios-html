function calcula_cantidad(){

	var a =parseFloat(document.form.n1.value);

	if(a>=0 & a<=9){
		document.form.resp.value=("este numero tiene 1 cifra");
		
	}
	else if(a>=10 & a<=99){
		document.form.resp.value=("este numero tiene 2 cifra");
	}
	else if(a>=100 & a<=999){

		document.form.resp.value=("este numero tiene 3 cifra");
	}
	else if(a>=1000 & a<=9999){
		document.form.resp.value=("este numero tiene 4 cifra");
	}
	else if(a>=10000 & a<=99999){
		document.form.resp.value=("este numero tiene 5 cifra");
	}
	else if(a>=100000 & a<=999999){
		document.form.resp.value=("este numero tiene 6 cifra");
	}
	else if(a>=1000000){
		alert(":: este numero supera los valores requeridos::");
	}
	else if(a<=0){

		alert(":: este número no alcanza los valores rqueridos ::")
	}

}