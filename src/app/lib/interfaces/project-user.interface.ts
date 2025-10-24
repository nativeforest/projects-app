import { IProject } from "./project.interface";
import { IRate } from "./rate.interface";

export interface IProjectAssigned {
   
    fechaAssignment:Date;
    userId: number;
    projectId:number;
    project?:IProject;
    rateId:number;
    rate?: IRate;
       
    }