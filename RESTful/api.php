<?php

function echobr($arr){
    echo "<pre>";
    print_r($arr);
    echo "</pre>";
}
echo  "api router";
echobr($_GET);

$paths= explode( "/" , $_SERVER['REQUEST_URI']);
echobr($paths);

?>