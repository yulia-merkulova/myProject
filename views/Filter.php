	<section class="filter">
		<form action="index.php?Produits_AJAX&filterListeProduits">
			<select name="filter" id="filter" data-js-component="Filter" data-js-filter>
				<option value="">Filter par</option>
				<option value="nom">Ordre alphabétique</option>
				<option value="prix">Ordre de prix</option>
			</select>
			<button class="button--disabled" data-js-btn>Soumettre</button>
		</form>
        
	</section>

	<section data-js-results data-js-component="ProductList">