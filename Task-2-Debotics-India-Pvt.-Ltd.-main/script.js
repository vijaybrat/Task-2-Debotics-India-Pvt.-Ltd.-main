
function sin(){
	document.calcul.result.value=Math.sin(document.calcul.result.value);
	}

	function cos(){
	document.calcul.result.value=Math.cos(document.calcul.result.value);
	}

	function tan(){
	document.calcul.result.value=Math.tan(document.calcul.result.value);
	}

	function BACKSPC(){
	var a = document.calcul.result.value;
	document.calcul.result.value = a.substr(0, a.length-1);
	}

	function square(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 2);
	}

	function cubed(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 3);
	}

	function sqrt2(){
        // Error Handling Code
        try{
            if(document.calcul.result.value <0){
                throw("Can't calculate sqrt of negative value")
            }
            else {
                document.calcul.result.value = Math.pow(document.calcul.result.value, 1/2);
            }

        }
	catch(e) {
       alert("Error: " + e); 
       document.calcul.result.value =" ";
    }
	}

	function sqrt3(){
	document.calcul.result.value = Math.log10(document.calcul.result.value);
	}

	function number(value){
	document.calcul.result.value += value;
	}

	function remv(){
	document.calcul.result.value=" ";
	}

	function equal(){
       var k =eval(document.calcul.result.value);
    //   Error Handling Code
        try{
            
            if(k=='Infinity'){
                throw("Can't Divive by Zero.")
            }
            else{
                document.calcul.result.value = k;
            }
           
        }
        catch(m){
          alert("Division Error:"+m);
          document.calcul.result.value=" ";
        }
        
        
	}

