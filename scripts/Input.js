// The class Input is used to change the number of products in the cart and calculate the total sum
class Input {
    constructor(el) {
        this._el = el;
        this._id = this._el.id;
        this._elPrice = this._el.parentNode.previousElementSibling;
        this._elTotalProduct = this._el.parentNode.nextElementSibling;
        this._elsTotalProduct = document.querySelectorAll('[data-js-totalProduct]');
        this._elTotal   = document.querySelector('[data-js-total]');
        
        this.init();

    }

    init = (e) => {

        this._el.addEventListener('input', (e) => {
            e.preventDefault();

            this.recalculate();
            this.recalculateTotal();
            this.setSessionStrage();
        });

    }

    // Сalculate the sum for one product
    recalculate = () => {
        
        this._elTotalProduct.innerHTML = parseInt(this._elPrice.innerHTML) * this._el.value;
         
    }
    
    // Сalculate the total for all products in the table
    recalculateTotal = () => {
        
        let sumTotal = 0;
        for (let i = 0, l = this._elsTotalProduct.length; i < l; i++) {
            sumTotal += parseInt(this._elsTotalProduct[i].innerHTML);
        }
        this._elTotal.innerHTML = "Total : " + sumTotal + " CAD";
         
    }

    // Change the number of items in the cart
    setSessionStrage = () => {
        let objectsTable = JSON.parse(sessionStorage.getItem('cart'));
        
        let object = objectsTable.find(x => x.id === this._id);
        object.quantity = this._el.value;

        sessionStorage.setItem('cart', JSON.stringify(objectsTable));
    }

}