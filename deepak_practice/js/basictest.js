
function updateLike(likeid){
     //alert(likeid);	
   var child = likeid.firstElementChild;
    //var child = likeid.childNodes[0];   
    //alert(child.className+child.id);
	//var id="i"+likeid;
    var ck=document.getElementById(child.id).innerHTML;
	if(ck =='Like'){
		document.getElementById(child.id).innerHTML="Unlike";		
	}
	else{
		document.getElementById(child.id).innerHTML="Like";	
	}
}
function hover(element) {
    element.setAttribute('src', 'pin2.jpg');
}
function unhover(element) {
    element.setAttribute('src', 'pin1.jpg');
}
function increaseLike(element){
	if(typeof(storage)!=="undefined"){
		if(localStorage.clickcount){
		 localStorage.clickcount=Number(localStorage.clickcount)+1;	
		 }
		 else{
		 localStorage.clickcount=1;	 
		 }
	     document.getElementById("result").innerHTML="You have clicked the Pinit on " + localStorage.clickcount+ " times";		
    }
	else{
         document.getElementById("result").innerHTML="1";		
	}
}