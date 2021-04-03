class Input {
    constructor(el) {
        this._el = el;
        this._id = this._el.id;
        this._elPrix = this._el.parentNode.previousElementSibling;
        this._elTotalProduct = this._el.parentNode.nextElementSibling;
        this._elsTotalProduct = document.querySelectorAll('[data-js-totalProduct]');
        this._elTotal   = document.querySelector('[data-js-total]');
        
        this.init();

    }

    init = (e) => {

        this._el.addEventListener('input', (e) => {
            e.preventDefault();

            this.recalculer();
            this.recalculerTotal();
            this.setSessionStrage();
        });

    }

    recalculer = () => {
        
        this._elTotalProduct.innerHTML = parseInt(this._elPrix.innerHTML) * this._el.value;
         
    }
    
    recalculerTotal = () => {
        
        let sumTotal = 0;
        for (let i = 0, l = this._elsTotalProduct.length; i < l; i++) {
            sumTotal += parseInt(this._elsTotalProduct[i].innerHTML);
        }
        this._elTotal.innerHTML = "Total : " + sumTotal + " CAD";
         
    }

    setSessionStrage = () => {
        let tableauObjets = JSON.parse(sessionStorage.getItem("panier"));
        
        let objet = tableauObjets.find(x => x.id === this._id);
        objet.quantity = this._el.value;

        sessionStorage.setItem('panier', JSON.stringify(tableauObjets));
    }

}