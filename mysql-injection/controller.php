<?php

    class ControllerUtils{

        protected $valid;

        function check_isset( $var ){
            
            if ( isset ( $_GET[$var] ) ) {

                return true;
                
            } else {

                return false;
            }
            

        }

        function check_isempty( $var ){

            if ( !empty ( $_GET[$var] ) ) {

                return true;

            } else {

                return false;
            }
            
        }

        function check_length( $var , $len ){

                if ( strlen( $_GET[$var] ) > $len ) {

                    return true;

                } else { 
                    
                    return false ;
                }

        }

        function check_var( $var , $len = 0  ){

            $valid = false ;

         
            
            if ( $this->check_isset( $var) ){

                $valid = $this->check_isempty( $var);

            }

            if ( $valid && $len !== 0 ){

                $valid = $this->check_length( $var , $len );

            }


            return $valid;
        }

    }

    class Controller extends ControllerUtils{

        private $view;
        private $model;
        protected $username;
        private $password;

        function __construct(){

            if ( $this->check_login_vars() ) {
                    //show how to make it shorter in one if condition
                
                $this->model = new Model();
                $this->model->login_query( $this->username , $this->password );

            }

            $this->view = new View();

            $this->show_view();

        }

        function check_login_vars(){

            //if you have a lot of true false - check if you can make it shorter!!
            $username = false;
            $password=false;

            if ( $this->check_var( 'username' , 2  )   ){

                $username = true;
                $this->username = $_GET['username'];

            }

            if ( isset ($_GET['password'])  && !empty ($_GET['password']) ){

                $password=true;
                $this->password = $_GET['password'];

            }

            if ( $password && $username ){

                return true;

            } else {

                return false;
            }

        }

        function show_view(){

            $this->view->view_not_logged();

        }


    }


?>