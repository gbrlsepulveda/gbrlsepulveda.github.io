;(function(window, document) {

    'use strict';

    var Portifa = (function() {

        var app = {
            html: document.body.parentNode,
            logo: document.querySelector('h1.title a'),
            nav: document.querySelector('#nav'),
            navButton: document.querySelector('.header .nav-button')
        };

        app.bindEvents = function() {
            app.navButton.addEventListener('click', function(event) {
                event.preventDefault();
                this.classList.toggle('is-active');

                if (window.pageYOffset > 150) {
                    app.nav.classList.add('is-active');
                } else {
                    app.nav.classList.toggle('is-active');
                }
                window.scroll(0,0);
            });

            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 150) {
                    app.html.classList.add('is-menufloated');
                } else {
                    app.html.classList.remove('is-menufloated');
                }
            });
        };

        app.init = function() {
            this.bindEvents();
        };

        return app;
    })();

    Portifa.init();

})(window, document);
