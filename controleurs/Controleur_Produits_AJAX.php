<?php
	class Controleur_Produits_AJAX extends Controleur_Produits {
	
		// La fonction qui sera appelée par le routeur
		public function traite(array $params) {
			
			// Modèle vide par défaut
			$data = array();
			if (isset($params["action"])) {
				
				// Switch en fonction de l'action qui est envoyée en paramètre de la requète
				// Ce switch détermine la vue $vue et obtient le modèle $data
				switch($params["action"]) {
					
					// Filtrer les produits
					case "filterListeProduits":  
						if (isset($params["filter"])&&($params["filter"]!="")&&isset($params["limit"])) {
							$modeleProduits = new Modele_Produits();
							$data = $modeleProduits->obtenirTousOrderBy($params["limit"], $params["filter"]);
							$vue = "ListeProduits";
							$this->afficheVue($vue, $data);
						} else {													
							$modeleProduits = new Modele_Produits();
							$data = $modeleProduits->obtenirLimit(12);
							$vue = "ListeProduits";
							$this->afficheVue($vue, $data);
						}
						break;
	
					// Afficher la liste des produits avec une limite fixée
					case "afficherListeProduitsPlus":  
						if (isset($params["limit"])) {
							$modeleProduits = new Modele_Produits();
							$data = $modeleProduits->obtenirLimit($params["limit"]);
							$vue = "ListeProduits";
							$this->afficheVue($vue, $data);
						} else {													
							"ERROR";
						}
					break;

					// Ajouter la commande dans la base de données
					case "ajouterCommande":
						if (isset($params["total"])&&isset($params["panier"])) {
							$modeleProduits = new Modele_Produits();	
							$modeleProduits->ajouterCommande($params["panier"], $params["total"]);
						} else {													
							"ERROR";
						}
					break;

					// Soustraction de produit
					case "soustraireProduit":
						if (isset($params["id"])&&isset($params["quantity"])) {
							$modeleProduits = new Modele_Produits();
							$modeleProduits->soustraireProduit($params["id"], $params["quantity"]);
						} else {													
							"ERROR";
						}
					break;

					// Création / Modification d'usager
					case "verifierUsager":
						if (isset($params["nom"])&&isset($params["prenom"])&&isset($params["adresse"])&&isset($params["courriel"])&&isset($params["optin"])) {
							$modeleProduits = new Modele_Produits();
							// D'abord, on cherche l'usager dans la base de données
							$usager = $modeleProduits->verifierUsager($params["courriel"]);
							// Si l'usageur existe, 
							if ($usager) {
								// On modifie tous les champs, sauf courriel et id 
								$modeleProduits->modifierUsager($params["nom"],$params["prenom"],$params["adresse"],$params["courriel"],$params["optin"]);
							} else {
								// Si l'usager n'existe pas, on le crée dans la base de données
								$modeleProduits->creerUsager($params["nom"],$params["prenom"],$params["adresse"],$params["courriel"],$params["optin"]);
							}
						} else {													
							"ERROR";
						}
					break;


				}			
			} else {
				// Action par défaut
				// Afficher la liste de 12 premiers produits
				$modeleProduits = new Modele_Produits();
				$data = $modeleProduits->obtenirLimit(12);							
				$vue = "ListeProduits";		
				$this->afficheVue($vue, $data);
			}
			
		}
	}
?>