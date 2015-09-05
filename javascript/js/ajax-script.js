//$(document).ready(function(){
	//renderPageContent();
//	$('.navigation li').click(function(){
//		$('.navigation li').each(function(){
//			if($(this).hasClass('active')){
//				$(this).removeClass('active');
//			}
//		})
//		$(this).addClass('active');
//		var page = $(this).attr('data-attribute');
//		if(page == "index"){
//			location.href = "file:///Users/newput/GitHub/Newput-Trainee/javascript/index.html";
//		} else{
//			//fetchBooksDetails();
//			callAjaxContent(page);
//		}
//	});
//});
function callAjaxContent(page){
	var url = page+".html";
	$.ajax({
		  url: url,
		  method : 'GET',
		  dataType: 'html'
		}).success(function(response, status){
			renderPageContent();
			$('.container').html(response);
		}).error(function(){
			console.log('error');
		});
}
/* native js function */
function fetchBooksDetailsJs(){
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		xmlhttp=new XMLHttpRequest();
		var url = "http://it-ebooks-api.info/v1/search/php%20mysql";
		xmlhttp.open("GET",url,false);
		xmlhttp.send();
		var data = xmlhttp.responseText;
		data = JSON.parse(data);
		if(data.Error == 0)
		{
			var book = '' ;
			var html = '';
			var books = data.Books;
			for(book in books)
			{
				var description = books[book].Description;
				if(description.length > 0){
					description = description.substr(0,100);
				}
				html += "<div class='columns'><div class='cell-wrapper'><img src='"+books[book].Image+"'/><div class='detail'><div class='short-detail'><span class='title'>"+books[book].Title+"</span><span class='author'>by Author</span></div><span class='description'>"+description+"...</span></div></div></div>";
			}
			$('.rows').html(html);
		}
	}
}
/* native js function end */

function renderPageContent(){
	var url = "http://it-ebooks-api.info/v1/search/php%20mysql";
	var data = '';
	$.ajax({
		  url: url,
		  method : 'GET'
		}).success(function(data){
			for(book in data.Books){
				var desc = data.Books[book].Description;
				data.Books[book].Description = desc.substr(0,50);
			}
			var template = $("#sample_template").html();
			Mustache.parse(template); 
			var html = Mustache.render(template, data);
			$("#unique").html(html);    
		}).error(function(){
			alert('error');
		});
}