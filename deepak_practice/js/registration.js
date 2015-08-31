$(document).ready(function() {

	$('#example').datepick();	

	$('#fisrtName').blur(function() {
		var fName=$(this).val();
		if(fName) {
		    $('#fisrtName').next().removeClass("error-show").addClass("error");}
		else {
			 $('#fisrtName').next().removeClass("error").addClass("error-show");}
	});

	$('#lastName').blur(function() {
		var lName=$(this).val();
		if(lName) {
			$('#lastName').next().removeClass("error-show").addClass("error");}
		else {
			$('#lastName').next().removeClass("error").addClass("error-show");}
	});

	$('#email').blur(function() {
		var email=$(this).val();
		var emailRex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		var is_email=emailRex.test(email);
		if(is_email) {
			$('#email').next().removeClass("error-show").addClass("error");}
		else {
			$('#email').next().removeClass("error").addClass("error-show");}
	});

	$('#example').blur(function() {
        setTimeout(function() { 
        	var dob=new Date($('#example').val());
	        if(dob) {
	        	$('#example').next().removeClass("error-show").addClass("error");}
	        else {
	        	$('#example').next().removeClass("error").addClass("error-show");}
	    
	        var today=new Date();
	        var dayDiff = Math.ceil(today - dob) / (1000 * 60 * 60 * 24 * 365);
	        var age = parseInt(dayDiff);
	        $('#age').val(age);
	     }, 2000);
       
	});

	$('#age').blur(function() {
	    var age=$(this).val();
	    if(age) {
	    	$('#age').next().removeClass("error-show").addClass("error");}
	    else {
	    	$('#age').next().removeClass("error").addClass("error-show");}
	});
	
	$('#password').blur(function() {
	    var password=$(this).val();
	    
	    if(password) {
	    	$('#password').next().removeClass("error-show").addClass("error");}
	    else {
	    	$('#password').next().removeClass("error").addClass("error-show");}
	});
	
	$('#confirmPassword').blur(function() {
	    var coonfirmPassword=$(this).val();
	    
	    if(coonfirmPassword) {
		    if($(password).val()==coonfirmPassword) {
		    	$('#confirmPassword').next().removeClass("error-show").addClass("error");}
		    else {
		    	$('#confirmPassword').next().removeClass("error").addClass("error-show").text("Confirm Password are not mathing");
		    }
		}
	    else {
	    	$('#confirmPassword').next().removeClass("error").addClass("error-show");}
	});
	
});
