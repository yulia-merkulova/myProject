// The class FormValidator is used to validate form fields
class FormValidator {
    constructor(el) {
        // Select the fields to validate
        this._elInputsRequired = el.querySelectorAll('[required]');
        this._elCodePostal = el.querySelector('[data-js-input="CodePostal"]');
        this._elEmail= el.querySelector('[data-js-input="Email"]');
        this._elCreditCard = el.querySelector('[data-js-input="CreditCard"]');
        this._elCodeCvv = el.querySelector('[data-js-input="CodeCvv"]');
        // Regular Expression for Postal Code Verification
        this._regex_codePostal = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
        // Regular Expression for Email Verification
        this._regex_email = /(.+)@(.+){1,}\.(.+){1,}/;
        // Regular expression for credit card verification
        this._regex_creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
        // Regular expression for security code verification
        this._regex_codeCvv = /^[0-9]{3}$/;

        // Initialize _isValid to true
        this._isValid = true;
        
        this.validateForm();
        
    }
    
    // Fields validation
    validateForm = () => {
        
        // Required Fields validation
        for (let i = 0, l = this._elInputsRequired.length; i < l; i++) {
            
            let elInput = this._elInputsRequired[i];
            let isValidField =  elInput.value.trim().length > 0;
            
            // If the field is not correct, call setter and set the value to false
            if (!isValidField) this.isValid = false;
            // If the field is empty, display the message and add the CSS class  
            if (!isValidField) {
                elInput.parentElement.classList.add("error");
                elInput.nextElementSibling.textContent = `Le champ ${elInput.dataset.jsInput} est obligatoire.`;   
            } else { // Remove message and class
                elInput.nextElementSibling.textContent = "";
                elInput.parentElement.classList.remove("error");
            };
        }
        
        // Postal Code field validation
        let isValidCodePostal = this._regex_codePostal.test(this._elCodePostal.value);
        
        // If the Postal Code field is not correct, call setter and set the value to false
        if (!isValidCodePostal) this.isValid = false;
        // If the Postal Code field is not correct, display the message and add the CSS class
        if (this._elCodePostal.value.trim().length > 0) 
            if (!isValidCodePostal) {
                this._elCodePostal.nextElementSibling.textContent = "Le code postal saisi n'est pas valide.";
                this._elCodePostal.parentElement.classList.add("error");  
            } else { // Remove message and class
                this._elCodePostal.nextElementSibling.textContent = "";
                this._elCodePostal.parentElement.classList.remove("error");
            };
        
        // Email field validation
        let isValidEmail = this._regex_email.test(this._elEmail.value);
        
        // If the Email field is not correct, call setter and set the value to false
        if (!isValidEmail) this.isValid = false;
        // If the Email field is not correct, display the message and add the CSS class
        if (this._elEmail.value.trim().length > 0) 
            if (!isValidEmail) {
                this._elEmail.nextElementSibling.textContent = "L'adresse courriel saisie n'est pas valide.";
                this._elEmail.parentElement.classList.add("error");  
            } else { // Remove message and class
                this._elEmail.nextElementSibling.textContent = "";
                this._elEmail.parentElement.classList.remove("error");
            };
        
        // Credit Card field validation
        let isValidCreditCard = this._regex_creditCard.test(this._elCreditCard.value);
        
        // If the Credit Card field is not correct, call setter and set the value to false
        if (!isValidCreditCard) this.isValid = false;
        // If the Credit Card field is not correct, display the message and add the CSS class
        if (this._elCreditCard.value.trim().length > 0) 
            if (!isValidCreditCard) {
                this._elCreditCard.nextElementSibling.textContent = "La carte crédit saisie n'est pas valide.";
                this._elCreditCard.parentElement.classList.add("error");  
            } else { // Remove message and class
                this._elCreditCard.nextElementSibling.textContent = "";
                this._elCreditCard.parentElement.classList.remove("error");
            };
   
        // Security code field validation
        let isValidCodeCvv = this._regex_codeCvv.test(this._elCodeCvv.value);
        
        // If the Security code field is not correct, call setter and set the value to false
        if (!isValidCodeCvv) this.isValid = false;
        // If the Security code field is not correct, display the message and add the CSS class
        if (this._elCodeCvv.value.trim().length > 0) 
            if (!isValidCodeCvv) {
                this._elCodeCvv.nextElementSibling.textContent = "Le code cvv saisi n'est pas valide.";
                this._elCodeCvv.parentElement.classList.add("error");  
            } else { // Remove message and class
                this._elCodeCvv.nextElementSibling.textContent = "";
                this._elCodeCvv.parentElement.classList.remove("error");
            };
    }

    //Setter isValid
    set isValid(newValue) {
        this._isValid = newValue;
    }

}