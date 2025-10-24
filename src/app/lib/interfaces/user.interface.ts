import { IProjectAssigned } from "./project-user.interface";
import { ITask } from "./task.interface";

export interface IUser {
    id: number;
    name: string;
    dni: string;
    email: string;
    maxHours: number;
    creationDate: Date;
    projectsAssigned?:IProjectAssigned[]
    tasksAssigned?:ITask[]
}