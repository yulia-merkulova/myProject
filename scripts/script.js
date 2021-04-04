document.addEventListener('DOMContentLoaded', () => {
	// Initialize 12 products on the page
	sessionStorage.setItem('nb_products', 12);

    let components = document.querySelectorAll('[data-js-component]');

	for (let i = 0, l = components.length; i < l; i++) {
		
		let componentDataSet = components[i].dataset.jsComponent,
			componentElement = components[i];
		// Instantiating the class when loading the page
		for (let key of Object.keys(classMapping)) {
			if (componentDataSet == key) new classMapping[componentDataSet](componentElement);
		}
	}
});

