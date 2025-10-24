import { IProject } from "@/app/lib/interfaces/project.interface";
import CalendarIcon from "./calendar.icon";
import Tasks from "./tasks";

export default function Card({ project }: { project: IProject }) {
  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 min-w-[350px] ">
        <h2 className="mb-2 text-2xl font-bold text-[#122682] ">
          {project.projectName}
        </h2>
        <div className="mt-0 text-sm text-gray-300 dark:text-gray-400">
          {new Date(project.creationDate).toLocaleDateString()}
        </div>
        <p className="text-gray-400 dark:text-gray-300 text-xs py-3">
          {project.description}
        </p>
        {/* deadline */}
        <div className="mt-2 mb-1 text-sm text-gray-500 dark:text-gray-400">
          {/* 12 may 2025 format */}
          <CalendarIcon /> Deadline: {new Date(project.dateEnd).toLocaleDateString("COL-ES", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })} 
        </div>
        {/* user
         */}
        <div className=" text-sm text-gray-500 dark:text-gray-400">
          Assigned to: <strong>{project.user.name}</strong> ({project.user.email})
        </div>
        <div className=" text-sm text-gray-500 dark:text-gray-400">
          
          {project.rate
            ? `As ${project.rate.name} - Rate:  ${project.rate.price} ${project.rate.currency}`
            : "No rate assigned"}
        </div>
        <details>
          <summary className="cursor-pointer text-blue-400 hover:underline mt-2">
            View Tasks ({project.tasks.length})
          </summary>
          <Tasks tasks={project.tasks} />
        </details>
      </div>
    </>
  );
}
