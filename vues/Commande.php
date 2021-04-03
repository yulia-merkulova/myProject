
    <section data-js-component="Panier">
        
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
                <label for="courriel">Courriel* :</label>
                <input type="email" id="email" name="courriel" data-js-input="Courriel" required><small class="error-message" data-js-error-msg></small>
            </div>
            <div>
                <label for="infolettre">Inscription à l'infolrttre :</label>
                <input type="checkbox" id="infolettre" name="infolettre" data-js-input="Infolettre"><small class="error-message" data-js-error-msg></small>
            </div>
            <div>
                <label for="carteCredit">Carte de crédit* :</label>
                <input type="text" id="carteCredit" name="carteCredit" data-js-input="CarteCredit" required><small class="error-message" data-js-error-msg></small>
            </div>
            <div>
                <label for="expiration">Expiration* :</label>
                <input type="date" id="expiration" name="expiration" data-js-input="Expiration" required><small class="error-message" data-js-error-msg></small>
            </div>
            <div>
                <label for="codeSecurite">Code de sécurité* :</label>
                <input type="text" id="codeSecurite" name="codeSecurite" data-js-input="CodeSecurite" required><small class="error-message" data-js-error-msg></small>
            </div>
            <button data-js-submit>Soumettre</button>
        </form>
        <div class="retour" data-js-retour>
            <p><span><<</span> Retour à la commande</p>
        </div>
    </section>
    <section class="hidden" data-js-thank>
        <h2>Merci !</h2>
        <a href="index.php">Continuer votre visite</a>
    </section>

