<?php

	/**
     * https://www.php.net/manual/fr/language.oop5.autoload.php
     */
	

    define("RACINE", "");
    define("RACINEWEB", "http://" . $_SERVER["SERVER_NAME"] . ":" . $_SERVER["SERVER_PORT"] . "");

    // Définition de la fonction d'autoload
    function mon_autoloader($classe) {
        // Liste des répertoires à fouiller pour trouver les classes
        $repertoires = array(RACINE . "controleurs/", 
						RACINE . "modeles/", 
						RACINE . "vues/");
        
        foreach ($repertoires as $rep) {
            if(file_exists($rep . $classe . ".php")) {
                require_once($rep . $classe . ".php");
                return;
            }                
        }
    }

    // Enregistre cette fonction comme étant notre autoloader
	spl_autoload_register("mon_autoloader");
	
	Routeur::route();
?>