// The class Cart is used to display a list of products in the cart (variable sessionStorage)
class Cart {
    constructor(el) {
      
        this._el = el;
      
        this.displayPage();
        this.checkTotal();
    }
    
    displayPage = () => {
        
        let contentSection = `<h2>Confirmation de la commande</h2>
                        <table data-js-table>
                        <thead>
                            <th>Articles</th>
                            <th>Prix</th>
                            <th>Nombre</th>
                            <th>Total</th>
                        </thead>
                        <tbody data-js-results>`;

        let objectsTable = JSON.parse(sessionStorage.getItem("cart")); 
  
        let total = 0;
        for (let i = 0, l = objectsTable.length; i < l; i++) {
            let product = objectsTable[i];
                           
            contentSection +=`<tr><td>${product.name}</td>
                        <td>${product.price}</td>
                        <td><input id="${product.id}" type="number" data-js-component="Input" value ="${product.quantity}"></td>
                        <td data-js-totalProduct>${product.price * product.quantity}</td></tr>`;
            total += product.price * product.quantity;
        }                

        contentSection += `</tbody>    
                        </table>
                        <p data-js-total>Total : ${total} CAD</p>
                        <button class="btn-order">Passer la commande</button>
                        </section>`;

        this._el.innerHTML = contentSection;
        
        let elInputs = document.querySelectorAll('[data-js-component="Input"]');
        for (let i = 0, l = elInputs.length; i < l; i++) new Input(elInputs[i]); 

    }

    checkTotal = () => {

        let elButton = document.querySelector('.btn-order');
        elButton.addEventListener('click', (e) => {
            let estVal = true;
            let elsTotalProduct = document.querySelectorAll('[data-js-totalProduct]');
            for (let i = 0, l = elsTotalProduct.length; i < l; i++) {
                
                if (parseInt(elsTotalProduct[i].innerHTML) <= 0) estVal = false;
            }
            
            if (estVal) new Order(elButton);
        });
        
    }

}