<?php
require_once connection.php;
/* HTTP headers declarations and their allowances */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,
        Access-Control-Allow-Headers, Authorization, X-Requested-With");

$conn = mysqli_connect("$hostname,$username,$password,$database"); 
$choice = $data->choice;
$email = $data->email;
$password = $data->password;

if($choice == 'student'){
    $sql = "SELECT * from student WHERE email='".$email."' AND password='".$password."'";
    $result = mysqli_query($conn,$sql);
    $nums = mysqli_num_rows($result);
    $rs = mysqli_fetch_array($result);
    if($nums>=1){
        http_response_code(200);
        $outp = "";

        $outp .= '{"email":"'    . $rs["email"] .  '",';
        $outp .= '"first_name":"'   .$rs["first_name"]. '",';
        $outp .= '"last_name":"'   .$rs["last_name"]. '",';
        $outp .= '"status":"200"}';

        echo $outp;
    }else{
        http_response_code(202);
    }
if($choice == 'instructor'){
        $sql = "SELECT * from instructor WHERE email='".$email."' AND password='".$password."'";
        $result = mysqli_query($conn,$sql);
        $nums = mysqli_num_rows($result);
        $rs = mysqli_fetch_array($result);
        if($nums>=1){
            http_response_code(200);
            $outp = "";
    
            $outp .= '{"email":"'    . $rs["email"] .  '",';
            $outp .= '"first_name":"'   .$rs["first_name"]. '",';
            $outp .= '"last_name":"'   .$rs["last_name"]. '",';
            $outp .= '"status":"200"}';
    
            echo $outp;
        }else{
            http_response_code(202);
        }
    
}
}
?>