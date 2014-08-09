<?php

require("json.php");
$json = new Services_JSON();

$coupons = array();

$dir = new RecursiveDirectoryIterator("../../../../");

foreach (new RecursiveIteratorIterator($dir) as $file) {

	if (basename($file) == "coupons.php" && strpos(dirname($file), "cgi-bin") == false) {
	
		@include($file);
		
	}
	
}

$code = strtoupper($_POST['code']);
$today = strtotime(date("Y-m-d"));
$products = array();

foreach ($coupons as $coupon) {

	if (strtoupper($coupon['code']) === $code && $coupon['apply'] != "" && $today >= strtotime($coupon['from']) && $today <= strtotime($coupon['to'])) {
	
		$products[] = array(

			'code' => $code,
			'text' => $coupon['text'],
			'type' => $coupon['type'],
			'value' => $coupon['value'],
			'apply' => $coupon['apply']
			
		);
	
	}

}

if (!empty($products)) {
	
	echo $json->encode($products);
	
}

else {
	
	echo 'NO';
	
}

?>