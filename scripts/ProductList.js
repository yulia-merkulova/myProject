// The class ProductList is used to display a list of products 
class ProductList {
    constructor(el) {
        this._el = el;
        this._elCart = document.querySelector('[data-js-cart]');
        this._elNbInCart = document.querySelector('[data-js-nbInCart]');
        this._elSelect = document.querySelector('[data-js-filter]');
        this._elSubmit = document.querySelector('[data-js-btn]');
        this._elBtnMore = document.querySelector('[data-js-more]');
        
        this.init();
    }

    init = (e) => {

        this._elSubmit.addEventListener('click', (e) => {
            e.preventDefault();

            this.showProductsList();
        });

        this._elBtnMore.addEventListener('click', (e) => {
            e.preventDefault();

            this.showProductsListMore();
        });
        
        // If the variable sessionStorage exists, display the number of products in the cart
        if (sessionStorage.getItem('cart')) {
            // Get the contents of the variable
            let objectsTable = JSON.parse(sessionStorage.getItem('cart'));
        
            // Display the number of products in the cart
            this._elNbInCart.innerHTML = objectsTable.length;

            // The cart is clickable
            this._elCart.classList.remove('cart--disabled');
        }

    }

    // Display a list of products with filter and limit
    showProductsList = () => {

        // Declare the object XMLHttpRequest
        var xhr;
        xhr = new XMLHttpRequest();
        
        // Initialization of the request
        if (xhr) {	

            // Opening of the request : searched file
            xhr.open('GET', 'index.php?Products_AJAX&action=filterListProducts&filter=' + this._elSelect.value + '&limit=' + sessionStorage.getItem('nb_products'));

            xhr.addEventListener('readystatechange', () => {

                if (xhr.readyState === 4) {							
                    if (xhr.status === 200) {

                        // Receive data from a server 
                        // Insertion DOM
                        this._el.innerHTML = xhr.responseText;

                        // Check if all products are displayed on the site
                        this.checkNbProducts();

                    } else if (xhr.status === 404) {
                        console.log('Le fichier appelé dans la méthode open() n’existe pas.');
                    }
                }
            });

            xhr.send();
        }
    }

    showProductsListMore = () => {
        
        // Declare the object XMLHttpRequest
        var xhr;
        xhr = new XMLHttpRequest();
        
        // Initialization of the request
        if (xhr) {	

            // Opening of the request : searched file
            xhr.open('GET', 'index.php?Products_AJAX&action=displayListProductsMore&limit=' + this.incrementSessionStorage());

            xhr.addEventListener('readystatechange', () => {

                if (xhr.readyState === 4) {							
                    if (xhr.status === 200) {

                        // Receive data from a server 
                        // Insertion DOM
                        this._el.innerHTML = xhr.responseText;

                        // Check if all products are displayed on the site
                        this.checkNbProducts();

                    } else if (xhr.status === 404) {
                        console.log('Le fichier appelé dans la méthode open() n’existe pas.');
                    }
                }
            });

            xhr.send();
        }
        
    }
    
    incrementSessionStorage = () => {
        
        let nbProducts;
        nbProducts = parseInt(sessionStorage.getItem('nb_products')) + 12;
        sessionStorage.setItem('nb_products', nbProducts);
               
        return nbProducts;
    }

    // Hide the button Voir Plus if there are no more products to display
    checkNbProducts = () => {
        
        let elsProducts = this._el.querySelectorAll('[data-js-component="Product"]');
        for (let i = 0, l = elsProducts.length; i < l; i++) {
            // Instantiate the Product class on each tile
            new Product(elsProducts[i]);
        }
        
        if (elsProducts.length < parseInt(sessionStorage.getItem('nb_products'))) {
            this._elBtnMore.classList.remove('btn-more');
            this._elBtnMore.classList.add('hidden');
        }

    }

}