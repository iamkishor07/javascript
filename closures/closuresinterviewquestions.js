function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    },1000);
}
x(); 

//the above function will print the value of i that waits for 1000 millsec
//then it prints of 1

/*function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    },1000); //It does not wait 
    console.log("Hello javascript"); //It prints first
}
x(); */

//In the above function it will not wait for the settimeout to print "hello javascript"
//and it waits for 1000minsec and prints the value of i


//Javascript to print the value of 1 after 1 sec , 2 after 2 sec ,3 after 3
//and so on up to 5 numbers

        function x(){
            for(var i=1;i<=5;i++){
                setTimeout(function(){
                    console.log(i);
                },i*1000);
            }    
            console.log("Hello javascript"); 
        }
        x(); 

//It outputs:6 6 6 6 6 6
//This behaviour  is of closures and lexical scope
//It happens because of the var global scope as it updates its value every 
//iteration in its globalscope that effects the entire thing

//The above problem can be solved by using blockscope as let

        function x(){
            for(let i=1;i<=5;i++){
                setTimeout(function(){
                    console.log(i);
                },i*1000);
            }    
            console.log("Hello javascript"); 
        }
        x(); 

        //It outputs :1  2   3    4      5


//Some how we did it using let keyword but there are certain people who wants to use only var

        function x(){
            for(var i=1;i<=5;i++){
               function close(x){
                setTimeout(function(){
                    console.log(x);
                },x*1000);
               }
               close(i);
            }    
            console.log("Hello javascript"); 
        }
        x(); 

    //Here we did it using var keyword,before that we just used settimeout in for loop
    //but here the problem it refers to the global scope for iteration
    //So, to solve that issue we used function closures so that it creates the new closure of the
    // fucntion of the value i each time its get invoked

