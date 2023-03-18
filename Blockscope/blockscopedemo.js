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

{
    //compound statement
    var a=10; //This is global scope
    let b=20;   //This is block scope
    const c=30;    //This is block scope
    console.log(a);
}

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

         {
            //compound statement
            var a=10; //This is global scope
            let b=20;   //This is block scope
            const c=30;    //This is block scope
            console.log(a);
            console.log(b);
            console.log(c);
        }
        console.log(a); //It outputs 10
        console.log(b); //This  raise an error
        console.log(c); //This  raise an error
        