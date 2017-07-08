module app.home {
    class ContactController {
        constructor() {
            this.setMap();
        }

        public setMap(): void {
            let mapOptions = {
                center: new google.maps.LatLng(-23.588703, -46.658545),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                zoom: 4,
            };

            let map = new google.maps.Map(document.getElementById("map"), mapOptions);
        }
    }
    angular.module("home").controller("contactController", ContactController);
}


