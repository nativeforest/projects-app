
// {"projects":[{"id":3,"projectName":"Project Babolat X API","description":"d","creationDate":"2025-10-23T15:37:25.075Z","userId":3,"rateId":1,"tasks":[],"user":{"id":3,"name":"Andres Zambr","dni":"3453412","email":"azl@gmail.com","maxHours":440,"creationDate":"2025-10-23T15:34:21.535Z"},"rate":{"id":1,"name":"Assistant","price":"2000","currency":"USD"}},{"id":2,"projectName":"Maya complex enterprise","description":"descr","creationDate":"2025-10-23T15:37:25.005Z","userId":2,"rateId":2,"tasks":[{"id":3,"name":"Scaling production","overview":null,"status":"INPROGRESS","position":0,"ProjectId":2}],"user":{"id":2,"name":"Aura Sanc","dni":"2343252","email":"auu@gmail.com","maxHours":123,"creationDate":"2025-10-23T15:34:21.453Z"},"rate":{"id":2,"name":"Senior lvl 2","price":"6000","currency":"USD"}},{"id":1,"projectName":"Project Redwood","description":"de","creationDate":"2025-10-23T15:37:24.935Z","userId":1,"rateId":1,"tasks":[{"id":1,"name":"Performing software development","overview":"ov","status":"IDLE","position":0,"ProjectId":1},{"id":2,"name":"Handling finance","overview":null,"status":"PENDING","position":0,"ProjectId":1},{"id":5,"name":"Scaling production","overview":null,"status":"DONE","position":0,"ProjectId":1}],"user":{"id":1,"name":"Paulina  Garcia","dni":"121231","email":"pa@gmail.com","maxHours":23,"creationDate":"2025-10-23T15:34:21.378Z"},"rate":{"id":1,"name":"Assistant","price":"2000","currency":"USD"}}]} 

import { IRate } from "./rate.interface";
import { ITask } from "./task.interface";
import { IUser } from "./user.interface";




export interface IProject {
    id: string;
    projectName: string;
    description?: string;
    creationDate: Date;
    dateStart: Date;
    dateEnd: Date;
    dateFinished?: Date;
    tasks: ITask[];
   
}



