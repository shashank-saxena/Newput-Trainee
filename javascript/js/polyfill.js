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
var PageHandler = function(){
	booksById = '';
	var _elem = '';
	var _renderId = '';
	var _link = '' ;
	var _className = '';
	var _id = '';
	var _linkId = '';
	var desc = '';
	var _rendered = '';
	this.book = function(elem, renderId){
		_elem = elem;
		_renderId = renderId;
		$('.'+_elem).click(function(){
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
					_desc = data.Books[book].Description;
					data.Books[book].shortDescription = _desc.substr(0,50);
					_id = 'key-'+book;
					data.Books[book].id = _id;
				}
				 booksById = data;
				_renderTemplate(data, _renderId, 'mustache-template.js');
			}).error(function(){
				console.log('error');
			});
		});
	}
	var _renderTemplate = function(data, renderId, templateName){
		$.ajax({
			  url: 'templates/'+templateName,
			  method : 'GET',
			  dataType: 'html'
			}).success(function(template){
				Mustache.parse(template); 
				_rendered = Mustache.render(template, data);
				$("#"+renderId).html(_rendered);   
		});
	}
	
	this.defaultStatus = function(elem, className, renderId){
		_elem = elem;
		_className = className;
		if($('.'+_elem).hasClass('active')){
			$('.'+_className).trigger('click');
		}
	}
	
	this.activeLink = function(linkId, className){
		_linkId = linkId;
		_className = className;
		$('.'+_linkId).click(function(event){
			var _tag = event.currentTarget.nodeName.toLowerCase();
			$(_tag+'.'+_linkId).each(function(){
				if($(this).hasClass(className)) {
					$(this).removeClass(className)
				}
			});
			$(this).addClass(className);
		});
	}
	
	this.showPopUp = function(event, container){
		var _bookId = event;
		_arr = _bookId.split('-');
		_bookId = _arr['2'];
		_renderId = container;
		_renderTemplate(booksById.Books[_bookId], _renderId, 'article-template.js');
		
	}
	
	this.emptyPopup = function(container){
		$('#'+container).html('');
	}
}
/*end of classes*/