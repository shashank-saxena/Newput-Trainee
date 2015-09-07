$(document).ready(function(){
	$('#validate-form').validate({
		rules: {
			firstname: {
				 required: true,
				 validText: true
			},
			lastname: {
				required: true,
				validText: true
			},
			email: {
				required: true,
				email: true
			},
			pwd: {
				required: true,
				minlength: 5
			},
			cpwd: {
				required: true,
				equalTo: "#pwd"
			},
			city: "required"
		},
		messages: {
			firstname: {
				required: 'First name is required.',
				minlength: 'First name should be atleast 2 characters long.',
				validText: 'please enter valid first name.'
			},
			lastname: {
				required: 'Last name is requierd.',
				minlength: 'Last name should be atleast 2 characters long.',
				validText : 'Please enter valid last name.'
			},
			email: {
				required: 'Email feild is required.',
				email: 'Please enter valid email.'
			},
			pwd: {
				required: 'Password is required.',
				minlength: 'Password should be 5 characters long.'
			},
			cpwd: {
				required: 'Confirm password is required.',
				equalTo: 'Please enter same password as above.'
			},
			city: "City is required."
		},
		errorElement: 'span',
		errorPlacement: function(error, element) {
			var el = $(element).parents('.form-group');
			error.insertAfter(el);
		},
		onfocusout: function(element){
			$('#validate-form').validate().element(element);
		}
	});
//	$('.mandatory').focusout(function() {
//		$('#validate-form').validate().element(this);
//    });
});
/* add custom validation for name */
jQuery.validator.addMethod("validText", function(value, element) {
	return this.optional(element) || /^[a-zA-Z ]+$/.test(value);
}, jQuery.validator.format("Please enter valid name"));
/* name validation end */

/* length validation */
jQuery.validator.addMethod("length", function(value, element) {
	return this.optional(element) || value.length > 2;
}, jQuery.validator.format("Name should be 2 characters long."));
/* length validation end */

/* create a new class for adding length validation*/
jQuery.validator.addClassRules("len",{length: true});
/* length validation end */