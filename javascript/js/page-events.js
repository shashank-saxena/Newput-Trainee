 /*js class */
var BookComponent = function(){
	var activeClassName = '';
	var cellTemplateData = '';
	var modalTemplateData = '';
	var pageCount = 1;
	var whichBook = '';
	var cellTemplateId = '';
	var modalTemplateId = '';
	var booksById = '';
	var scrollStatus = 'false';
	var bookApiObj = {php: "http://it-ebooks-api.info/v1/search/php/page/", javas: "http://it-ebooks-api.info/v1/search/java/page/", mysql: "http://it-ebooks-api.info/v1/search/mysql/page/"};
	this.init = function(cellTemplateClass, modalTemplateClass, className){
		cellTemplateData = _parseTemplate(cellTemplateClass);
		modalTemplateData = _parseTemplate(modalTemplateClass);
		activeClassName = className ;
		if($('.'+activeClassName).hasClass('active')){
			whichBook = $('.'+activeClassName).attr('data-atribute');
		}
		cellTemplateId =  $('.'+cellTemplateClass).attr('id');
		modalTemplateId =  $('.'+modalTemplateClass).attr('id');

		/* define custom events */
		$('#'+cellTemplateId).on('emptyCheck', function(){
			alert('Data has been successfully loaded!!');
		});

		$('.active').on('loadMoreData', function(){
			var parameter = $(this).attr('data-atribute');
			var url = _determineApiUrl(parameter, bookApiObj);
			_loadData(url, cellTemplateData, cellTemplateId, scrollStatus);
		})

		$(document).on('click', '.more-detail', function(event){
			//console.log(event.target.id);
    		_showPopUp(event.target.id, modalTemplateId, modalTemplateData);
  		});

  		$(document).on('click', '.close', function(event){
    		_closePopup(modalTemplateId);
  		});

  		$(window).scroll(function(){ 
	        if($(window).scrollTop() + 424 == $(document).height()){
	         	var url = _determineApiUrl(whichBook, bookApiObj);
	         	scrollStatus = 'true';
	         	_loadData(url, cellTemplateData, cellTemplateId, scrollStatus);
	        }
  		});

		var url = _determineApiUrl(whichBook, bookApiObj);
		_loadData(url, cellTemplateData, cellTemplateId, scrollStatus);
	}
	var _parseTemplate = function(templateId){
		var templateVar = $('#'+templateId).html();
		Mustache.parse(templateVar);
		return templateVar;
	}
	
	var _determineApiUrl = function(whichBook, bookApiObj){
		var apiUrl = ''; 
		if(whichBook == 'php'){
			apiUrl = bookApiObj.php;
		}else if(whichBook == 'javas') {
			apiUrl = bookApiObj.javas;
		}else {
			apiUrl = bookApiObj.mysql;
		}
		apiUrl = apiUrl+pageCount;
		return apiUrl;
	}

	var _showPopUp = function(bookId, modalTemplateId, parseModalData){
		var arr = bookId.split('-');
		bookId = 'book-'+arr['2'];
		for(var index in booksById ){
			if(booksById.Books.ID == bookId){
				console.log(booksById.Books.ID);
				break;
			}
		}
		//var modalData = booksById.Books[ID]; console.log(modalData);
		// var rendered = Mustache.render(parseModalData, modalData);
		// $('#'+modalTemplateId).html(rendered);

	}

	var _closePopup = function(modalTemplateId){
		$('#'+modalTemplateId).html('');
	}

	var _loadData = function(url, parseTemplateData, cellTemplateId, scrollStatus){
		$.ajax({
				url: url,
				method : 'GET'
			}).success(function(data){
				var i = 0; 
				var j = 0;
				for(i; i < data.Books.length; i++){
					var desc = data.Books[j].Description;
					data.Books[i].shortDescription = desc.substr(0,50);
					data.Books[i].ID = 'book-'+data.Books[i].ID;
				}
				booksById = data;
				console.log(booksById);
				var rendered = Mustache.render(parseTemplateData, booksById);
				$('#'+cellTemplateId).append(rendered);
				if(scrollStatus == 'true'){
					$('#'+cellTemplateId).append(rendered);
				}else {
					$('#'+cellTemplateId).html(rendered);
				}
				$('#'+cellTemplateId).trigger('emptyCheck');
				pageCount++;
			}).error(function(){
				console.log('error');
		});
	}

	this.bookSwitching = function(){
		$('.'+activeClassName).click(function(){
			$('.'+activeClassName).removeClass('active');
			$(this).addClass('active');
			whichBook = $(this).attr('data-atribute');
			var url = _determineApiUrl(whichBook, bookApiObj);
			pageCount = 1;
			scrollStatus = 'false';
			_loadData(url, cellTemplateData, cellTemplateId, scrollStatus);
		});
	}
}