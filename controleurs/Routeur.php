<?php
	class Routeur {

		public static function route() {

			// Obtenir le controleur qui devra traiter la requète
			
			// Obtenir la query string
			$chaineRequete = $_SERVER["QUERY_STRING"];
			$posEperluette = strpos($chaineRequete, "&");					// Trouve la position de la première occurrence d'une sous-chaîne dans une chaîne
			$controleur = substr($chaineRequete, 0, $posEperluette);		// Retourne une partie d'une chaîne
			//var_dump("chaineRequete : " . $chaineRequete);
			//var_dump("posEperluette : " . $posEperluette);
			//var_dump("controleur : " . $controleur);
			
			if ($controleur != "") {
				// Chercher la classe du controleur
				$classe = "Controleur_" . $controleur;
			} else {	
				// Controleur par défaut
				$classe = "Controleur_Produits";
			}

			//var_dump("classe : " . $classe);
			
			// Vérifier que la classe existe
			if (class_exists($classe)) {
				// Dans $classe se trouve le nom de la classe ex : "Controleur_Restaurants_AJAX", ou, par défaut : "Controleur_Restaurants"
				$objetControleur = new $classe;
				// Appelle la fonction traite de la classe Contrôleur instanciée
				$objetControleur->traite($_REQUEST);						// Passe en paramètre les variables de la requète HTTP
			} else {
				die("Erreur 404! Le controleur n'existe pas.");
			}
		}
	}
?>