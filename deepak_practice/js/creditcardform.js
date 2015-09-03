	        function creditcardWraper() {        	
	        	
	        	$('.credit-card').validateCreditCard(function(result) {
		            $('.log').html('Valid: ' + result.valid);
		                    
		        });
	
	    		// validate signup form on keyup and submit
	    		$("#commentForm").validate({
	    			rules: {
	    				firstname: {
	    					required: true,
	    					minlength: 2,
	    				},
	    				email: {
	    					required: true,
	    					email: true,
	    				},
	    				creditcard: {
	    					required: true,
	    					minlength: 10,
	    				},
	    				expirationDate: "required",
	    				cvs: "required",
	    				street: "required",
	    				city: "required",
	    				state: "required",
	    				country: "required",
	    			},
	    			messages: {
	    				firstname: "Please enter your Firstname",
	    				email: "Please enter a valid email address",
	    				creditcard: "Please enter a valid credit card number",
	    				expirationDate: "Please select Expiration Date",
	    				cvs: "Please enter CVS",
	    				city: "Please enter City",
	    				state: "Please enter State",
	    				country: "Please enter Country",
	    			}
	    		});
	    		
	    		$("#street").geocomplete({	
					  details: ".geo-details",
					  detailsAttribute: "data-geo"
					 
				});
	    		
	    		$('#expirationdate').datepick();	
	        };		