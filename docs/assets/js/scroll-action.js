class ScrollAction {
    constructor() {
        this.DOM = {};
        this.DOM.header = document.querySelector("#header");
        this.DOM.links = document.querySelectorAll('a[href^="#"]');
        this.links = Array.prototype.slice.call(this.DOM.links);
        this._init();
    }

    _init() {
        this.links.forEach((link) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = link.hash;
                const targetElement = document.querySelector(targetId);
                const targetOffsetTop =
                    window.pageYOffset +
                    targetElement.getBoundingClientRect().top;
                const headerHeight = this.DOM.header.offsetHeight;
                const totalScrollAmount = targetOffsetTop - headerHeight;
                window.scrollTo({
                    top: totalScrollAmount,
                    behavior: "smooth",
                });
            });
        });
    }
}
