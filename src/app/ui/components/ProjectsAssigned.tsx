import { IProjectAssigned } from "@/app/lib/interfaces/project-user.interface";
import CalendarIcon from "./calendar.icon";
import Tasks from "./tasks";
import { IUser } from "@/app/lib/interfaces/user.interface";

export default function ProjectsAssigned({
  projects,
  user
}: {
  projects: IProjectAssigned[];
  user:IUser
}) {
  return (
    <>
      <ul className="flex gap-2">
        {!!projects &&
          projects.map((project) => (
            <li
              key={project.projectId}
              className="mt-1 rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 min-w-[250px]  "
            >
              {project.project?.projectName}
              <div className="mt-2 mb-1 text-sm text-gray-500 dark:text-gray-400">
                {/* 12 may 2025 format */}
                <CalendarIcon /> Deadline:{" "}
                {new Date(project?.project?.dateEnd).toLocaleDateString(
                  "COL-ES",
                  {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </div>

              <div className=" text-sm text-gray-500 dark:text-gray-400">
                {project.rate
                  ? `As ${project.rate?.name} - Rate:  ${project.rate?.price} ${project.rate?.currency}`
                  : "No rate assigned"}
              </div>
              <details>
                <summary className="cursor-pointer text-blue-400 hover:underline mt-2">
                  View Tasks 
                </summary>

                <Tasks
                  tasks={user?.tasksAssigned || []}
                  projectId={project.projectId}
                />
              </details>
            </li>
          ))}
      </ul>
    </>
  );
}
