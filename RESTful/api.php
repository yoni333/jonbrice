<?php

function echobr($arr){
    echo "<pre>";
    print_r($arr);
    echo "</pre>";
}
echo  "api router";
echobr($_GET);
echo "URI after explode";
$paths= explode( "/" , $_GET['param1']);
echobr($paths);

?>