module app.home {
    class HomeController implements app.home.interfaces.IHome {
        public title: string;
        public image: string;
        public description: string;
        public about: string;
        public skills: app.models.SkillModel[];
        public process: app.models.Process[];


        constructor() {
            this.avoidScrollingTab();
            this.fixBar();
            this.title = "Summary of qualifications";
            this.image = "app/images/edilson.jpg";
            this.skills = new Array<app.models.SkillModel>();
            this.skills.push(
                {
                    description: "Asp.Net WebForms",
                    years: 8,
                },
                {
                    description: "Windows Service",
                    years: 3,
                },
                {
                    description: "NodeJs",
                    years: 1,
                },
                {
                    description: "Asp.Net MVC",
                    years: 5,
                },
                {
                    description: "Less",
                    years: 3,
                },
                {
                    description: "Css",
                    years: 5,
                },
                {
                    description: "Bootstrap",
                    years: 5,
                },
                {
                    description: "JavaScript",
                    years: 6,
                },
                {
                    description: "Jquery",
                    years: 5,
                },
                {
                    description: "Html 5",
                    years: 5,
                },
                {
                    description: "AngularJs",
                    years: 1,
                },
                {
                    description: "Unit Test (NUnit)",
                    years: 5,
                },
                {
                    description: "BDD(SpecFlow)",
                    years: 1,
                },
                {
                    description: "TDD",
                    years: 1,
                },
                {
                    description: "WCF",
                    years: 5,
                },
                {
                    description: "Web API",
                    years: 3,
                },
                {
                    description: "Web Services",
                    years: 6,
                },
                {
                    description: "AWS SDK",
                    years: 2,
                },
                {
                    description: "Scrum Methodology",
                    years: 4,
                },
                {
                    description: "TypeScript",
                    years: 1,
                },
                {
                    description: "Git",
                    years: 5,
                },
                {
                    description: "TFS",
                    years: 4,
                },
                {
                    description: "Sql Server",
                    years: 10,
                },
                {
                    description: "MySQL",
                    years: 6,
                },
                {
                    description: "DynamoDB",
                    years: 1,
                },
                {
                    description: "MongoDB",
                    years: 1,
                },
            );
            this.process = new Array<app.models.Process>();
            let desc1 = "Meet to acquire information about the project that will be useful for the next step. This information is gathered to ensure I achieve the client's goal.";
            let desc3 = "Meeting with the client to show the backlog, schedule and discuss the employees that will be needed to achieve the deadline.";
            let desc4 = "First sprint starts with the planning meeting. This will occur within 10 working days and we will decide the points/hour and the tasks that will be related for each history.";
            let desc5 = "Showcase the material that was developed as a result of previous steps.";

            this.process.push(
                {
                    description: desc1,
                    id: 1,

                },
                {
                    description: "Following the first step, I will determine what technology will be used for the client. Additionally, I will define the backlog. ",
                    id: 2,

                },
                {
                    description: desc3,
                    id: 3,

                }
                ,
                {
                    description: desc4,
                    id: 4,

                }
                ,
                {
                    description: desc5,
                    id: 5,

                },
                {
                    description: "Quality assurance meeting to discuss whether goals were met or how we can improve in the future.",
                    id: 6,
                },
            );

            this.about = "I have over 16 years of experience as a system analyst, working in development, customization and implementation using Visual Studio .Net. The platforms I've worked with are Web, Windows application and REST Services.";


        }

        private avoidScrollingTab(): void {
            $(".myTab").click(function (e: JQueryEventObject) {
                e.preventDefault();
            });
        }

        private fixBar(): void {
            $(window).scroll(function () {
                if (navigator.platform === "Win32") {
                    if ($(window).scrollTop() > 718) {
                        $("#navBar").addClass("navbar-fixed-top");
                    }
                    if ($(window).scrollTop() < 718) {
                        $("#navBar").removeClass("navbar-fixed-top");
                    }
                } else if (navigator.platform.indexOf("Linux armv7") >= 0) {
                    if (window.innerHeight > window.innerWidth) {
                        if ($(window).scrollTop() > 1383) {
                            $("#navBar").addClass("navbar-fixed-top");
                        }
                        if ($(window).scrollTop() < 1383) {
                            $("#navBar").removeClass("navbar-fixed-top");
                        }
                    } else {
                        if ($(window).scrollTop() > 465) {
                            $("#navBar").addClass("navbar-fixed-top");
                        }
                        if ($(window).scrollTop() < 465) {
                            $("#navBar").removeClass("navbar-fixed-top");
                        }
                    }

                }
            });
        }
    }
    angular
        .module("home")
        .controller("HomeController", HomeController);
}
