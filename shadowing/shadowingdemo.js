//shadowing occurs when a variable declared in a certain scope (e.g. a local variable) 
//has the same name as a variable in an outer scope (e.g. a global variable)
var a =100;
//The above statement sets a=100 in global scope
{
    var a=10; //This line changes the value of a from 100 to 10 in global scope
    let b=20;
    const c=30;
    console.log(a); //10 
    console.log(b); //20
    console.log(c); //30
}
console.log(a); //10 as it changed the value it prints the global scope value
//This is in the case of the var keyword


//In case of let keyword

let b =100; //This stores in script scope
//The above statement sets a=100 in block scope
{
    var a=10; //This line changes the value of a from 100 to 10 in global scope
    let b=20;
    const c=30;
    console.log(a); //10 
    console.log(b); //20
    console.log(c); //30
}
console.log(b); //100 It prints the value 100 which it shadowed the script scope

//Similar things happens with the const keyword

//It also similar in case of functions as same as in block

//Illegal shadowing
//We canot shadow let variable by var keyword , it throws error
let a =10;
{
    var a=100; //Illegal shadowing
    //Because var has a global scope even in this block

}


//Not an illegal shadowing
//we can do with in the fucntions ,bz scope varies 
let a =10;
function x(){
    var a=100; 
    //Because var has a global scope even in this block of function

}


//Lexical scope
//It follows lexical chain scope in block also.
const a=10;
{
    const a=100;
    {
        const a=200;
        console.log(a); //200
    }
    console.log(a);//100;

}
console.log(a);//10
