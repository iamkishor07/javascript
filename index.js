/*function b(){
    console.log(a)
}




//Thre ways to defined a variabe in Js
// 1.Constant
// 2.let
// 3.var

var a=10;
b();
// console.log(b) */
// let keyword

//console.log(a) //accessing a is not possible
                //bz its defined as let keyword

// defined let here
let a=10; 
console.log(a) //accessing here is possible
                //Here its outputs 10 bz its initialized it
//SO, the time when the variable is declared and not initialized upon 
//successfully is known as Temporal Dead Zone 
//at this time we cant access the variable ,because it not in the
//Gobal scope

/*
  and we cant duplicate the variable when we declare it with the
  let keyword , Its throws a syntax error upfront of the execution
  */

//   Constant

    /* Its stricter than the let keyword , as in case of let:
    We can defined the variable and can initialize it anywhere int program,
    because its not with case in constant
     we have to initialize the value to the variable which is 
     defined with const keyword\
     */

    //  let k;
    //  const b=100;
    //  k=1000;
    //  console.log(b);
    // const b; //Missing initializer in const declaration (at index.js:43:11)
    // b=100;
    // console.log(b);


//Errors 

    /*
      Type error: when we are assin a value to other declared type
      ex: when we try to change the value of a constant we get type error
      because it's of type const and we are changing it.
      */

      /*
      Syntax error:Its gets triggered when we not follow the programming rules
      ex: if we again re declared the same variable it gets the syntax error
      */

      /* Reference error:Its gets thrown when we javascript tries to acces 
      the variable that we declare in its memory space but you cant access it 
      that throws reference errror,
      That means the variable is in **Temporial Dead Zone**

      And also when we try acces some variable which is not declared inthe program
      then we get **Undefined Reference Error**
      */

//Block 
    /* A block is defined by a curly brackets 
    {
        It is compond statemet
        This a block
    }

    We group multiple statemts together in a block so we can use it
    where the javascript expects to a one statement
    exL: 
        if(true) here it only single statement 
        //It is the syntax of if 

        we can use block to bind mul statemets to combine 
         if(true){
            //Multiple statements
         }
     */

//Block Scope
    /*
         Let and const are the block scope 
         we ever js runs if we declare let,var,const in ablock
         js will create a block scope in which let,const are there
         so, when we want to acces those outside the block
         we get the reference error stating that its no longer hold
         those values.
         as soon as it reaches the end of block
         it remove all the values , and only the values defined with
         var keyword has the global scop
     */

     