<?php
	abstract class BaseControleur {
		
		// La fonction qui sera appellée par le routeur
		public abstract function traite(array $params);
		

		// Fonction héritée par les contrôleurs pour afficher la vue partielle appelée 
		protected function afficheVue($nomVue, $data = null) {

			$cheminVue = RACINE . "vues/" . $nomVue . ".php";
			
			if (file_exists($cheminVue)) {
				include($cheminVue); 
			} else {
				die("Erreur 404! La vue n'existe pas.");				
			}
		}
	
		/*  fonction que j'ai trouvé sur le net pour afficher dans la console. Mais là
        j'ai affiché dans un fichier de log php_jean_log.txt   Je m'en suis servi 
        pour débugger  */

        protected function debug_to_file($data) {

            if (is_array($data)) $output =  html_entity_decode(json_encode($data)); 
            else $output =  html_entity_decode($data);

            // echo "<script>console.log('Debug Objects: " . $output . "' );</script>";

            $fp = fopen('C:\Users\yliam\Downloads\php_log.txt', 'a');
            fwrite($fp, $output);
            fwrite($fp, "\n");
            fclose($fp);
        }
	}
?>