class ScrollUp {
    constructor() {
        this.DOM = {};
        this.DOM.scrollUp = document.querySelector("#scrolltop");
        this.docHeight = document.body.clientHeight;
        this.footerHeight = document.querySelector("#footer").clientHeight;
        this._addEvent();
    }

    _showScrollUp() {
        if (window.scrollY >= 200) {
            this.DOM.scrollUp.classList.add("show-scrolltop");
        } else {
            this.DOM.scrollUp.classList.remove("show-scrolltop");
        }
    }

    _scrollTo() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    // _stickScrollUp() {
    //     const scrollCount =
    //         document.documentElement.scrollTop || document.body.scrollTop;
    //     const scrollPos = document.documentElement.clientHeight + scrollCount;
    //     if (this.docHeight - scrollPos <= this.footerHeight) {
    //         this.DOM.scrollUp.style.position = "absolute";
    //         this.DOM.scrollUp.style.bottom = this.footerHeight + 20 + "px";
    //     } else {
    //         this.DOM.scrollUp.style.position = "fixed";
    //         this.DOM.scrollUp.style.bottom = 20 + "px";
    //     }
    // }

    _addEvent() {
        window.addEventListener("scroll", this._showScrollUp.bind(this));
        this.DOM.scrollUp.addEventListener("click", this._scrollTo);
        // window.addEventListener("scroll", this._stickScrollUp.bind(this));
    }
}
