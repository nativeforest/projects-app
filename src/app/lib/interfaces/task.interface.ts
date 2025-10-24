export interface ITask {
    id: number;
    name: string;
    overview?: string | null;
    status: StatusActivity;
    position: number;
    projectId: number;
    userId:number;
}

 
 type StatusActivity = "IDLE" | "PENDING" |"INPROGRESS" | "DONE" | "CANCELLED" ;