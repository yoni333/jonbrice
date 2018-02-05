function last(a){
    
    console.log(a);
    console.log("i am last");
    a();
}



last(  function(){console.log("i am anonimus 1 . finish run") } );