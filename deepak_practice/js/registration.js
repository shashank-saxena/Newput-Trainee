  function loadJs() {
	
	$('#date-of-birth').datepick();	
	 
	$('#first-name').blur(function() {
		var firstName=$(this).val();
		if(firstName) { hideError("#first-name", "hidden-message"); }
		else { showError("#first-name", "error-show"); }
	});

	$('#last-name').blur(function() {
		var lastName=$(this).val();
		if(lastName) { hideError("#last-name", "hidden-message"); }
		else { showError("#last-name", "error-show"); }
	});

	$('#email').blur(function() {
		var email=$(this).val();
		var emailRex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var is_email=emailRex.test(email);
		if(email) {
		    if(is_email) { hideError("#email", "hidden-message"); }
			else { var message = "Incorrect Email!"; showErrorMessage("#email", "error-show",message) }
		}	
		else { showError("#email", "error-show"); }
	});

	$('#date-of-birth').blur(function() {
        setTimeout(function() { 
        	var dob=new Date($('#date-of-birth').val());
	        if(dob) { hideError("#date-of-birth", "hidden-message"); }
	        else { showError("#email", "error-show"); }
	    
	        var today=new Date();
	        var dayDiff = Math.ceil(today - dob) / (1000 * 60 * 60 * 24 * 365);
	        var age = parseInt(dayDiff);
	        $('#age').val(age);
	    }, 1500);
       
	});
	
	$('#password').blur(function() {
	    var password=$(this).val();
	    if(password) { hideError("#password", "hidden-message"); }
	    else { showError("#password", "error-show"); }
	});
	
	$('#confirm-password').blur(function() {
	    var coonfirmPassword=$(this).val();
	    
	    if(coonfirmPassword) {
		    if($(password).val()==coonfirmPassword) { hideError("#confirm-password", "hidden-message"); }
		    else { var message= "Confirm Password are not mathing"; showErrorMessage("#confirm-password", "error-show",message); }
		}
	    else { showError("#confirm-password", "error-show"); }
	});
	
	var showError = function showError(id,changeClass,message) {
		 $(id).next().removeClass("hidden-message").addClass(changeClass); 
		
	}
	
	var hideError = function(id,changeClass) {	
		$(id).next().removeClass("error-show").addClass(changeClass);
		
	}
	
	var showErrorMessage = function showErrorMessage(id,changeClass,message) {
		$(id).next().removeClass("hidden-message").addClass(changeClass).text(message);
	}
 }
