


function child( cb ){

    console.log (" i am child function");

    cb();


}



function parent(){

    console.log (" i am parent/utils function. you can send me to any function you need");


}

child(parent);

child(  function(){ console.log("i am anonimus function - you can send me too as callback")}   );