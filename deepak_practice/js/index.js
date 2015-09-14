
$(document).ready(function(){
	var requestUrl = "http://it-ebooks-api.info/v1/search/php%20mysql";
	var html = new getHtml();
	html.requestWrapper(requestUrl);
	html.actionActivity();
});

var gHtml = new getHtml();
gHtml.requestWrapper(requestUrl)


function getHtml() {
	
	var privateProperties = null;
	this.publicProperties = null;
	
	var container=this;
	this.requestWrapper = function(requestUrl){
		$.ajax({url:requestUrl,
			success:function(result){
				fetchHtml(result);
			},
			error:function(result){
				alert("Error Occurring!");
			}
		});
	}
	
var fetchHtml = function(result){
		   	var boxes = ""; 
			for(var i = 0; i < result.Books.length; i++){
			    boxes += getBoxHtml(result.Books[i]);		       
			}	
			$(".grid-container").html(boxes);
   
};
	
getBoxHtml = function(book){ 	     
	     
		    book.Description=descriptionSlicer(book.Description);
			var template = $('#gridWrapper').html();
			var html = Mustache.to_html(template, book);
			return html;	
}

this.actionActivity = function(){

		  $(document).on("click", ".pint-button", function(){
		  console.log($(this).attr("data-button-type"));
		  alert("Sending Attrinute to Database ....");
	});
	  
	      $(document).on("click", ".send-button", function(){
		  console.log('Id--'+$(this).attr("data-button-type"));	 	  
		  var url = "http://it-ebooks-api.info/v1/book/";
		  var id = $(this).attr("data-button-type");
		  url = url + id;	  
		  $(".pagination-box").html("");
		  bookRequestWrapper(url);
	});
	  
	      $(document).on("click", ".like-button", function(){
		  console.log($(this).attr("data-button-type"));
		  var dataValue = $(this).attr("data-value");
		  if(dataValue == "Like"){
			  $(this).attr("data-value","Unlike");
			  $(this).text("Unlike");
		  }	  
		  if(dataValue == "Unlike"){
			  $(this).attr("data-value","Like");
			  $(this) .text("Like"); 	  
		  }	  
	});

	    $(document).on("click",".navmenutext",function(){
		console.log($(this).attr("data-book-type"));
		var bookType = $(this).attr("data-book-type");
		$('.navmenutext').removeClass('active');
		$(this).addClass("active");
		$(".grid-container").html('<div class="loading-indicator">Loading..</div>');
		var requestUrl="http://it-ebooks-api.info/v1/search/"+bookType;
		container.requestWrapper(requestUrl);	
		$(".pagination-box").html(paginationWrapper(bookType));	 	
	});    

	$(document).on("click",".pgDot",function(){
		
		console.log($(this).attr("data-page-number"));	
		console.log($(this).attr("data-book-type-page"));
		
		$(".pgDot").removeClass('active');
		$(this).addClass("active");
		
		var bookType = $(this).attr("data-book-type-page");
		var pageNumber = $(this).attr("data-page-number");
		//$(".pgDot").unbind("click");
		container.requestWrapper("http://it-ebooks-api.info/v1/search/"+bookType+"/page/"+pageNumber);
	});

}

descriptionSlicer = function(description){
	var descr = description.slice(0,100);
	return descr;
}

bookRequestWrapper = function(requestUrl){
	$.ajax({url:requestUrl,
		success:function(result){
			bookDataWrapper(result);	
		},
	    error:function(result){
	    	alert("Error Occurring!");
		  }		 
	 });	  
	
}	

bookDataWrapper = function(book){
	//alert(book.Title);
	var template = $('#bookWrapper').html();
	var html = Mustache.to_html(template, book);
		
	$(".grid-container").html(html);	
}
	
paginationWrapper = function(bookType){
	
	var template = $('#paginationWrapper').html();
	var html = Mustache.to_html(template, bookType);
		
	$(".pagination-box").html(html);	


}

}










	
	
