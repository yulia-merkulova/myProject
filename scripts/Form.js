class Form {
    constructor(el) {
        //Récupérer le formulaire et champs nécessaires
        this._elForm = el;
        this._elNom = this._elForm.querySelector('[data-js-input="Nom"]');
        this._elPrenom = this._elForm.querySelector('[data-js-input="Prenom"]');
        this._elAdresse = this._elForm.querySelector('[data-js-input="Adresse"]');
        this._elCodePostal = this._elForm.querySelector('[data-js-input="CodePostal"]');
        this._elCourriel = this._elForm.querySelector('[data-js-input="Courriel"]');
        this._elInfolettre = this._elForm.querySelector('[data-js-input="Infolettre"]');
        this._elCarteCredit = this._elForm.querySelector('[data-js-input="CarteCredit"]');
        this._elExpiration = this._elForm.querySelector('[data-js-input="Expiration"]');
        this._elCodeCvv = this._elForm.querySelector('[data-js-input="CodeSecurite"]');     
        this._elSubmit = this._elForm.querySelector('[data-js-submit]');
        this._elTotal   = document.querySelector('[data-js-total]');
        this._elSectionForm = document.querySelector('[data-js-formulaire]');
        this._elSectionMessage = document.querySelector('[data-js-thank]');
        this.tableauObjets = JSON.parse(sessionStorage.getItem("panier"));       
        
        this.init();
    }
    
    init = () => {
        //Gestion du click du bouton data-js-submit
        this._elSubmit.addEventListener('click', this.gererSubmit);
    }
   
    gererSubmit = (e) => {
        e.preventDefault();
        
        //Appel de la classe FormValidation
        let newFormValidator = new FormValidator(this._elForm);
        
        //Si le formulaire est valide, on enregistre les données dans la base de données et on affiche le message Merci! 
        if (newFormValidator._estValide == true) {
            // Enregistrer les données dans  
            this.checkUsager();
            this.addCommande();
            this.subtractProduct();

            // Vider le contenu de formulaire
			this._elSectionForm.remove();
            //Afficher le message
            this._elSectionMessage.classList.remove("hidden");
            //Vider la variable SessionStorage
            sessionStorage.removeItem('panier');
            //Redériger à la page des produits dans 5sec
            window.setTimeout(function () {
                location.href = "index.php";
            },5000);
        }
        
    }
    // Créer / Modifier l'usager
    checkUsager = () => {

        // Déclaration de l'objet XMLHttpRequest
		let xhr;
		xhr = new XMLHttpRequest();
        
        let nom = this._elNom.value,
            prenom = this._elPrenom.value,
            adresse = this._elAdresse.value,
            codePostal =this._elCodePostal.value,
            courriel = this._elCourriel.value,
            infolettre = (this._elInfolettre.checked) ? 1 : 0;
        
        nom = encodeURIComponent(nom);
        prenom = encodeURIComponent(prenom);
        adresse = encodeURIComponent(adresse);
        courriel = encodeURIComponent(courriel);
		
		// Initialisation de la requète
		if (xhr) {

			// Ouverture de la requète 
            xhr.open('POST', 'index.php?Produits_AJAX&action=verifierUsager');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			// Écoute l'objet XMLHttpRequest instancié et défini le comportement en callback
			xhr.addEventListener('readystatechange', () => {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						
					} else if (xhr.status === 404) {
						console.log('Le fichier appelé dans la méthode open() n’existe pas.');
					}
				}
			});

			// Envoi de la requète
			xhr.send('&nom=' + nom + '&prenom=' + prenom + '&adresse=' + adresse + '&codepostal=' + codePostal + '&courriel=' + courriel + '&optin=' + infolettre);
        }
    }

    // Ajouter la commande
    addCommande = () => {

        // Déclaration de l'objet XMLHttpRequest
		let xhr;
		xhr = new XMLHttpRequest();
		
		// Initialisation de la requète
		if (xhr) {
  
            let total = 0,
                detail = "";
            for (let i = 0, l = this.tableauObjets.length; i < l; i++) {
                let produit = this.tableauObjets[i];
                detail += produit.quantity + " " + produit.nom;
                if (i != l-1) detail += ", ";
                total += produit.prix * produit.quantity;
            }

			// Ouverture de la requète 
            xhr.open('POST', 'index.php?Produits_AJAX&action=ajouterCommande');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			// Écoute l'objet XMLHttpRequest instancié et défini le comportement en callback
			xhr.addEventListener('readystatechange', () => {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						
					} else if (xhr.status === 404) {
						console.log('Le fichier appelé dans la méthode open() n’existe pas.');
					}
				}
			});

			// Envoi de la requète
			xhr.send('&panier=' + detail + '&total=' + total);
        }
    }

    // Soustraire les produits
    subtractProduct = () => {

        for (let i = 0, l = this.tableauObjets.length; i < l; i++) {
           
            let produit = this.tableauObjets[i];

            // Déclaration de l'objet XMLHttpRequest
            let xhr;
            xhr = new XMLHttpRequest();
            
            // Initialisation de la requète
            if (xhr) {

                // Ouverture de la requète 
                xhr.open('POST', 'index.php?Produits_AJAX&action=soustraireProduit');
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                // Écoute l'objet XMLHttpRequest instancié et défini le comportement en callback
                xhr.addEventListener('readystatechange', () => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            
                        } else if (xhr.status === 404) {
                            console.log('Le fichier appelé dans la méthode open() n’existe pas.');
                        }
                    }
                });

                // Envoi de la requète
                xhr.send('&id=' + produit.id + '&quantity=' + (parseInt(produit.inventaire) - parseInt(produit.quantity)));
            }
        }
    }
}
