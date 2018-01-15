<?php
header("Access-Control-Allow-Origin: *");

$buyers = array (
   array (
   'id' => 1,
   'firstName' => 'Jelena',
   'lastName' => 'Ilic',
   'email' => 'jelena@example.com'
  // 'products' = array(('name' =>'Milk' ),( 'name' => 'Sugar' ))
   ),
   array (
   'id' => 2,
   'firstName' => 'Tamara',
   'lastName' => 'Nikolic',
   'email' => 'tamara@example.com'
 //  'products' = array(('name' =>'Milk' ),( 'name' => 'Sugar' ))
   ),
   array(
   'id'=> 3,
   'firstName' => 'Marina',
   'lastName' => 'Ilic',
   'email' => 'martina@example.com'
 //  'products' = array(('name' =>'Milk' ),( 'name' => 'Sugar' ))
   )
);
echo json_encode($buyers);