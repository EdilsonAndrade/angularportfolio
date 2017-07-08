module app.common {
    export interface IJob {
        pictureUrl: string;
        name: string;
        jobTitle: string;
        sumariQualifications: ISummaryQualitifcation;
    }
}
