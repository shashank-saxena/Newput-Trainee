$(document).ready(function(){


	 Date.prototype.myMet = function() {
		    if (this.getMonth() == 0){this.myProp = "January"};
		    if (this.getMonth() == 1){this.myProp = "February"};
		    if (this.getMonth() == 2){this.myProp = "March"};
		    if (this.getMonth() == 3){this.myProp = "April"};
		    if (this.getMonth() == 4){this.myProp = "May"};
		    if (this.getMonth() == 5){this.myProp = "June"};
		    if (this.getMonth() == 6){this.myProp = "July"};
		    if (this.getMonth() == 7){this.myProp = "August"};
		    if (this.getMonth() == 8){this.myProp = "Spetember"};
		    if (this.getMonth() == 9){this.myProp = "October"};
		    if (this.getMonth() == 10){this.myProp = "November"};
		    if (this.getMonth() == 11){this.myProp = "December"};
		} 
	 
	 var d = new Date();
	 d.myMet();
	 var monthname = d.myProp;
	alert(mothname);
//constructors
function StateChartElem(){
    this.setName = function(name) {
        this.name = name;
    }
    this.setLabel = function(label) {
        this.label = label;
    }
}
 
function State(){
    this.setType = function(type){
        this.type = type;
    }
}
 
function Transition(){
    this.setPreCondition = function(c){
        this.preCondition = c;
    }
    this.setSource = function(src){
        this.src = src;
    }
    this.setTarget = function(tgt){
        this.tgt = tgt;
    }
}
 
function Dist() {
    this.elems = new Array();
    this.addElem = function(elem){
        this.elems.push(elem);
    }
}
 
//setting up the prototype chains
var stateChartElemProt = new StateChartElem();
State.prototype = stateChartElemProt;

var stateObject = new State();
Dist.prototype = stateObject;

//Transition.prototype = stateChartElemProt;
//instantiating a state chart
var state1 = new State();
var state2 = new State();
 
///console.log(state1.__proto__ === stateChartElemProt); //true
//console.log(state1.__proto__ === state2.__proto__); //true
 
state1.setName('state1');
state1.setLabel('State-1');
state1.setType('Initial');

state2.setName('state2');
state2.setLabel('State-2');
state2.setType('Final');
 
//console.log(state1); //StateChartElem { name="state1", label="State-1", type="Initial"}
//console.log(state2); //StateChartElem { name="state2", label="State-2", type="Final"}


//creating transitions
var trans1 = new Transition();
trans1.setName('trans1');
trans1.setLabel('Transition-1');
trans1.setPreCondition('x==10');
trans1.setSource(state1);
trans1.setTarget(state2);
 
//console.log(trans1);//StateChartElem { name="trans1", label="Transition-1",preCondition="x==10"}


//setting up chart
console.log('Creating StateChart');
var chart1 = new Dist();
chart1.setName('Dist');
chart1.setLabel('Example State Machine');
chart1.addElem(state1);
chart1.addElem(state2);
chart1.addElem(trans1);
 
console.log(chart1);//StateChartElem { elems=[3], name="chart1", label="Example State Machine"}

 

 


});