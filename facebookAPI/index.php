<?php
echo "before explode the URI";
print_r($_GET);
echo "after explode the URI";

    $uri = explode("/" , $_GET['param1']);

print_r($uri);
?>