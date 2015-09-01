function validate(){
	errors = 0 ;
    	var notempty = [];
    	$(".required").each(function() {
    		var elem = $(this);
    		var name = this.name;
    		var inputVal = elem.val();
    		if(inputVal == ''){
    			//alert(elem.next().attr('class'));
    			if(elem.next().attr('class')!='err alert alert-warning'){
    				var errorElem = '<span class="err alert alert-warning">Please enter some value</span>';
        			elem.after(errorElem);
    			}
    		}
    		else{
    			var errorEl = elem.next();
    			errorEl.remove();
    			if(name=="firstname"){
    				notempty.push(validateName(inputVal, elem).toString());
    			}else if(name=="lastname"){
    				notempty.push(validateName(inputVal, elem).toString());
    			} else if(name=="email"){
    				notempty.push(validateEmail(inputVal, elem).toString());
    			} else if(name=="pwd"){
    				match = inputVal;
    				notempty.push(validatePwdLen(inputVal, elem).toString());
    			}else if(name=="cpwd"){
    				notempty.push(validatePassword(inputVal, elem, match).toString());
    			}
    		}
    	});
    	if(notempty.length > 0 && notempty.indexOf("false")==-1){
    		return true;
    	}else{
    		return false;
    	}
}

	function validateCity(value, label){
		if(value==''){
			//errors++;
			var errorElem = '<span class="err alert-danger">Please choose city.</span>';
			elem.after(errorElem);
			return false;
		}
		else{
			var errorEl = elem.next();
			errorEl.remove();
			return true;
		}
	}
    /* validate name feilds*/
   function validateName(value, elem){
	   var regex = /^[a-zA-Z ]+$/;
	   if(!(regex).test(value)){
		   //errors++;
		   var errorElem = '<span class="err alert alert-danger">Please enter valid value</span>';
		   elem.after(errorElem);
		   return false;
	   } else{
		   var errorEl = elem.next();
		   errorEl.remove();
		   return true;
	   }
   }
   /* validate email feilds */
   function validateEmail(value, elem){
	   var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	   if(filter.test(value)!=false) {
		   //errors++;
		   var errorEl = elem.next();
		   errorEl.remove();
		   return true;
	   } else{
		   var errorElem = '<span class="err alert-danger">Enter valid email address</span>';
		   elem.after(errorElem);
		   return false;
	   }
   }
   /* validate password length */
   function validatePwdLen(pwd, elem){
	   if(pwd.length<5){
		   errors++;
		   var errorElem = '<span class="err alert-danger">password should be greator than or equal to 5 characters</span>';
		   elem.after(errorElem);
		   return false;
	   } else{
		   var errorEl = elem.next();
		   errorEl.remove();
		   return true;
	   }
   }
   /* validate password feilds*/
   function validatePassword(cpwd, elem, pwd){
	   if(pwd==cpwd){
		   var errorEl = elem.next();
		   errorEl.remove();
		   return true;
	   } else{
		   var errorElem = '<span class="err alert-danger">password should match characters</span>';
		   elem.after(errorElem);
		   return false;
	   }
   }
   
function fetchBooksDetails(){
	var xmlhttp;
	if (window.XMLHttpRequest)
	{	// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
		var url = "http://it-ebooks-api.info/v1/search/php%20mysql";
		xmlhttp.open("GET",url,false);
		xmlhttp.send();
		var data = xmlhttp.responseText;
		//console.log(data);
		

	} else
	{	// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	console.log(xmlhttp);
	
}