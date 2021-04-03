class Filter {
    constructor(el) {
      
        this._el = el;
        this._elBtn = this._el.nextElementSibling;
        
        this.init();
    }

    init = () => {

        this._el.addEventListener('change', (e) => {
            e.preventDefault();
            
            if (this._el.value !== "") this._elBtn.classList.remove('button--disabled');
            else this._elBtn.classList.add('button--disabled');

        });

    }
        
}