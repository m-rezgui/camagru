<?php
class Manager 
{
	protected function dbConnect()
	{
		require $_SERVER['DOCUMENT_ROOT'] . '/camagru/config/database.php';
	    
	    try
	    {
	        $db = new PDO($DB_DSN, $DB_USER, $DB_PASSWORD, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
	        return $db;
	    }
	    catch(Exception $e)
	    {
	        die('Connexion échouée : '.$e->getMessage());
	    }
	}
}