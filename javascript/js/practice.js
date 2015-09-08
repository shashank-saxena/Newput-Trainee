/*
Define a javascript class named person, with private property 
“name” and public methods “getName” and “setName”.  Also allow users to
initialize this class with a name without the need to call setName.  
Demonstrate the use in the follow cases.
Initialize a person named "John".
Change John's name to "John Doe".
Verify that John's name has indeed been updated to "John Doe".
 */
var Person = function(name){
    var _name = name;
    var _capitalize = function(n){
      return n;
    };
//public apis
    return {
     setName: function(name){
        _name = _capitalize(name); 
     },
     getName: function(){
        return _name;
    }
     };
};
var person = new Person('john');
//obj.setName('john Doe');
//console.log(person.getName());

/* End  */

/*
The below code will cause stack overflow if the list is too large.
How can you fix it?
var list = readHugeList();
var nextListItem = function() {
    var item = list.pop();
    if (item) {
        // process the list item...
        nextListItem();
    }
};
*/
function readHugeList(){
	var arr = [];
	for(var i = 0; i < 100000; i++){
		var random = Math.random();
		arr.push(random);
	}
	return arr;
}

var list = readHugeList();
var nextListItem = function() {
    var item = list.pop();
    if (item) {
        //console.log(item);
        //console.log('\n');
    		//setTimeout(nextListItem, 1000);
    }
};
nextListItem();

/* understand the use of this */
var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
        console.log(person.firstName + " " + person.lastName);
    }
}
//person.fullName();

var firstName = "Peter",
lastName = "Ally";

function showFullName () {
	console.log (this.firstName + " " + this.lastName);
}
//showFullName();