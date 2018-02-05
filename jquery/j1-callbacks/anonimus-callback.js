function last(a){
    a();
    console.log("i am last");
}



last(
    function(){
        console.log("i am anonimus 1")
    }
);