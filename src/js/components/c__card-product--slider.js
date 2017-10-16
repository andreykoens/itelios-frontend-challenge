/* #############################################################################
    CARD PRODUCT SLIDER
############################################################################# */

    class CPSlider {

        constructor(sliderElement, sliderOptions = {}) {
            this.slider = sliderElement;
            this.init(sliderOptions);
        }

        init(sliderOptions) {
            this.options = this._getOptions(sliderOptions);
            this.slides = this.slider.querySelectorAll(".card-product");
            this.body = this.slider.querySelector(".card-product--slider");
            this.pager = this.slider.querySelector(".card-product--slider-pager");
            this.slideWidth = this.slides[0].clientWidth;
            if (window.innerWidth >= 1024) { this.itemsByPage = 3; } else { this.itemsByPage = 1; }
            this.pageCount = Math.ceil(this.slides.length / this.itemsByPage);
            this.activePage = 0;
            this.nextPage = 0;
            this.slider.querySelector(".detail").setAttribute("style", "height: "+this.slides[0].clientHeight+"px");

            this.paginate();
            this.interval();
        }

        paginate() {
            while (this.pager.hasChildNodes()) {
              this.pager.removeChild(this.pager.lastChild);
            }

            for (let i = 0; i < this.pageCount; i++) {
                let pagerItem = document.createElement("span");
                pagerItem.setAttribute("data-page-id", i);
                pagerItem.addEventListener("click", (e) => { this.changeSlide(i); });
                this.pager.appendChild(pagerItem);
            }
            this.pager.childNodes[this.activePage].classList.add("is-active");
        }

        next() {
            if (this.activePage < (this.pageCount -1)) {
                this.nextPage = this.activePage + 1;
            } else {
                this.nextPage = 0;
            }
            this.changeSlide();
        }

        changeSlide(newSlide) {
            if (typeof(newSlide) != 'undefined' && newSlide != this.activePage) {
                this.nextPage = newSlide;
                this.interval();
            }
            this.body.setAttribute("style", "transform: translateX(-" + (this.itemsByPage * this.slideWidth * this.nextPage) + "px);" );
            this.pager.childNodes[this.activePage].classList.remove("is-active");
            this.pager.childNodes[this.nextPage].classList.add("is-active");
            this.activePage = this.nextPage;
        }

        interval() {
            clearInterval(this.slideInterval);
            this.slideInterval = setInterval(() => {
                this.next();
            }, this.options.slideTimeout);
        }

        reinit() {
            if (window.innerWidth >= 1024) { this.itemsByPage = 3; } else { this.itemsByPage = 1; }
            this.slideWidth = this.slides[0].clientWidth;
            this.slider.querySelector(".detail").setAttribute("style", "height: "+this.slides[0].clientHeight+"px");
            this.pageCount = Math.ceil(this.slides.length / this.itemsByPage);
            this.paginate();
            this.changeSlide(0);
        }

        _getOptions(options) {
            const defaultOptions = {
                slideTimeout: 5000
            };
            return Object.assign(defaultOptions, options);
        }

    }

    module.exports = CPSlider;
