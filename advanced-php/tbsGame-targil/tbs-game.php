
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


class DataMock{

    protected $data;

    function setData(){


        $this->data = [
            'farm' => [
                'costs' =>[ 'gold'=>100 , 'lumber'=>100]
            ],
            'lumber' => [
                'costs' =>[ 'gold'=>200 , 'lumber'=>200]
            ],
            'goldMine' => [
                'costs' =>[ 'gold'=>300 , 'lumber'=>300]
            ],
            'ironMine' => [
                'costs' =>[ 'gold'=>400 , 'lumber'=>400]
            ],
        ];


    }

}

class building extends DataMock{

    private $currnetLevel;
    private $costGold;
    private $costLumber;
    protected $name;

    function __construct($name , $type ){

        $this->checkForUpgrade(); // also include default value;
       

        $this->setData();
        $this->setGold(  $this->data[$type]['costs']['gold'] ) ;
        $this->setLumber( $type);
      
        $this->setName($name);

    }
    function setName($name){
        $this->name= $name;
    }
    function getName(){
        return $this->name;
    }
    function setGold($val){
        $this->costGold= $val;
    }
    function getGold(){
        return $this->costGold;
    }
    
    function setLumber($type){
        $this->costLumber=  $this->data[$type]['costs']['gold'];
    }
    function getLumber(){
        return $this->costLumber;
    }
    function setLevel( $level ){
        $this->currnetLevel = $level ;
    }
    function getLevel(){
        return  $this->currnetLevel;
    }
    function checkForUpgrade(){
        //create util class and move it out
       // print_r($_GET);
        if (isset($_GET['func']) && !empty( $_GET['func'])  ){

            if (isset($_GET['currentlevel']) && !empty( $_GET['currentlevel'])  ){

                $this->setLevel( $_GET['currentlevel'] + 1 ); //add is numeric validation

            }
        } else {
            $this->setLevel(0);
        }

        $this->saveSession();
       // print_r($_SESSION);

    }
    function saveSession(){

        $_SESSION['level'] = $this->getLevel();

    }
    


}

class renderView extends building{

    function view(){

        //add var to building type
       echo ' <div class="col-xs-3">
        <h3>'.$this->name.'</h3>
        <h4>next level costs:</h4>
        <p>gold: '.$this->getGold().' </p>
        <p>lumber: '.$this->getLumber().' </p>
        <h4>current level: '.  $this->getLevel().' </h4>
        <a href="./?func=nextlevel&currentlevel='. $this->getLevel().'"
         class="btn btn-success">upgrade</a>
        </div>
        ';
    }

}

$farm = new renderView("farm" , "farm");
$lumberMill = new renderView("Lumber Mill" , "lumber");
$goldMine = new renderView("Gold Mine" , "goldMine");
$ironMine = new renderView("Iron Mine" , "ironMine");


?>  

<html>

    <head>
    <!-- <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.css"> -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    </head>

<body>
    
   <div class="container">
       <div class="row">
          
          <?php  $farm->view(); ?>
          <?php  $lumberMill->view(); ?>
          <?php  $goldMine->view(); ?>
          <?php  $ironMine->view(); ?>
          
       </div>
   </div>
</body>
</html>
