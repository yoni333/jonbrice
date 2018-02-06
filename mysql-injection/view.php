<?php

    class ViewUtils {



        protected function header(){

            echo ' 

            <html>
                <head>
                <title> example </title>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" >
                </head>
                <body>
                    <div class="container">

           
            
            ';


        }

        protected function footer(){


            echo '
                    </div>
                </body>
                </html>
            ';
        }
    }


    class View extends ViewUtils{


      function view_not_logged(){

            $this->header();

            echo '


                <h1> Please login first </h1>

                <form class="form-group" action="./" method="get">

                    <label>USERNAME:</label>
                    <input name="username" class="form-control" type="text">
                    
                    <label>PASSWORD:</label>
                    <input name="password" class="form-control" type="password">
                    <hr>
                    <button class="btn btn-submit">submit</button>

                </form>
            
            ';


            $this->footer();



      }


    }


?>