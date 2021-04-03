
		<div class="products products--4">
			
			<?php
				

				foreach ($data as $produit) {
			?>
				
				<article class="<?= ($produit['inventaire'] <= '0')? 'produit--disabled' : 'product' ?> " data-js-id="<?= $produit["id"]; ?>" data-js-component="Product">
					<h3 data-js-nom="<?= html_entity_decode($produit["nom"]); ?>"><?= html_entity_decode($produit["nom"]); ?></h3>
					<img src="<?= $produit["lienimage"]; ?>" alt="<?= html_entity_decode($produit["nom"]); ?>">
					<p data-js-prix="<?= $produit["prix"]; ?>">Prix : <?= $produit["prix"]; ?> CAD</p>
					<?= ($produit['inventaire'] <= 0)? "<p>Épuisé</p>" : "<p data-js-inventaire=". $produit["inventaire"] . ">En stock : " . $produit["inventaire"] . " unités</p>" ?>
				</article>
			<?php
				}
			?>

		</div>
		<button class="btn-more" data-js-component="ProductListMore">Voir plus</button>
		

