// Еhe class Form is used to make requests :
// 1. Add user if it doesn't exist
// 2. Add order 
// 3. Subtract the number of products from the database
class Form {
    constructor(el) {
        // Select form and required fields
        this._elForm = el;
        this._elNom = this._elForm.querySelector('[data-js-input="Nom"]');
        this._elPrenom = this._elForm.querySelector('[data-js-input="Prenom"]');
        this._elAdresse = this._elForm.querySelector('[data-js-input="Adresse"]');
        this._elCodePostal = this._elForm.querySelector('[data-js-input="CodePostal"]');
        this._elEmail = this._elForm.querySelector('[data-js-input="Email"]');
        this._elInfolettre = this._elForm.querySelector('[data-js-input="Infolettre"]');
        this._elCreditCard = this._elForm.querySelector('[data-js-input="CreditCard"]');
        this._elExpiration = this._elForm.querySelector('[data-js-input="Expiration"]');
        this._elCodeCvv = this._elForm.querySelector('[data-js-input="CodeCvv"]');     
        this._elSubmit = this._elForm.querySelector('[data-js-submit]');
        this._elTotal   = document.querySelector('[data-js-total]');
        this._elSectionForm = document.querySelector('[data-js-formulaire]');
        this._elSectionMessage = document.querySelector('[data-js-thank]');
        this.objectsTable = JSON.parse(sessionStorage.getItem("cart"));       
        
        this.init();
    }
    
    init = () => {
        // Attach a click event to a button element data-js-submit.
        this._elSubmit.addEventListener('click', this.gererSubmit);
    }
   
    gererSubmit = (e) => {
        e.preventDefault();
        
        // Instantiate the FormValidation class
        let newFormValidator = new FormValidator(this._elForm);
        
        // If the form is valid, save the data to the database and display the message Merci! 
        if (newFormValidator._isValid == true) {
            // Save data to database
            this.checkUser();
            this.addOrder();
            this.subtractProduct();

            // Empty form content
			this._elSectionForm.remove();
            // Display message
            this._elSectionMessage.classList.remove("hidden");
            // Empty the SessionStorage variable
            sessionStorage.removeItem('cart');
            // Redirect to page -> list of products in 5 sec
            window.setTimeout(function () {
                location.href = "index.php";
            },5000);
        }
        
    }
    // Create / Modify the user
    checkUser = () => {

        // Declare the object XMLHttpRequest
		let xhr;
		xhr = new XMLHttpRequest();
        
        let nom = this._elNom.value,
            prenom = this._elPrenom.value,
            adresse = this._elAdresse.value,
            codePostal =this._elCodePostal.value,
            email = this._elEmail.value,
            infolettre = (this._elInfolettre.checked) ? 1 : 0;
        
        nom = encodeURIComponent(nom);
        prenom = encodeURIComponent(prenom);
        adresse = encodeURIComponent(adresse);
        email = encodeURIComponent(email);
		
		// Initialization of the request
		if (xhr) {

			// Opening of the request
            xhr.open('POST', 'index.php?Products_AJAX&action=checkUser');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			xhr.addEventListener('readystatechange', () => {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						
					} else if (xhr.status === 404) {
						console.log('Le fichier appelé dans la méthode open() n’existe pas.');
					}
				}
			});

			// Send the request
			xhr.send('&nom=' + nom + '&prenom=' + prenom + '&adresse=' + adresse + '&codepostal=' + codePostal + '&courriel=' + email + '&optin=' + infolettre);
        }
    }

    // Add order
    addOrder = () => {

		let xhr;
		xhr = new XMLHttpRequest();
		
		if (xhr) {
  
            let total = 0,
                detail = "";
            for (let i = 0, l = this.objectsTable.length; i < l; i++) {
                let product = this.objectsTable[i];
                detail += product.quantity + " " + product.name;
                if (i != l-1) detail += ", ";
                total += product.price * product.quantity;
            }

            xhr.open('POST', 'index.php?Products_AJAX&action=addOrder');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			xhr.addEventListener('readystatechange', () => {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						
					} else if (xhr.status === 404) {
						console.log('Le fichier appelé dans la méthode open() n’existe pas.');
					}
				}
			});

            // Send the request
			xhr.send('&panier=' + detail + '&total=' + total);
        }
    }

    // Subtract the number of ordered items from the database table 
    subtractProduct = () => {

        for (let i = 0, l = this.objectsTable.length; i < l; i++) {
           
            let product = this.objectsTable[i];

            let xhr;
            xhr = new XMLHttpRequest();
            
            if (xhr) {

                xhr.open('POST', 'index.php?Products_AJAX&action=subtractProduct');
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                xhr.addEventListener('readystatechange', () => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            
                        } else if (xhr.status === 404) {
                            console.log('Le fichier appelé dans la méthode open() n’existe pas.');
                        }
                    }
                });

                // Send the request
                xhr.send('&id=' + product.id + '&quantity=' + (parseInt(product.inventory) - parseInt(product.quantity)));
            }
        }
    }
}
