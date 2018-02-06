<?php

    class Model{


        private $conn;

        function __construct(){
            

            $this->conn = $this->connectDB();

        }

        function login_query( $user , $pass ){

            $sql = "SELECT * FROM users where name='$user' and password='$pass'" ;
            //%27;%27
            //%27 or 1=1;%27
            //%27%20or%201=1;drop%20table%20topic;%27
            //%27%20or%201=1;create%20table%20inj(id INT);%27 
            //%27%20or%201=1;UPDATE `users` SET `role`=1 WHERE name='yoni';%27 
            
        //PREPARE
            //  $sql = "SELECT * FROM users where name=? and password= ?" ;
            //$stmt->prepare( $sql);
            //$stmt->executu ( ['yoni'  , '123' ])
            echo $sql . "<br>";
            //!!!! see function connectDB down here!!!
          //  echo "test " . $this->test_input($sql);
           
            $stmt = $this->conn->query( $sql );
           // $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo  "<br>";
            print_r($result);

        }

                
        function test_input($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }

        function connectDB(){


            $servername = "localhost";
            $username = "root";
            $password = "";
            $DB = "test";

            try {
                $options = [
                 //   PDO::ATTR_EMULATE_PREPARES   => false, // turn off emulation mode for "real" prepared statements
                    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, //turn on errors in the form of exceptions
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, //make the default fetch be an associative array
                  ];

                $conn = new PDO("mysql:host=$servername;dbname=".$DB, $username, $password ,$options);
                // set the PDO error mode to exception
              
              //  echo "Connected successfully"; 
                return $conn;
                }
            catch(PDOException $e)
                {
                echo "Connection failed: " . $e->getMessage();
                }
                
        }



    }

?>