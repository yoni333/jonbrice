<?php
function html_header(){

    echo '<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>';
}

function footer(){
    echo '    
    </body>
    </html>';
}

function ebr($st){
    if ( is_array($st)){

        echo "<pre>";
        print_r($st);
        echo "</pre>";
    }else {
        echo $st . "<br>";
    }
   
}

html_header();

ebr( "METHOD: " .$_SERVER['REQUEST_METHOD']);
ebr( "URI: " .$_SERVER['REQUEST_URI']);
$paths = $_SERVER['REQUEST_URI'];
$paths = explode("/" , $paths);
ebr($paths);
$paths = array_shift($paths);
ebr($paths);
footer();
?>