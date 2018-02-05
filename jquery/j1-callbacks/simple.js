


function child( cb  ,cb2  ){

    console.log (" i am child function");

    var a= cb; //cb = parent 
    a();
  
}



function parent(){

    console.log (" i am parent/utils function. you can send me to any function you need");


}

function parent2(){

    console.log (" i am parent2/utils function. you can send me to any function you need");


}



child(parent ,parent2);

child(  function (){ 
    console.log("i am anonimus function - you can send me too as callback")}  
 );

