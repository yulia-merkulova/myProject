<?php
	class Controleur_Produits extends BaseControleur {
	
		// La fonction qui sera appelée par le routeur
		public function traite(array $params) {

			$this->afficheVue("Head");
			$this->afficheVue("Header");
			// Modèle vide par défaut
			$data = array();

			if (isset($params["action"])) {
				
				// Switch en fonction de l'action qui est envoyée en paramètre de la requète
				// Ce switch détermine la vue $vue et obtient le modèle $data
				switch($params["action"]) {
	
					//Afficher la commande
					case "checkout":  
						$vue = "Commande";
						$this->afficheVue($vue);
					break;
				}			
			} else {
				// Action par défaut
				$this->afficheVue("Filter");
				$modeleProduits = new Modele_Produits();
				$data = $modeleProduits->obtenirLimit(12);							
				$vue = "ListeProduits";		
				$this->afficheVue($vue, $data);
			}
			$this->afficheVue("Footer");
		}
	}
?>