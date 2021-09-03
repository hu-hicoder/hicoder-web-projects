class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector(".header__btn");
        this.DOM.nav = document.querySelector(".header__nav");
        this.DOM.links = document.querySelectorAll(".header__link");
        this.links = Array.prototype.slice.call(this.DOM.links);
        this._addEvent();
    }

    _toggle() {
        this.DOM.btn.classList.toggle("is-active");
        this.DOM.nav.classList.toggle("is-active");
    }

    _remove() {
        this.DOM.btn.classList.remove("is-active");
        this.DOM.nav.classList.remove("is-active");
    }

    _addEvent() {
        this.DOM.btn.addEventListener("click", this._toggle.bind(this));
        this.links.forEach((link) => {
            link.addEventListener("click", this._remove.bind(this));
        });
    }
}
