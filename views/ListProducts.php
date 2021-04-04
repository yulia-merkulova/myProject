
		<div class="products products--4">
			
			<?php
				

				foreach ($data as $product) {
			?>
				
				<article class="<?= ($product['inventaire'] <= '0')? 'product--disabled' : 'product' ?> " data-js-id="<?= $product["id"]; ?>" data-js-component="Product">
					<h3 data-js-name="<?= html_entity_decode($product["nom"]); ?>"><?= html_entity_decode($product["nom"]); ?></h3>
					<img src="<?= $product["lienimage"]; ?>" alt="<?= html_entity_decode($product["nom"]); ?>">
					<p data-js-price="<?= $product["prix"]; ?>">Prix : <?= $product["prix"]; ?> CAD</p>
					<?= ($product['inventaire'] <= 0)? "<p>Épuisé</p>" : "<p data-js-inventory=". $product["inventaire"] . ">En stock : " . $product["inventaire"] . " unités</p>" ?>
				</article>
			<?php
				}
			?>

		</div>
	</section>
		

