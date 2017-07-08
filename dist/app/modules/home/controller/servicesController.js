var app;
(function (app) {
    var home;
    (function (home) {
        var ServiceController = (function () {
            function ServiceController() {
                this.service = new Array();
                var description = "Using Html5, Bootstrap, Less, CSS, Jquery, Typescript / JavaScript to achieve the results";
                description += " according to the prototype made respecting and using the Bootstrap´s rules";
                var descriptionBackEnd = "C# is the language used for developing the unique back-end services for serving many application";
                descriptionBackEnd += "  that will have access and will be necessary to achieve the goals expected for each of them, the ";
                descriptionBackEnd += "architecture used is the N tiers patterns, using IOC, Services / Business Layer / Entity / Repository";
                this.service.push({
                    description: description,
                    icon: "app/assets/images/website-development.png",
                    title: "Web Development",
                }, {
                    description: descriptionBackEnd,
                    icon: "app/assets/images/back-end-developer.png",
                    title: "Back-End Developer",
                }, {
                    description: "Working with the two aproaches above to build a system / service / web page / application",
                    icon: "app/assets/images/full-stack-developer.png",
                    title: "Full Stack Developer",
                });
            }
            return ServiceController;
        }());
        angular
            .module("home")
            .controller("ServicesController", ServiceController);
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
