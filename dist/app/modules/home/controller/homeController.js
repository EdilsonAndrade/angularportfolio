var app;
(function (app) {
    var home;
    (function (home) {
        var HomeController = (function () {
            function HomeController() {
                this.avoidScrollingTab();
                this.fixBar();
                this.title = "Summary of qualifications";
                this.image = "app/images/edilson.jpg";
                this.skills = new Array();
                this.skills.push({
                    description: "Asp.Net WebForms",
                    years: 8,
                }, {
                    description: "Windows Service",
                    years: 3,
                }, {
                    description: "NodeJs",
                    years: 1,
                }, {
                    description: "Asp.Net MVC",
                    years: 5,
                }, {
                    description: "Less",
                    years: 3,
                }, {
                    description: "Css",
                    years: 5,
                }, {
                    description: "Bootstrap",
                    years: 5,
                }, {
                    description: "JavaScript",
                    years: 6,
                }, {
                    description: "Jquery",
                    years: 5,
                }, {
                    description: "Html 5",
                    years: 5,
                }, {
                    description: "AngularJs",
                    years: 1,
                }, {
                    description: "Unit Test (NUnit)",
                    years: 5,
                }, {
                    description: "BDD(SpecFlow)",
                    years: 1,
                }, {
                    description: "TDD",
                    years: 1,
                }, {
                    description: "WCF",
                    years: 5,
                }, {
                    description: "Web API",
                    years: 3,
                }, {
                    description: "Web Services",
                    years: 6,
                }, {
                    description: "AWS SDK",
                    years: 2,
                }, {
                    description: "Scrum Methodology",
                    years: 4,
                }, {
                    description: "TypeScript",
                    years: 1,
                }, {
                    description: "Git",
                    years: 5,
                }, {
                    description: "TFS",
                    years: 4,
                }, {
                    description: "Sql Server",
                    years: 10,
                }, {
                    description: "MySQL",
                    years: 6,
                }, {
                    description: "DynamoDB",
                    years: 1,
                }, {
                    description: "MongoDB",
                    years: 1,
                });
                this.process = new Array();
                var desc1 = "Meeting to acquire many information about the project that will be use for the next step,";
                desc1 += " to achieve the client´s goal.";
                var desc3 = "Metting with the client to show the backlog, schedule ";
                desc3 += "and the employess that will be needed to achieve the deadline.";
                var desc4 = "First sprint starts with the planning meeting, with 10 working days ";
                desc4 += "deciding the points / hour and the tasks that will be related for each history.";
                var desc5 = "Show case made by the client assisted with the team.";
                this.process.push({
                    description: desc1,
                    id: 1,
                }, {
                    description: "Based in the first step and the technologic that will be used for the client, define the backlog.",
                    id: 2,
                }, {
                    description: desc3,
                    id: 3,
                }, {
                    description: desc4,
                    id: 4,
                }, {
                    description: desc5,
                    id: 5,
                }, {
                    description: "Restrospective with the team to say what went wrong and what went good, and decide how to improve",
                    id: 6,
                });
                this.about = "Over 16 years of experience as system analyst, working in development, ";
                this.about += "customization and implementation using Visual Studio .Net for Web, Windows application and REST Services.";
            }
            HomeController.prototype.avoidScrollingTab = function () {
                $(".myTab").click(function (e) {
                    e.preventDefault();
                });
            };
            HomeController.prototype.fixBar = function () {
                $(window).scroll(function () {
                    if (navigator.platform === "Win32") {
                        if ($(window).scrollTop() > 718) {
                            $("#navBar").addClass("navbar-fixed-top");
                        }
                        if ($(window).scrollTop() < 718) {
                            $("#navBar").removeClass("navbar-fixed-top");
                        }
                    }
                    else if (navigator.platform.indexOf("Linux armv7") >= 0) {
                        if (window.innerHeight > window.innerWidth) {
                            if ($(window).scrollTop() > 1383) {
                                $("#navBar").addClass("navbar-fixed-top");
                            }
                            if ($(window).scrollTop() < 1383) {
                                $("#navBar").removeClass("navbar-fixed-top");
                            }
                        }
                        else {
                            if ($(window).scrollTop() > 465) {
                                $("#navBar").addClass("navbar-fixed-top");
                            }
                            if ($(window).scrollTop() < 465) {
                                $("#navBar").removeClass("navbar-fixed-top");
                            }
                        }
                    }
                });
            };
            return HomeController;
        }());
        angular
            .module("home")
            .controller("HomeController", HomeController);
    })(home = app.home || (app.home = {}));
})(app || (app = {}));
