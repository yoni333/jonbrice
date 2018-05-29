<?php
session_start();

if ( !isset($_SESSION['counter'])){

    $_SESSION['counter'] =0;
}



echo "i am the answer from the server count " . $_SESSION['counter'] ;
echo "<br>";
$_SESSION['counter']++;

if ( isset($_GET['id'])){
    if ( $_GET['id']== 5){
        echo "studnet name is tehila";
    }
}


//include ('view.php');

?>