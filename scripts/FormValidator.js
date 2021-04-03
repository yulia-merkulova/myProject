class FormValidator {
    constructor(el) {
        //Récupérer les champs à valider
        this._elInputsRequired = el.querySelectorAll('[required]');
        this._elCodePostal = el.querySelector('[data-js-input="CodePostal"]');
        this._elCourriel = el.querySelector('[data-js-input="Courriel"]');
        this._elCarteCredit = el.querySelector('[data-js-input="CarteCredit"]');
        this._elCodeCvv = el.querySelector('[data-js-input="CodeSecurite"]');
        // Expression rationnelle pour la vérification de code Postal
        this._regex_codePostal = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        // Expression rationnelle pour la vérification de courriel
        this._regex_courriel = /(.+)@(.+){1,}\.(.+){1,}/;
        // Expression rationnelle pour la vérification de carte crédit
        this._regex_carteCredit = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
        // Expression rationnelle pour la vérification de code de sécurité
        this._regex_codeCvv = /^[0-9]{3}$/;

        //Initialiser _estValide à true
        this._estValide = true;
        
        this.validerForm();
        
    }
    
    //Validation et la gestion d'affichage
    validerForm = () => {
        
        //Validation des champs obligatoires
        for (let i = 0, l = this._elInputsRequired.length; i < l; i++) {
            
            let elInput = this._elInputsRequired[i];
            let estValideChamp =  elInput.value.trim().length > 0;
            
            // Si le champ n'est pas correct, on appelle setter et on définit la valeur false
            if (!estValideChamp) this.estValide = false;
            // Si le champ Nom est vide, on affiche le message et on ajoute le classe CSS  
            if (!estValideChamp) {
                elInput.parentElement.classList.add("error");
                elInput.nextElementSibling.textContent = `Le champ ${elInput.dataset.jsInput} est obligatoire.`;   
            } else { // On enleve le message et le classe
                elInput.nextElementSibling.textContent = "";
                elInput.parentElement.classList.remove("error");
            };
        }
        
        //Validation de champ Code Postal
        let estValideCodePostal = this._regex_codePostal.test(this._elCodePostal.value);
        
        // Si le champ Courriel n'est pas correct, on appelle setter et on définit la valeur false
        if (!estValideCodePostal) this.estValide = false;
        // Si le champ Courriel n'est pas correct, on affiche le message et on ajoute le classe CSS
        if (this._elCodePostal.value.trim().length > 0) 
            if (!estValideCodePostal) {
                this._elCodePostal.nextElementSibling.textContent = "Le code postal saisi n'est pas valide.";
                this._elCodePostal.parentElement.classList.add("error");  
            } else { // On enleve le message et le classe
                this._elCodePostal.nextElementSibling.textContent = "";
                this._elCodePostal.parentElement.classList.remove("error");
            };
        
        //Validation de champ Courriel
        let estValideCourriel = this._regex_courriel.test(this._elCourriel.value);
        
        // Si le champ Courriel n'est pas correct, on appelle setter et on définit la valeur false
        if (!estValideCourriel) this.estValide = false;
        // Si le champ Courriel n'est pas correct, on affiche le message et on ajoute le classe CSS
        if (this._elCourriel.value.trim().length > 0) 
            if (!estValideCourriel) {
                this._elCourriel.nextElementSibling.textContent = "L'adresse courriel saisie n'est pas valide.";
                this._elCourriel.parentElement.classList.add("error");  
            } else { // On enleve le message et le classe
                this._elCourriel.nextElementSibling.textContent = "";
                this._elCourriel.parentElement.classList.remove("error");
            };
        
        //Validation de champ Carte Crédit
        let estValideCarteCredit = this._regex_carteCredit.test(this._elCarteCredit.value);
        
        // Si le champ Carte Crédit n'est pas correct, on appelle setter et on définit la valeur false
        if (!estValideCarteCredit) this.estValide = false;
        // Si le champ Carte Crédit n'est pas correct, on affiche le message et on ajoute le classe CSS
        if (this._elCarteCredit.value.trim().length > 0) 
            if (!estValideCarteCredit) {
                this._elCarteCredit.nextElementSibling.textContent = "La carte crédit saisie n'est pas valide.";
                this._elCarteCredit.parentElement.classList.add("error");  
            } else { // On enleve le message et le classe
                this._elCarteCredit.nextElementSibling.textContent = "";
                this._elCarteCredit.parentElement.classList.remove("error");
            };
   
        //Validation de champ Code de sécurité
        let estValideCodeSecurite = this._regex_codeCvv.test(this._elCodeCvv.value);
        console.log(estValideCodeSecurite)
        // Si le champ Carte Crédit n'est pas correct, on appelle setter et on définit la valeur false
        if (!estValideCodeSecurite) this.estValide = false;
        // Si le champ Carte Crédit n'est pas correct, on affiche le message et on ajoute le classe CSS
        if (this._elCodeCvv.value.trim().length > 0) 
            if (!estValideCodeSecurite) {
                this._elCodeCvv.nextElementSibling.textContent = "Le code cvv saisi n'est pas valide.";
                this._elCodeCvv.parentElement.classList.add("error");  
            } else { // On enleve le message et le classe
                this._elCodeCvv.nextElementSibling.textContent = "";
                this._elCodeCvv.parentElement.classList.remove("error");
            };
    }

    //Setter estValide
    set estValide(nouvelleValeur) {
        this._estValide = nouvelleValeur;
    }

}