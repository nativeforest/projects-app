import { ITaskProject } from "@/app/lib/interfaces/project.interface";

export default function Tasks({ tasks }: { tasks: ITaskProject[] }) {
    return (
        <ul >
            {tasks.map((task) => (
              <li key={task.id} className="mt-1">
              
                <span className="font-small">{task.name}</span>{" "}
                <span
                  className={`ml-2 rounded-full px-2 py-1 text-xs font-semibold 
                    ${
                      task.status === "DONE"
                        ? "bg-green-100 text-green-800"
                        : task.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-800"
                        : task.status === "INPROGRESS"
                        ? "bg-blue-100 text-blue-800"
                        : task.status === "IDLE"
                        ? "bg-gray-100 text-gray-800"
                        : task.status === "CANCELLED"
                        ? "bg-red-100 text-red-800"
                        : ""
                    }`}
                >
                  {task.status=== "DONE"
                    ? "Done"
                    : task.status === "PENDING"?"Pending":task.status === "INPROGRESS"?"In Progress":task.status === "IDLE"?"Idle":task.status === "CANCELLED"?"Cancelled":""}
                </span>
              </li>
            ))}
          </ul>
    )
}