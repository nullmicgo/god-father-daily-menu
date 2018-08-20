<?php
   header('Content-Type: application/xml');

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://fetchrss.com/rss/5b7a3e488a93f83e718b4568477659472.xml",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "postman-token: db0bc92d-384f-cdaf-aa63-aebf07831542"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  //echo $response;
  echo $response;





 // $xml=simplexml_load_string($response);
 // echo var_dump($xml["channel"]["item"][0]['title']);
    //echo var_dump($xml["channel"]);
   // echo $xml->channel->item->description;


}