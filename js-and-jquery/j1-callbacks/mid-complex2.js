

function branch_1(  cb ,cb2 ){

    console.log("branch 1");

    cb( cb2 );
    cb2();

}


function sara( cb2 ){

    console.log("sara");
    cb2( c );

}

function moriya( b ){

    console.log("moriya");
    b();

}

function c(){
    console.log("c");
}

branch_1( sara , moriya );