<?php
	class Routeur {

		public static function route() {

			// Obtenir le controleur qui devra traiter la requète
			
			// Obtenir la query string
			$chaineRequete = $_SERVER["QUERY_STRING"];
			$posEperluette = strpos($chaineRequete, "&");					// Trouve la position de la première occurrence d'une sous-chaîne dans une chaîne
			$controller = substr($chaineRequete, 0, $posEperluette);		// Retourne une partie d'une chaîne
			//var_dump("chaineRequete : " . $chaineRequete);
			//var_dump("posEperluette : " . $posEperluette);
			//var_dump("controleur : " . $controleur);
			
			if ($controller != "") {
				// Chercher la classe du controleur
				$class = "Controller_" . $controller;
			} else {	
				// Controleur par défaut
				$class = "Controller_Products";
			}

			//var_dump("classe : " . $classe);
			
			// Vérifier que la classe existe
			if (class_exists($class)) {
				// Dans $classe se trouve le nom de la classe ex : "Controleur_Restaurants_AJAX", ou, par défaut : "Controleur_Restaurants"
				$objectController = new $class;
				// Appelle la fonction traite de la classe Contrôleur instanciée
				$objectController->traite($_REQUEST);						// Passe en paramètre les variables de la requète HTTP
			} else {
				die("Erreur 404! Le controleur n'existe pas.");
			}
		}
	}
?>