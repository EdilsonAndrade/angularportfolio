module app.home.interfaces {
    export interface IHome {
        title: string;
        image: string;
        description: string;
        about: string;
        skills: app.models.SkillModel[];
        process: app.models.Process[];
    }
}

