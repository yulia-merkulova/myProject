
    <section data-js-component="Cart">
        
    </section>
    <section class="hidden" data-js-formulaire>
        <h2>Payer</h2>
        <form data-js-form>
            <div>
                <label for="nom">Nom* :</label>
                <input type="text" id="nom" name="nom" data-js-input="Nom" required><small class="error-message" data-js-error-msg></small>
            </div>
            <div>
                <label for="prenom">Prénom* :</label>
                <input type="text" id="prenom" name="prenom" data-js-input="Prenom" required><small class="error-message" data-js-error-msg></small>
            </div>
            <div>
                <label for="adresse">Adresse* :</label>
                <input type="text" id="adresse" name="adresse" data-js-input="Adresse" required><small class="error-message" data-js-error-msg></small>
            </div>
            <div>
                <label for="codePostal">Code Postal* :</label>
                <input type="text" id="codePostal" name="codePostal" data-js-input="CodePostal" required><small class="error-message" data-js-error-msg></small>
            </div>
            <div>
                <label for="email">Courriel* :</label>
                <input type="email" id="email" name="email" data-js-input="Email" required><small class="error-message" data-js-error-msg></small>
            </div>
            <div>
                <label for="infolettre">Inscription à l'infolrttre :</label>
                <input type="checkbox" id="infolettre" name="infolettre" data-js-input="Infolettre"><small class="error-message" data-js-error-msg></small>
            </div>
            <div>
                <label for="creditCard">Carte de crédit* :</label>
                <input type="text" id="creditCard" name="creditCard" data-js-input="CreditCard" required><small class="error-message" data-js-error-msg></small>
            </div>
            <div>
                <label for="expiration">Expiration* :</label>
                <input type="date" id="expiration" name="expiration" data-js-input="Expiration" required><small class="error-message" data-js-error-msg></small>
            </div>
            <div>
                <label for="codeCvv">Code de sécurité* :</label>
                <input type="text" id="codecvv" name="codeCvv" data-js-input="CodeCvv" required><small class="error-message" data-js-error-msg></small>
            </div>
            <button data-js-submit>Soumettre</button>
        </form>
        <div class="return" data-js-return>
            <p><span><<</span> Retour à la commande</p>
        </div>
    </section>
    <section class="hidden" data-js-thank>
        <h2>Merci !</h2>
        <a href="index.php">Continuer votre visite</a>
    </section>

