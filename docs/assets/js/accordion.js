class Accordion {
    constructor() {
        this.DOM = {};
        this.DOM.triggers = document.querySelectorAll(".faq__question");
        this.triggers = Array.prototype.slice.call(this.DOM.triggers);
        this._init();
    }

    _slideUp(el, duration = 400) {
        el.style.height = el.offsetHeight + "px";
        el.offsetHeight;
        el.style.transitionProperty = "height, margin, padding";
        el.style.transitionDuration = duration + "ms";
        el.style.transitionTimingFunction = "ease";
        el.style.overflow = "hidden";
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
        el.style.marginTop = 0;
        el.style.marginBottom = 0;
        setTimeout(() => {
            el.style.display = "none";
            el.style.removeProperty("height");
            el.style.removeProperty("padding-top");
            el.style.removeProperty("padding-bottom");
            el.style.removeProperty("margin-top");
            el.style.removeProperty("margin-bottom");
            el.style.removeProperty("overflow");
            el.style.removeProperty("transition-duration");
            el.style.removeProperty("transition-property");
            el.style.removeProperty("transition-timing-function");
            el.classList.remove("is-open");
        }, duration);
    }

    _slideDown(el, duration = 400) {
        el.classList.add("is-open");
        el.style.removeProperty("display");
        let display = window.getComputedStyle(el).display;
        if (display === "none") {
            display = "block";
        }
        el.style.display = display;
        let height = el.offsetHeight;
        el.style.overflow = "hidden";
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
        el.style.marginTop = 0;
        el.style.marginBottom = 0;
        el.offsetHeight;
        el.style.transitionProperty = "height, margin, padding";
        el.style.transitionDuration = duration + "ms";
        el.style.transitionTimingFunction = "ease";
        el.style.height = height + "px";
        el.style.removeProperty("padding-top");
        el.style.removeProperty("padding-bottom");
        el.style.removeProperty("margin-top");
        el.style.removeProperty("margin-bottom");
        setTimeout(() => {
            el.style.removeProperty("height");
            el.style.removeProperty("overflow");
            el.style.removeProperty("transition-duration");
            el.style.removeProperty("transition-property");
            el.style.removeProperty("transition-timing-function");
        }, duration);
    }

    _slideToggle(el, duration = 400) {
        if (window.getComputedStyle(el).display === "none") {
            return this._slideDown(el, duration);
        } else {
            return this._slideUp(el, duration);
        }
    }

    _init() {
        this.triggers.forEach((trigger) => {
            trigger.addEventListener("click", () => {
                trigger.classList.toggle("is-active");
                const el = trigger.parentElement.querySelector(".faq__answer");
                this._slideToggle(el);
            });
        });
    }
}
