/* extend string method */
String.prototype.stringConvertor = function(){
	var alphaObj = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seaven", 8: "eight", 9: "nine"};
	var ob = this;
	var str = new String;
	for(var val in ob){
		var localRef = '';
		if(typeof(ob[val]) != "function"){
			if((isNaN(parseInt(ob[val])) == true)){
	            localRef = ob[val];
	        }else{
	            var vl = ob[val];
	            var newString = alphaObj[vl];
	            localRef = newString;
	        }
		}
		str += localRef; 
    }
	return str;
}
/* extend string method end */
/* extend date method */
Date.prototype.dateDifference = function(){
	var currentDate = new Date();
	var toDate = this;
	var timeDiff = Math.abs(toDate.getTime() - currentDate.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	return diffDays;
}
/* extend date method end */

/* checking value should not be undefined, null , empty*/
String.prototype.isEmpty = function(){
	var val = this;
	return (val === undefined || val == null || val.length <= 0) ? false : true;
}

/* js class */
var PageHandler = function(elem, renderId){
	this.elem = elem;
	this.renderId = renderId;
	var link = '' ;
	this.book = function(){
		$('.'+this.elem).click(function(){
			var status = $(this).attr('data-atribute');
			if(status == 'php'){
				link = 'http://it-ebooks-api.info/v1/search/php%20mysql';
			}else if(status == 'java'){
				link = 'http://it-ebooks-api.info/v1/search/java';
			}else{
				link = 'http://it-ebooks-api.info/v1/search/mysql';
			}
			$.ajax({
				url: link,
				method : 'GET'
			}).success(function(data){
				for(book in data.Books){
					var desc = data.Books[book].Description;
					data.Books[book].Description = desc.substr(0,50);
				}
				_renderTemplate(data);
			}).error(function(){
				console.log('error');
			});
		});
	}
	var _renderTemplate = function(data){
		$.ajax({
			  url: 'templates/mustache-template.js',
			  method : 'GET',
			  dataType: 'html'
			}).success(function(template){
				Mustache.parse(template); 
				var rendered = Mustache.render(template, data);
				$("#"+renderId).html(rendered);   
		});
	}
}
/*end of classes*/

/* on document ready event */
$(document).ready(function(){
	var fromDate = new Date("09/07/2015");
	var result = fromDate.dateDifference();
	$('.date-result').append(result+' Days left.');
	$('#str-convertor').click(function(){
        var inputVal = $('#input-box').val();
        if(inputVal.isEmpty()){
        	   var newValue = inputVal.stringConvertor();
           $('.result').html(newValue);
        }else {
        	 $('.result').html('Please enter some value in text.');
        }
    });
	
	/* calling of class */
	var clickLink = new PageHandler('book-data', 'unique');
	console.log(clickLink);
	clickLink.book();
	/* end of calling */
	
});
/* on document ready event end */