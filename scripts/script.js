document.addEventListener('DOMContentLoaded', () => {
	//Initializer 12 produits sur la page
	sessionStorage.setItem('nb_products', 12);

    let components = document.querySelectorAll('[data-js-component]');

	for (let i = 0, l = components.length; i < l; i++) {
		
		let componentDataSet = components[i].dataset.jsComponent,
			componentElement = components[i];

		for (let key of Object.keys(classMapping)) {
			if (componentDataSet == key) new classMapping[componentDataSet](componentElement);
		}
	}
});

