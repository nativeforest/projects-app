
import ProjectsAssigned from "./ProjectsAssigned";

import { IUser } from "@/app/lib/interfaces/user.interface";

export default function Card({ user }: { user: IUser }) {

  console.log({user})
  return (
    <>
      <div className="">
        <h2 className="mb-2 text-2xl font-bold text-[#122682] ">
         Nombre:  {user.name}
        </h2>
        <div className="mt-0 text-sm text-gray-300 dark:text-gray-400">
          {new Date(user.creationDate).toLocaleDateString()}
        </div>
        <p className="text-gray-400 dark:text-gray-300 text-xs py-3">
          Max hours: {user.maxHours}
        </p>
      
        <div className=" text-sm text-gray-500 dark:text-gray-400">
          <strong>{user.email}</strong> 
        </div>
       
       

        
          <h3 className="cursor-pointer text-blue-400 hover:underline mt-2">
            Projects 
          </h3>
          
          <ProjectsAssigned  projects={user.projectsAssigned || [] }user={user} > 
            
         
          </ProjectsAssigned>
        
      </div>
    </>
  );
}
