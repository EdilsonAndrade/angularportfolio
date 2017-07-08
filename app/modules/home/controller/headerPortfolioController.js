var app;
(function (app) {
    var home;
    (function (home) {
        var HeaderPortfolio = (function () {
            function HeaderPortfolio() {
                this.pictureUrl = "app/assets/images/myphoto.jpg";
            }
            return HeaderPortfolio;
        }());
        angular
            .module("home")
            .controller("headerPortfolioController", HeaderPortfolio);
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
