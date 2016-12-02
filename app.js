//function statement
function greet() {
    console.log('hi');
}
greet();

//fucntion are first class 
function logGreeting(fn){
    fn();
}

//can pass string , obeject , number and function
logGreeting(greet); //return hi


//function expression
var greetMe = function(){
    console.log('Hi Zi Gang');
}

greetMe();

// it's still first class
logGreeting(greetMe);


// use a function expression on the fly
logGreeting(function()){
    console.log('hello Zi Gang !');
});