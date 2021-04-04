// The class Product is used to add a product to the variable sessionStorage
class Product {
    constructor(el) {
        this._el = el;
        this._elName = this._el.querySelector('[data-js-name]');
        this._elPrice = this._el.querySelector('[data-js-price]');
        this._elInventory = this._el.querySelector('[data-js-inventory]');
        this._elCart = document.querySelector('[data-js-cart]');
        this._elNbInCart = document.querySelector('[data-js-nbInCart]');
        
        this.init();
    }

    init = (e) => {

        this._el.addEventListener('click', (e) => {
            e.preventDefault();
            
            this.addProductToCart();
        });

    }

    addProductToCart = () => {

        let newObject = {},
            index,
            objectsTable;
    
        if (!sessionStorage.getItem('cart')) {
            objectsTable = [];
            this._elCart.classList.remove('cart--disabled');  
        }
        else {
            if (Array.isArray(JSON.parse(sessionStorage.cart))) objectsTable = JSON.parse(sessionStorage.getItem('cart'));
            else {
                objectsTable = [];
                objectsTable.push(JSON.parse(sessionStorage.getItem('cart')));
            }
        }
        
        newObject.id = this._el.dataset.jsId;
        newObject.name = this._elName.dataset.jsName;
        newObject.price = this._elPrice.dataset.jsPrice;
        newObject.inventory = this._elInventory.dataset.jsInventory;
        newObject.quantity = 1;
        
        for (let i = 0, l = objectsTable.length; i < l; i++) {
            if (objectsTable[i].id === newObject.id) 
                index = i;
        }
        
        // If the product is already added to the cart, quantity is increased +1
        if (typeof index != "undefined") objectsTable[index].quantity++
        else objectsTable.push(newObject);

        sessionStorage.setItem('cart', JSON.stringify(objectsTable));
        
        // Display the number of products in the cart
        this._elNbInCart.innerHTML = objectsTable.length;
    }
        
}