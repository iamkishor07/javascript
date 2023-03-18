//closure is a function bundled to together with the lexical scope
//uses of closures:
    //Module design pattern
    //currying
    //functions like once
    //memoize
    //maintaining state in async world
    //setTimeouts
    //Iterators
    //and many more
function x(){
    var a=10;
    function y(){
        console.log(a); //10
        //the function y is bind with the variables of x forms closures
    }
    y();
}
x();

//Functions are the heart of the javascript
//we can do somemany things with the functions

function x(){
    var b= function y(){ //we can assign function to a variable in js
        console.log(a);
    }
}
x();


function x(){
    var b=7;
    y();
}
x( function y(){ 
    console.log(a); //passing the function as a parameter in a function
});


function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y; //we can return a function from a function
} 
var z=x();
console.log(z);//it gives the function y
z(); //It prints the value of a
//Functions returns function that remembers the lexical scope and the closure is returned