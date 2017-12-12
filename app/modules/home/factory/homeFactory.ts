module app.home {
    class HomeFactory implements IHomeFactory {
        public getProcess(): string {
            return "../../../data/process.json";
        }
        

        public getWork(): string {
            return "../../../data/work.json";
        }

        public getService(): string {
            return "../../../data/service.json";
        }

         public getSkills(): string {
            return "../../../data/skills.json";
        }

    }
     angular
        .module("home")
        .factory("HomeService", HomeFactory);
}
