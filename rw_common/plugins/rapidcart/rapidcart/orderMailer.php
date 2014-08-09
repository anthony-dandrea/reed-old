<?php

require("class.phpmailer.php");
	
error_reporting(0);

function shutdown() {
	
	// da non modificare, altrimenti mostra l'errore anche quando va a buon fine
	if (!is_null($error = error_get_last()) && $error['type'] == 1) {
		
		echo $error['message'] . ' [PHP/' . phpversion() . ']';
		
	}
	
}

register_shutdown_function("shutdown");

function send_email($from, $to, $subject, $body) {

	$mail = new PHPMailer();
	$mail->CharSet = "UTF-8";
	
	$mail->SetFrom($from);
	$mail->AddAddress($to);
	
	$mail->Subject = $subject;
	$mail->MsgHTML($body);
	
	if ("" != "") {
	
		$mail->IsSMTP();
		$mail->Host = "";
		$mail->Port = 25;
		$mail->SMTPAuth = true;
		$mail->Username = "";
		$mail->Password = "";
		
		if (false) {
		
			$mail->SMTPSecure = "ssl";
		
		}
	
	}
	
	return $mail->Send();

}

$ordernumber = "";

if (empty($_POST['order'])) {
	
	$order = $_POST['order'];
	exit("POST ERROR: ");
	
}

require("json.php");
$json = new Services_JSON();

$order = $json->decode(get_magic_quotes_gpc() ? stripslashes($_POST['order']) : $_POST['order']);

if (!$order) {
	
	exit("JSON ERROR: ");
	
}


if ($order->mail->enableuid) {
	
	try {
		
		$db = new PDO("sqlite:" . dirname(__FILE__) . "/rapidcart.sqlite");
		
		$result = @$db->query('SELECT Value FROM DirectOrder WHERE Field = "Count"');
		
		if ($result === false) {
			
			$ordernumber = date('ymd') . '/1';
			$db->query('CREATE TABLE DirectOrder (Field text, Value text)');
			$db->query('INSERT INTO DirectOrder VALUES ("Count", 1)');
			
		}
		
		else {
			
			$count = $result->fetch();
			$ordernumber = date('ymd') . '/' . ($count['Value'] + 1);
			$db->query('UPDATE DirectOrder SET Value = ' . ($count['Value'] + 1) . ' WHERE Field = "Count"');
			
		}
		
		$ordernumber = "[" . $order->mail->prefix . $ordernumber . "] ";
		
	}
	
	catch (Exception $e) {
		
		exit("SQLITE ERROR: ");
		
	}
	
}

function currency_i18n($value, $order) {
	
	if ($order->mail->position == "left") {
		
		return (($value < 0) ? "- " : "") . $order->mail->currency . ($order->mail->space == "true" ? " " : "") . number_format(abs($value), $order->mail->decimals, $order->mail->separator, "");
		
	}
	
	else {
		
		return (($value < 0) ? "- " : "") . number_format(abs($value), $order->mail->decimals, $order->mail->separator, "") . ($order->mail->space == "true" ? " " : "") . $order->mail->currency;
		
	}
	
}

$customer = '
<h2>%1$s</h2>
<table class="info">
<tr>
<td class="label">%2$s</td>
<td class="value">%17$s</td>
<td class="label">%9$s</td>
<td class="value">%24$s</td>
</tr>
<tr>
<td class="label">%3$s</td>
<td class="value">%18$s</td>
<td class="label">%10$s</td>
<td class="value">%25$s</td>
</tr>
<tr>
<td class="label">%4$s</td>
<td class="value">%19$s</td>
<td class="label">%11$s</td>
<td class="value">%26$s</td>
</tr>
<tr>
<td class="label">%5$s</td>
<td class="value">%20$s</td>
<td class="label">%12$s</td>
<td class="value">%27$s</td>
</tr>
<tr>
<td class="label">%6$s</td>
<td class="value">%21$s</td>
<td class="label">%13$s</td>
<td class="value">%28$s</td>
</tr>
<tr>
<td class="label">%7$s</td>
<td class="value">%22$s</td>
<td class="label">%14$s</td>
<td class="value">%29$s</td>
</tr>
<tr>
<td class="label">%8$s</td>
<td class="value">%23$s</td>
<td class="label">%15$s</td>
<td class="value">%30$s</td>
</tr>
<tr>
<td class="label"><br />%16$s</td>
<td class="value" colspan="3"><br />%31$s</td>
</tr>
</table>
';

$products = '
<h2>%1$s</h2>
<table>
%2$s
%3$s
</table>
';

$product = '
<tr>
<td class="icon">%1$s</td>
<td class="description">
<span class="title">%2$s</span><br />
<span class="comment">%3$s</span><br />
%4$s
</td>
<td class="price">
<span class="title"><span class="pricelabel">%8$s</span> %5$s</span><br />
<span class="pricelabel">%9$s</span> %6$s<br />
<span class="pricelabel">%10$s</span> %7$s<br />
</td>
</tr>
';

$total = '
<tr>
<td></td>
<td></td>
<td class="totals">
<strong><span class="pricelabel">%5$s</span> %1$s</strong><br />
<strong><span class="pricelabel">%6$s</span> %2$s</strong><br />
<strong><span class="pricelabel">%7$s</span> %3$s</strong><br />
<span class="title"><span class="pricelabel">%8$s</span> %4$s</span><br />
</td>
</tr>
';

$coupon = '
<h2>%1$s</h2>
';

$message = '
<style type="text/css">
table { border-collapse: collapse; }
td { vertical-align: top; padding: 2px; margin: 0px; border-width: 0px; border-color: gray; border-style: solid; }
.info { border: 1px solid gray; }
.label { text-align: right; color: grey; width: 80px; }
.value { width: 248px; }
.comment { color: grey; }
.icon { border-top-width: 1px; border-bottom-width: 1px; border-left-width: 1px; }
.description { width: 448; border-top-width: 1px; border-bottom-width: 1px; }
.price { width: 180; border-top-width: 1px; border-bottom-width: 1px; border-right-width: 1px; text-align: right; }
.title { font-size: 1.2em; font-weight: bold; line-height: 1.4em; }
.title .currency { line-height: 1.35em; }
.pricelabel { float: left; }
.totals { border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; background-color: gainsboro; text-align: right; }
</style>
';

$message .= nl2br($order->mail->text);

$message .= sprintf(
					$customer,
					$order->mail->info,
					$order->mail->field1,
					$order->mail->field2,
					$order->mail->field3,
					$order->mail->field4,
					$order->mail->field5,
					$order->mail->field6,
					$order->mail->field7,
					$order->mail->field8,
					$order->mail->field9,
					$order->mail->field10,
					$order->mail->field11,
					$order->mail->field12,
					$order->mail->field13,
					$order->mail->field14,
					$order->mail->field15,
					$order->customer->field1,
					$order->customer->field2,
					$order->customer->field3,
					$order->customer->field4,
					$order->customer->field5,
					$order->customer->field6,
					$order->customer->field7,
					$order->customer->field8,
					$order->customer->field9,
					$order->customer->field10,
					$order->customer->field11,
					$order->customer->field12,
					$order->customer->field13,
					$order->customer->field14,
					nl2br($order->customer->field15)
					);

$rows = '';
$subtotal = 0;
$taxes = 0;
$shipping = 0;

foreach ($order->cart as $row)
{
	$options = '';
	
	foreach ($row->options as $option) {
		
		$options .= '' . $option->name . ' ' . $option->value . '<br />';
		
	}
	
	$rows .= sprintf(
					 $product,
					 '<img src="' . $row->image . '" width="32" />',
					 $row->quantity . " × " . $row->name,
					 $row->sku,
					 $options,
					 currency_i18n($row->quantity * $row->price, $order),
					 ($row->taxes > 0) ? currency_i18n($row->quantity * $row->taxes, $order) : "",
					 ($row->shipping_1 + $row->shipping_2 > 0) ? currency_i18n($row->shipping_1 + ($row->quantity - 1) * $row->shipping_2, $order) : "",
					 $order->mail->price,
					 ($row->taxes > 0) ? $order->mail->taxes : "",
					 ($row->shipping_1 + $row->shipping_2 > 0) ? $order->mail->shipping : ""
					 );
	
	$subtotal += $row->quantity * $row->price;
	$taxes += $row->quantity * $row->taxes;
	$shipping += $row->shipping_1 + ($row->quantity - 1) * $row->shipping_2;
}

if ($order->mail->shippingstotal != 0) {
	
	$rows .= sprintf(
					 $product,
					 "",
					 $order->mail->shippingstext,
					 "",
					 "",
					 currency_i18n($order->mail->shippingstotal, $order),
					 "",
					 "",
					 $order->mail->price,
					 "",
					 ""
					 );
	
	$subtotal += $order->mail->shippingstotal;
	
}

$totals = sprintf(
				  $total,
				  currency_i18n($subtotal, $order),
				  ($taxes > 0) ? currency_i18n($taxes, $order) : "",
				  ($shipping > 0) ? currency_i18n($shipping, $order) : "",
				  currency_i18n($subtotal + $taxes + $shipping, $order),
				  $order->mail->subtotal,
				  ($taxes > 0) ? $order->mail->taxes : "",
				  ($shipping > 0) ? $order->mail->shipping : "",
				  $order->mail->total
				  );

$message .= sprintf(
					$products,
					$order->mail->products,
					$rows,
					$totals
					);

if ($order->mail->coupon != "") {
	
	$message .= sprintf(
						$coupon,
						$order->mail->coupon
						);
	
}

$order->mail->subject = $ordernumber . $order->mail->subject;

if (
	send_email($order->customer->{'field' . $order->customer->email_field}, $order->mail->to, html_entity_decode($order->mail->subject), $message) &&
	send_email($order->mail->to, $order->customer->{'field' . $order->customer->email_field}, html_entity_decode($order->mail->subject), $message)
) {
	
	echo "YES";
	exit();
	
}

else {
	
	exit("MAIL ERROR: ");
	
}

?>