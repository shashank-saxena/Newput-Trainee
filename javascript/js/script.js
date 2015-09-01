var errors = 0 ;
function validate(){
    	var notempty = [];
    	$(".required").each(function() {
    		  if($( this ).val()==''){
    			  errors++;
    			  validateName($( this ).val(), this.name);
    			  $('#err-msg').css('display','block');
    			  $('#err-msg').html('Please fill out required feilds.*');
    			  return false;
    		  } else{
    			  var name = this.name;
    			  notempty[name] = $( this ).val();
    			  $('#err-msg').css('display','none');
    			  $('#err-msg').html('');
    		  }
    	});
    
    	if(errors==''){
    		var element ;
    		for(element in notempty){
        		if((element=='firstname') || (element=='Lastname')){
        			validateName(notempty[element], element);
        			if(errors!=''){
        				break;
        			}
        		} else if(element=='email'){
        			validateEmail(notempty[element], element);
        			if(errors!=''){
        				break;
        			}
        		} else if(element=='pwd'){
        			validatePwdLen(notempty['pwd'], notempty['cpwd']);
        		}
        }
    		
    	}
    if(errors==''){
    		return true;
    } else{
    		return false;
    }
    	
   }
    /* validate name feilds*/
   function validateName(value, label){
	   var regex = /^[a-zA-Z ]+$/;
	   if((regex).test(value)){
		   $('#err-msg').html('');
		   return true;
	   } else {
		   errors++;
		   $('#err-msg').css('display','block');
		   $('#err-msg').html('Please enter valid values in name feild.');
		   return false;
	   }
   }
   
   /* validate email feilds */
   function validateEmail(value, label){  
	   var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	   if(filter.test(value)) {
		   $('#err-msg').html('');
		   return true;
	   } else {
		   $('#err-msg').html('please enter valid email address.')
		   return false;
	   }
   }
   /* validate password length */
   function validatePwdLen(pwd, cpwd){
	   if(pwd.length<5){
		   errors++;
		   $('#err-msg').html('Password should be greator than or equal to 5 charactors.');
		   $('#err-msg').css('display','block');
		   return false;
	   } else{
		   $('#err-msg').css('display','none');
		   $('#err-msg').html('');
		   validatePassword(pwd, cpwd);
		   return true;
	   }
   }
   /* validate password feilds*/
   function validatePassword(pwd, cpwd){
	   if(pwd==cpwd){
		   $('#err-msg').html('');
		   return true;
	   } else{
		   errors++;
		   $('#err-msg').css('display','block');
		   $('#err-msg').html('Make sure password shoulb be same.');
		   return false;
	   }
   }