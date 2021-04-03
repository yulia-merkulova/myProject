class Product {
    constructor(el) {
        this._el = el;
        this._elNom = this._el.querySelector('[data-js-nom]');
        this._elPrix = this._el.querySelector('[data-js-prix]');
        this._elInventaire = this._el.querySelector('[data-js-inventaire]');
        this._elPanier = document.querySelector('[data-js-panier]');
        this._elNbPanier = document.querySelector('[data-js-nbPanier]');
        
        this.init();
    }

    init = (e) => {

        this._el.addEventListener('click', (e) => {
            e.preventDefault();
            
            this.ajouterProduitPanier();
        });

    }

    ajouterProduitPanier = () => {

        let newObjet = {},
        indice,
        tableauObjets;
    
        if (!sessionStorage.getItem('panier')) {
            tableauObjets = [];
            this._elPanier.classList.remove('panier--disabled');  
        }
        else {
            if (Array.isArray(JSON.parse(sessionStorage.panier))) tableauObjets = JSON.parse(sessionStorage.getItem('panier'));
            else {
                tableauObjets = [];
                tableauObjets.push(JSON.parse(sessionStorage.getItem('panier')));
            }
        }
        
        newObjet.id = this._el.dataset.jsId;
        newObjet.nom = this._elNom.dataset.jsNom;
        newObjet.prix = this._elPrix.dataset.jsPrix;
        newObjet.inventaire = this._elInventaire.dataset.jsInventaire;
        newObjet.quantity = 1;
        
        for (let i = 0, l = tableauObjets.length; i < l; i++) {
            if (tableauObjets[i].id === newObjet.id) 
                indice = i;
        }
        
        //Si le produit est déjà ajouté au panier, on incremente quantity +1
        if (typeof indice != "undefined") tableauObjets[indice].quantity++
        else tableauObjets.push(newObjet);

        sessionStorage.setItem('panier', JSON.stringify(tableauObjets));
        
        //Reafficher le nombre des produits au panier
        this._elNbPanier.innerHTML = tableauObjets.length;
    }
        
}