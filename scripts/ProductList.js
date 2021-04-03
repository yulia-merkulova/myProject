class ProductList {
    constructor(el) {
        this._el = el;
        this._elSelect = this._el.querySelector('[data-js-filter]');
        this._elSubmit = document.querySelector('[data-js-btn]');
        this._elResults = document.querySelector('[data-js-results]');
        this._elNbPanier = document.querySelector('[data-js-nbPanier]');

        this.init();
    }

    init = (e) => {

        this._elSubmit.addEventListener('click', (e) => {
            e.preventDefault();

            this.showProductsList();
        });
        
        //Si la variable existe, afficher le le nombre des produits au panier
        if (sessionStorage.getItem('panier')) {
            //Obtenir le contenu de la variable
            let tableauObjets = JSON.parse(sessionStorage.getItem('panier'));
            //Afficher le nombre des produits au panier
            this._elNbPanier.innerHTML = tableauObjets.length;

            document.querySelector('[data-js-panier]').classList.remove('panier--disabled');
        }

    }

    showProductsList = () => {

        // Déclaration de l'objet XMLHttpRequest
        var xhr;
        xhr = new XMLHttpRequest();
        
        // Initialisation de la requète
        if (xhr) {	

            // Ouverture de la requète : fichier recherché
            xhr.open('GET', 'index.php?Produits_AJAX&action=filterListeProduits&filter=' + this._elSelect.value + '&limit=' + sessionStorage.getItem('nb_products'));

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