module app.home {
    class HeaderPortfolio implements app.common.IJob {
        public pictureUrl: string;
        public name: string;
        public jobTitle: string;
        public sumariQualifications: ISummaryQualitifcation;

        constructor() {
            this.pictureUrl = "app/assets/images/myphoto.jpg";
        }
    }
    angular
        .module("home")
        .controller("headerPortfolioController", HeaderPortfolio);
}


