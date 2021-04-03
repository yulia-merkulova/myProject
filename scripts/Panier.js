class Panier {
    constructor(el) {
      
        this._el = el;
      
        this.afficherPage();
        this.verifierTotal();
    }
    
    afficherPage = () => {
        
        let contenuSection = `<h2>Confirmation de la commande</h2>
                        <table data-js-table>
                        <thead>
                            <th>Articles</th>
                            <th>Prix</th>
                            <th>Nombre</th>
                            <th>Total</th>
                        </thead>
                        <tbody data-js-results>`;

        let tableauObjets = JSON.parse(sessionStorage.getItem("panier")); 
  
        let total = 0;
        for (let i = 0, l = tableauObjets.length; i < l; i++) {
            let produit = tableauObjets[i];
                           
            contenuSection +=`<tr><td>${produit.nom}</td>
                        <td>${produit.prix}</td>
                        <td><input id="${produit.id}" type="number" data-js-component="Input" value ="${produit.quantity}"></td>
                        <td data-js-totalProduct>${produit.prix * produit.quantity}</td></tr>`;
            total += produit.prix * produit.quantity;
        }                

        contenuSection += `</tbody>    
                        </table>
                        <p data-js-total>Total : ${total} CAD</p>
                        <button class="btn-commande">Passer la commande</button>
                        </section>`;

        this._el.innerHTML = contenuSection;
        
        let elInputs = document.querySelectorAll('[data-js-component="Input"]');
        for (let i = 0, l = elInputs.length; i < l; i++) new Input(elInputs[i]); 

    }

    verifierTotal = () => {

        let elButton = document.querySelector('.btn-commande');
        elButton.addEventListener('click', (e) => {
            let estVal = true;
            let elsTotalProduct = document.querySelectorAll('[data-js-totalProduct]');
            for (let i = 0, l = elsTotalProduct.length; i < l; i++) {
                
                if (parseInt(elsTotalProduct[i].innerHTML) <= 0) estVal = false;
            }
            
            if (estVal) new Commande(elButton);
        });
        
    }

}