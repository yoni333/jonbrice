
var obj ='';
$(document).ready( function(){

    create_nav();
    
$( "#nav" ).effect( 'shake', '', 1500 );
$( ".row" ).effect( 'clip', '', 2500 );


    var elm = $('#ELM');

    cards = $('.col-xs-3 , .second'); // multy selectors
    console.log (cards); //we get array of dom element
  
    cards.css('color','red');

    cards.css('font-size', '20px');
    cards.css('width', '20px');

   cards.eq(1).css('color', 'green');//eq id jquery function 
    //that find the dom element


    $( cards[0] ).css('color', 'blue'); // $( ) 
    //is wraping the dom elemnt  with jquery 

    $('.col-xs-3').eq(1).css('color' ,"pink");

    $('.col-xs-3').click( cb);

    $('#changeBTN').click(function(e){


            var date = new Date();
            console.log(date); 
            $('#ELM').text( date );

    })

    $('#ex1').click(function(){

            console.log('ex1 event');
             $('#inp').val('yoni');

             var answer =   '<h1>'+   $('#inp').val() +'</h1>';

            console.log(answer);
            //chaining example
           obj = {
                a:function (){
                    console.log('a');
                    return this;
                },
                  b:function(){
                        console.log("b");
                            return this;
                },
                    c:function(){
                        console.log("c");
                            return this;
                    }
                }
            
            obj.a().b().c();
            obj.b().c();
            obj.c();

            $('#ex1').html(answer ).css('color','green');

    })


    $(".row").click(function(){

            // $(this).prepend("<h1>prepend</h1>");

          
            // for (x=0;x<10;x++){
            // $(this).append("<h1>append</h1>");
            // }
            // $(this).after("<h1>after</h1>");
            // $(this).before("<h1>before</h1>");

            // $(this).hide(3000,function(){

            //     alert ("by");
            // });


            
    })


} );




function create_nav(){

    var nav = $('#nav');

    var arr = ["home page" , "contact" ,"mail me"];
    var posts = ["a" ,"b" ,"c"];

    nav.append('<ul>');
    for ( x=0 ; x< arr.length;x++ ){
        nav.append( '<li>' + arr[x] + '</li>');
    }
    nav.append('</ul>');



}



function cb(e){

    console.log('cb  event');
    console.log('e');
    console.log(e);
    console.log('e.target');
    console.log(e.target);
    console.log('e.target.style');
    console.log(e.target.style);

    console.log('this');
    console.log(this);

    console.log('$(this)');
    console.log( $(this) );
   
    this.innerHTML='a';

    $(this).css('font-size' , '100px');


}




