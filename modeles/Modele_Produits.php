<?php
	class Modele_Produits extends TemplateDAO {
		
		public function getTable() {
			return "produits";
		}	
		
		// 	Obtenir les produits (le nombre limité)
		public function obtenirLimit($par) {
			try {
				$stmt = $this->connexion->query("SELECT * FROM produits LIMIT ". $par);

				$stmt->execute();
				return $stmt->fetchAll();

			}
			catch(Exception $exc) {
				return 0;
			}
		}

		// Obtenir les produits en ordre 
		public function obtenirTousOrderBy($limit, $filter) {
			try {
				$stmt = $this->connexion->query("SELECT * FROM produits  ORDER BY " . $filter . " LIMIT " . $limit);
				
				$stmt->execute();
				return $stmt->fetchAll();

			}
			catch(Exception $exc) {
				return 0;
			}
		}

		// Enregistrer la commende dans la base de données
		public function ajouterCommande($detail, $montant) {
			try {
				$stmt = $this->connexion->prepare("INSERT INTO commandes (detail, montant) VALUES (:detail, :montant)");
				//$stmt->execute(array(":nom" => $nom, ":id" => $id));
				$stmt->bindParam(":detail", $detail);
				$stmt->bindParam(":montant", $montant);
				$stmt->execute();
				
				return 1;

			}
			catch(Exception $exc) {
				return 0;
			}
		}

		// Modifier les produits en quantité 
		public function soustraireProduit($id, $quantity) {
			try {
				$stmt = $this->connexion->prepare("UPDATE produits SET inventaire= " . $quantity . " WHERE id =" . $id);
				$stmt->execute();
				
				return 1;

			}
			catch(Exception $exc) {
				return 0;
			}
		}

		// Vérifier l'usager
		public function verifierUsager($courriel) {
			try {
				$stmt = $this->connexion->prepare("SELECT id FROM usagers WHERE courriel=:courriel");
				$stmt->bindParam(":courriel", $courriel);
				$stmt->execute();
				
				return $stmt->fetch();
			}
			catch(Exception $exc) {
				return 0;
			}
		}

		// Créer le nouveau usager
		public function creerUsager($nom, $prenom, $adresse, $courriel, $optin) {
			try {
				$stmt = $this->connexion->prepare("INSERT INTO usagers (nom, prenom, adresse, courriel, optin) VALUES (:nom, :prenom, :adresse, :courriel, :optin)");
				$stmt->bindParam(":nom", $nom);
				$stmt->bindParam(":prenom", $prenom);
				$stmt->bindParam(":adresse", $adresse);
				$stmt->bindParam(":courriel", $courriel);
				$stmt->bindParam(":optin", $optin);
				$stmt->execute();
				
				return 1;

			}
			catch(Exception $exc) {
				return 0;
			}
		}

		// Modifier l'usager existant
		public function modifierUsager($nom, $prenom, $adresse, $courriel, $optin) {
			try {
				$stmt = $this->connexion->prepare("UPDATE usagers SET nom=:nom, prenom=:prenom, adresse=:adresse, optin=:optin WHERE courriel=:courriel");
				$stmt->bindParam(":nom", $nom);
				$stmt->bindParam(":prenom", $prenom);
				$stmt->bindParam(":adresse", $adresse);
				$stmt->bindParam(":courriel", $courriel);
				$stmt->bindParam(":optin", $optin);
				$stmt->execute();
				
				return 1;

			}
			catch(Exception $exc) {
				return 0;
			}
		}

	}
?>