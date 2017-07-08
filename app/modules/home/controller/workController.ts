module app.home {
    class WorkController implements IWork {
        public Work: Array<app.models.Work>;

        constructor() {
            this.Work = new Array<app.models.Work>();

            this.Work.push(
                {
                    companyName: "Resource IT - JBS (USA) - remote job",
                    jobDescription: ["Responsible for developing MVC 5 Application with Razor Framework , using Typescript, Jquery, Bootstrap, IOC (Dependency Injection) and SQL Server DataBase."],
                    period: "06/2017 - current",
                },
                {
                    companyName: "Accenture Avanade",
                    jobDescription: ["Responsible for developing middleware controller for the security access between the external client and the NodeJs service, using .Net C# Framework 4.5.",
                        "Responsible for developing middleware using NodeJs to access a set of apis as many as necessary.",
                        "Responsible for creating strategy to access Services to get data from Mainframe services.",
                        "Working as full stack developer using Angular Js, NodeJs, Wcf to new internet portal for a new client’s portal."],
                    period: "09/2016 - 06/2017",
                },
                {
                    companyName: "Ap81 - DPaschoal",
                    jobDescription: ["Responsible for creating the achitheture of Web.Api  using .net c# to be consummed by Angular Js 2 application.",
                        "Responsible for analyzing  and for obtaining information with the client to describe documentation and to support developers to design application.",
                        "Responsible for preseting the application developed to the client after each sprint."],
                    period: "06/2016 - 08/2016",
                },
                {
                    companyName: "Ci&t Software",
                    jobDescription: ["Responsible for programming in an international project www.transcanada.com using Agile methodology (Scrum, Kanban), C# Mvc 5, Dependecy Injection, NHibernate, Sql Server.",
                        "Responsible for programming and maintenance of the services to support mobile application (Android and IOS) BTFIT.",
                        "Responsible for programming the web site www.btfit.com.br using Bootstrap, Jquery. Asp.Net MVC 5, Wcf, MySql, DynamoDb (No Sql) and Amazon web services. "],
                    period: "12/2013 - 12/2015",
                },
            );
        }

    }
    angular.module("home").controller("workController", WorkController);
}
