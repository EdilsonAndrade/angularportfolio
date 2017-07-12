var app;
(function (app) {
    var home;
    (function (home) {
        var ContactController = (function () {
            function ContactController() {
                this.setMap();
            }
            ContactController.prototype.setMap = function () {
                var mapOptions = {
                    center: new google.maps.LatLng(-23.588703, -46.658545),
                    draggable: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scaleControl: false,
                    scrollwheel: false,
                    zoom: 10,
                };
                var map = new google.maps.Map(document.getElementById("map"), mapOptions);
            };
            return ContactController;
        }());
        angular.module("home").controller("contactController", ContactController);
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
