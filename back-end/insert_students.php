<?php
/* HTTP headers declarations and their allowances */
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,
        Access-Control-Allow-Headers, Authorization, X-Requested-With");

/* Takes raw data from the request*/
/* Converts it into a PHP object */
$data = json_decode(file_get_contents("php://input"));

/*Accessing the php object and assigning values to variables */
$first_name = $data->first_name;
$last_name = $data->last_name;
$age = $data->age;
$email = $data->email;
$phone_number = $data->phone_number;
$address = $data->address;
$level_of_study = $data->level_of_study; 
$password = $data->password;
/* Using Md5 password encrypting algorithm */
$encrypted_password =  md5($password);        