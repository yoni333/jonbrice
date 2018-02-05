

$(document).ready( function(){


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

} );



function cb(e){

    console.log('e');
    console.log(e);
    console.log('e.target');
    console.log(e.target);
    console.log('e.target.style');
    console.log(e.target.style);

    console.log('this');
    console.log(this);

    console.log('$(this)');
    console.log($(this));
   
    this.innerHTML='a';

    $(this).css('font-size' , '100px');


}




