
$(document).ready(function(){
	requestWrapper("http://it-ebooks-api.info/v1/search/php%20mysql");
});
 
 
function requestWrapper(requestUrl){
	
	$.ajax({url:requestUrl,
	      success:function(result){
			    	fetchHtml(result)	
			      },
	      error:function(result){
			       alert("Error Occurring!");
			    }		 
	});
 }

function fetchHtml(result){
   	var boxes = ""; 
	for(var i = 0; i < result.Books.length; i++){
	    boxes += getBoxHtml(result.Books[i]);		       
	}	
	$(".grid-container").html(boxes);
	actionActivity();	
 }
function getBoxHtml(book){
	var htmlData='<div class="box-container">\
					<div class = "image-container">\
						 <img src="' + book.Image + '" alt="Practise" class="image-box" >\
					</div>\
					<div class="book-title">' + book.Title + '</div>\
					<div class="hr-line"></div>\
					<div class="book-description">' + descriptionSlicer(book.Description) + '...</div>\
					<div class="hr-line"></div>\
					<div class="bottom-description">\
					   <div class"bottom-description-inner">\
						<div class="bottom-description-button"><span class="pint-button"  data-button-type="pintit' + book.ID + '">&nbsp;Pint it &nbsp;</span></div>\
						<div class="bottom-description-button"><span class="send-button"  data-button-type="' + book.ID + '">View</span></div>\
						<div class="bottom-description-button"><span class="like-button"  data-value="Like" data-button-type="like' + book.ID + '">Like</span></div>\
					</div>\
					</div>\
			    </div>'				
	return htmlData;
}
function actionActivity(){

	$(".pint-button").click(function(){
		  console.log($(this).attr("data-button-type"));
		  alert("Sending Attrinute to Database ....");
	});
	  
	$(".send-button").click(function(){
		  console.log('Id--'+$(this).attr("data-button-type"));	 	  
		  var url = "http://it-ebooks-api.info/v1/book/";
		  var id = $(this).attr("data-button-type");
		   url = url + id;	  
		   bookRequestWrapper(url);
	});
	  
	$(".like-button").click(function(){
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

	$(".navmenutext").click(function(){
		console.log($(this).attr("data-book-type"));
		var bookType = $(this).attr("data-book-type");
		$('.navmenutext').removeClass('active');
		$(this).addClass("active");
		$(".grid-container").html('<div class="loading-indicator">Loading..</div>');
		requestWrapper("http://it-ebooks-api.info/v1/search/"+bookType);	
		$(".pagination-box").html(paginationWrapper(bookType));	 	
	});    

	$(".pgDot").click(function(){
		
		console.log($(this).attr("data-page-number"));	
		console.log($(this).attr("data-book-type-page"));
		
		$(".pgDot").removeClass('active');
		$(this).addClass("active");
		
		var bookType = $(this).attr("data-book-type-page");
		var pageNumber = $(this).attr("data-page-number");
		
		requestWrapper("http://it-ebooks-api.info/v1/search/"+bookType+"/page/"+pageNumber);
	});

}
function descriptionSlicer(description){
	var description = description.slice(0,100);
   return description
}	

function bookRequestWrapper(requestUrl){
	$.ajax({url:requestUrl,
	      success:function(result){
			    	bookDataWrapper(result)	
			      },
	      error:function(result){
			       alert("Error Occurring!");
			    }		 
	 });	  
	
}	

function bookDataWrapper(book){
	//alert(book.Title);
	var htmlData = '<div class="description-book-container">\
				<div class="description-book-leftbar ">\
					 <img src = "' +book.Image+ '" alt= "Practise" class= "description-image-box" >\
				</div>\
				<div class="description-book-rightbar">\
				<div class="description-book-title">' +book.Title+ '</div>\
				<div class="hr-line"></div>\
				<div class="description-book-content ">' +book.Description+ '</div>\
				<div class="hr-line"></div>\
				<div class="description-book-bottom">\
				<div class="book-label">Publish Year:</div>\
				<div class="book-detail">'+book.Year+ '</div>\
				<div class="book-label">Author:</div>\
				<div class="book-detail">' +book.Author+ '</div>\
				<div class="book-label">Pages:</div>\
				<div class="book-detail">' +book.Page+ '</div>\
				<div class="book-label">Publisher:</div>\
				<div class="book-detail">' +book.Publisher+ '</div>\
				<div class="book-label">Download:</div>\
				<div class="book-detail"><a href="'+book.Download+'">' +book.Download+ '</a></div>\
				<div class="book-label">ISBN Nu.:</div>\
				<div class="book-detail">' +book.ISBN+ '</div>\
				</div>\
				</div>\
			</div>'	
    $(".grid-container").html(htmlData);	
}
	
function paginationWrapper(bookType){
	var paginationHtml = '<div class="pagination">\
		 <div class="dotNavholder">\
		 <div data-page-number="1" data-book-type-page="' + bookType + '" class="pgDot"></div>\
		 <div data-page-number="2" data-book-type-page="' + bookType + '" class="pgDot"></div>\
		 <div data-page-number="3" data-book-type-page="' + bookType + '" class="pgDot"></div>\
		 <div data-page-number="4" data-book-type-page="' + bookType + '" class="pgDot"></div>\
		 <div data-page-number="5" data-book-type-page="' + bookType + '" class="pgDot"></div>\
		 </div>\
		 </div>'	
	return paginationHtml;
}	
