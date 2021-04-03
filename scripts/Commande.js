class Commande {
    constructor(el) {
        this._el = el;
        this._elSectionTable = document.querySelector('[data-js-component="Panier"]');
        this._elSectionForm = document.querySelector('[data-js-formulaire]');
        this._elRetour = document.querySelector('[data-js-retour]');
        this._elForm = document.querySelector('[data-js-form]');
        
        this.init();
    }

    init = () => {

        this.afficherFormulaire();
        this.instancierClasse();
        this.brancherRetour();

    }

    afficherFormulaire = () => {
        
        //Afficher le formulaire    
        this._elSectionForm.classList.remove('hidden');
        //Cacher la table des produits
        this._elSectionTable.classList.add('hidden');
        
    }

    instancierClasse = () => {
        
        new Form(this._elForm);

    }

    brancherRetour = () => {
        
        this._elRetour.addEventListener('click', ()=>{
            //Cacher le formulaire    
            this._elSectionForm.classList.add('hidden');
            //Afficher la table des produits
            this._elSectionTable.classList.remove('hidden');
        });
        
    }
    
}