// The class Order is used to show / hide form for the order
class Order {
    constructor(el) {
        this._el = el;
        this._elSectionTable = document.querySelector('[data-js-component="Cart"]');
        this._elSectionForm = document.querySelector('[data-js-formulaire]');
        this._elReturn = document.querySelector('[data-js-return]');
        this._elForm = document.querySelector('[data-js-form]');
        
        this.init();
    }

    init = () => {

        this.showForm();
        this.instantiateClass();
        this.connectBtnReturn();

    }

    showForm = () => {
        
        // Show section form    
        this._elSectionForm.classList.remove('hidden');
        // Hide section product table
        this._elSectionTable.classList.add('hidden');
        
    }

    instantiateClass = () => {
        
        new Form(this._elForm);

    }

    connectBtnReturn = () => {
        
        this._elReturn.addEventListener('click', ()=>{
            // Hide section form
            this._elSectionForm.classList.add('hidden');
            // Show section product table
            this._elSectionTable.classList.remove('hidden');
        });
        
    }
    
}