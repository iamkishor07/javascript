// closures:A function with a reference to outer lexical enviroment 
//every Function in javascript has a lexical environment that is it has acess
//to the variables and functions in outer environment of its parent

//Even if that function executes in other different scope it remembers it's environment
//That is so called closure

//Example

function outer(){
    let a=10; //Inner function has acces to this variable
    function inner(){
        console.log(a);
    }
    return inner;
}
outer()();
//the first ()-> its return the inner function
//and second() -> it returns the value of inner function


function outer(b){
    let a=10; //Inner function has acces to this variable
    function inner(){
        console.log(a,b);
    }
    return inner;
}
outer("hello")();


function outerst(){
    var c=100;//Outer function has acces to this variable
    function outer(b){
        let a=10; //Inner function has acces to this variable
        function inner(){
            console.log(a,b,c);
        }
        return inner;
    }
    return outer;
} 
let a=150;
outerst()("hello")(); 

//The first () -> returns the outer function
//Second ()-> returns the inner function
//Third ()-> returns the value of that inner function 

//We can use closures for data hiding/data privacy

var cnt=0; //cnt can only increment using that function only
//we cant increment directly as it provides data privacy

function incrementcnt(){
    cnt++;  
}