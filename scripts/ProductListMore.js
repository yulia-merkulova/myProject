class ProductListMore {
    constructor(el) {
        this._el = el;
        this._elResults = document.querySelector('[data-js-results]');
        this._elNbPanier = document.querySelector('[data-js-nbPanier]');

        this.init();
    }

    init = (e) => {

        this._el.addEventListener('click', (e) => {
            e.preventDefault();
            
            this.showProductsList();
        });

    }

    showProductsList = () => {
        
        // Déclaration de l'objet XMLHttpRequest
        var xhr;
        xhr = new XMLHttpRequest();
        
        // Initialisation de la requète
        if (xhr) {	

            // Ouverture de la requète : fichier recherché
            xhr.open('GET', 'index.php?Produits_AJAX&action=afficherListeProduitsPlus&limit=' + this.incrementerSessionStorage());

            xhr.addEventListener('readystatechange', () => {

                if (xhr.readyState === 4) {							
                    if (xhr.status === 200) {

                        // Les données ont été reçues
                        // Traitement du DOM
                        this._elResults.innerHTML = xhr.response;

                        //Vérifier si tous les produits sont affichés sur le site
                        this.checkNbProducts();

                    } else if (xhr.status === 404) {
                        console.log('Le fichier appelé dans la méthode open() n’existe pas.');
                    }
                }
            });

            // Envoi de la requète
            xhr.send();
        }
        
    }
    
    incrementerSessionStorage = () => {
        
        let nbProduits;
        nbProduits = parseInt(sessionStorage.getItem('nb_products')) + 12;
        sessionStorage.setItem('nb_products', nbProduits);
               
        return nbProduits;
    }

    //On cache le bouton Voir plus s'il n'y a plus de produits à afficher
    checkNbProducts = () => {
        
        let elsProduitsAffiches = this._elResults.querySelectorAll('[data-js-component="Product"]');
        for (let i = 0, l = elsProduitsAffiches.length; i < l; i++) {
            //Instancier la classe Product sur chaque tuile
            new Product(elsProduitsAffiches[i]);
        }

        //Instancier la classe sur le bouton
        let elBtn = this._elResults.querySelector(".btn-more");
        new ProductListMore(elBtn);
        
        if (elsProduitsAffiches.length < parseInt(sessionStorage.getItem('nb_products'))) {
            elBtn.classList.remove('btn-more');
            elBtn.classList.add('hidden');
        }

    }
}