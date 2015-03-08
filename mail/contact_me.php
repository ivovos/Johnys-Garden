<?php
// Check for empty fields
if(empty($_POST['email']) 	||

   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$recipients = array(
  "vos.ivo@gmail.com",
  "johnycutts@gmail.com"
);

// $phone = $_POST['phone'];
// $message = $_POST['message'];
	
// Create the email and send the message
$to = implode(',', $recipients); // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "New subscription to Johny's Garden from $name"; //deleted $name
$email_body = "Hi John, \n\n Someone just has subscribed to Johny's Garden Ordering System from johnysgarden.com's subscribe form. \n Please contact them as soon as possible on this e-mail because at the moment they don't get an automated e-mail when subscribing. Thanks! \n\n Here are the details: \n\nName: $name\n\nEmail: $email_address\n\n \n\n";
$headers = "From: noreply@johnsgarden.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";	
// $thankyou = "thankyou.htm"; // thank you page - add?	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>