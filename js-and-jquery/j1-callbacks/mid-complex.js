
function branch_1( c  ,d ){

   

    console.log ('i am branch_1 ');
    c(d);
}

function a( a2 ){

    console.log ('i am a func ');
    a2();
}


function b(){

    console.log ('i am b func ');

}


function branch_2( c ){

   

    console.log ('i am branch_2 ');
    c(b);
    c(b);
    c(b);
    c(b);
    c(b);
}

branch_1(a,b);
branch_1(b,a);
branch_2(b,a);
branch_2(b,a);

