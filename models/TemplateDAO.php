<?php
	
	abstract class TemplateDAO {

		protected $connexion;
		
		protected function getPrimaryKey() {
			return "id";			
		}
		
		abstract protected function getTable();
		
		public function __construct() {

			//$this->connexion = new PDO("mysql:host=localhost;dbname=boutique", "root", "root");
			$this->connexion = new PDO("mysql:host=localhost;dbname=boutique", "root", ""); 			// Windows
			$this->connexion->exec("SET NAMES'UTF8'"); 													// Affichage des caractères UTF8
		}
	}
?>