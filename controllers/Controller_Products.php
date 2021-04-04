<?php
	class Controller_Products extends BaseController {
	
		// La fonction qui sera appelée par le routeur
		public function traite(array $params) {

			$this->showView("Head");
			$this->showView("Header");
			// Modèle vide par défaut
			$data = array();

			if (isset($params["action"])) {
				
				// Switch en fonction de l'action qui est envoyée en paramètre de la requète
				// Ce switch détermine la vue $vue et obtient le modèle $data
				switch($params["action"]) {
	
					//Afficher la commande
					case "checkout":  
						$view = "Order";
						$this->showView($view);
					break;
				}			
			} else {
				// Action par défaut
				$this->showView("Filter");
				$modelProducts = new Model_Products();
				$data = $modelProducts->obtenirLimit(12);							
				$view = "ListProducts";		
				$this->showView($view, $data);
				
				$this->showView("ButtonMore");
			}
			$this->showView("Footer");
		}
	}
?>