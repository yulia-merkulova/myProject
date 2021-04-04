<?php
	class Controller_Products_AJAX extends Controller_Products {
	
		// La fonction qui sera appelée par le routeur
		public function traite(array $params) {
			
			// Modèle vide par défaut
			$data = array();
			if (isset($params["action"])) {
				
				// Switch en fonction de l'action qui est envoyée en paramètre de la requète
				// Ce switch détermine la vue $vue et obtient le modèle $data
				switch($params["action"]) {
					
					// Filtrer les Products
					case "filterListProducts":  
						if (isset($params["filter"])&&($params["filter"]!="")&&isset($params["limit"])) {
							$modelProducts = new Model_Products();
							$data = $modelProducts->obtenirTousOrderBy($params["limit"], $params["filter"]);
							$view = "ListProducts";
							$this->showView($view, $data);
						} else {													
							$modelProducts = new Model_Products();
							$data = $modelProducts->obtenirLimit(12);
							$view = "ListProducts";
							$this->showView($view, $data);
						}
						break;
	
					// Afficher la liste des Products avec une limite fixée
					case "displayListProductsMore":  
						if (isset($params["limit"])) {
							$modelProducts = new Model_Products();
							$data = $modelProducts->obtenirLimit($params["limit"]);
							$view = "ListProducts";
							$this->showView($view, $data);
						} else {													
							"ERROR";
						}
					break;

					// Ajouter la commande dans la base de données
					case "addOrder":
						if (isset($params["total"])&&isset($params["panier"])) {
							$modelProducts = new Model_Products();	
							$modelProducts->ajouterCommande($params["panier"], $params["total"]);
						} else {													
							"ERROR";
						}
					break;

					// Soustraction de produit
					case "subtractProduct":
						if (isset($params["id"])&&isset($params["quantity"])) {
							$modelProducts = new Model_Products();
							$modelProducts->soustraireProduit($params["id"], $params["quantity"]);
						} else {													
							"ERROR";
						}
					break;

					// Création / Modification d'usager
					case "checkUser":
						if (isset($params["nom"])&&isset($params["prenom"])&&isset($params["adresse"])&&isset($params["courriel"])&&isset($params["optin"])) {
							$modelProducts = new Model_Products();
							// D'abord, on cherche l'usager dans la base de données
							$usager = $modelProducts->verifierUsager($params["courriel"]);
							// Si l'usageur existe, 
							if ($usager) {
								// On modifie tous les champs, sauf courriel et id 
								$modelProducts->modifierUsager($params["nom"],$params["prenom"],$params["adresse"],$params["courriel"],$params["optin"]);
							} else {
								// Si l'usager n'existe pas, on le crée dans la base de données
								$modelProducts->creerUsager($params["nom"],$params["prenom"],$params["adresse"],$params["courriel"],$params["optin"]);
							}
						} else {													
							"ERROR";
						}
					break;


				}			
			} else {
				// Action par défaut
				// Afficher la liste de 12 premiers Products
				$modelProducts = new Model_Products();
				$data = $modelProducts->obtenirLimit(12);							
				$view = "ListProducts";		
				$this->showView($view, $data);
			}
			
		}
	}
?>