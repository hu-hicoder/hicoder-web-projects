document.addEventListener("DOMContentLoaded", function () {
    const main = new Main();
});

class Main {
    constructor() {
        this._observers = [];
        this._init();
    }

    set observers(val) {
        this._observers.push(val);
    }

    get observers() {
        return this._observers;
    }

    _init() {
        new Accordion();
        new MobileMenu();
        new ScrollAction();
        new ScrollUp();
        this.hero = new HeroSlider(".swiper-container");
        this._scrollInit();
    }

    _inviewAnimation(el, inview) {
        if (inview) {
            el.classList.add("inview");
        } else {
            el.classList.remove("inview");
        }
    }

    _toggleSlideAnimation(el, inview) {
        if (inview) {
            this.hero.start();
        } else {
            this.hero.stop();
        }
    }

    _destroyObservers() {
        this.observers.forEach((ob) => {
            ob.destroy();
        });
    }

    destroy() {
        this._destroyObservers();
    }

    _scrollInit() {
        this.observers = new ScrollObserver(".fade", this._inviewAnimation);
        this.observers = new ScrollObserver(
            ".swiper-container",
            this._toggleSlideAnimation.bind(this),
            { once: false }
        );
    }
}
