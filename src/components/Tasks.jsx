import TaskList from "./TaskList";
import { useSelector } from "react-redux";
import { removeTask as genRemoveTask, slashTask as genSlashTask} from "../features/task/taskSlice";
import { removeTask as impRemoveTask, slashTask as impSlashTask} from "../features/task/impTaskSlice";

export default function Tasks() {
  const impTasks = useSelector((state) => state.impTasks.impTask)
  const genTasks = useSelector((state) => state.genTasks.genTask)

  console.log("inside tasks.jsx ------------------", impTasks)

  return (
    <div className="text-center mt-8">
      <div className="flex justify-between items-start gap-2 w-[80%] mx-auto">
        <div className="border-slate-600 border-[1px] rounded-md min-h-16 w-1/3 overflow-hidden shadow-md shadow-slate-500/80">
          <p className="h-12 bg-slate-400 text-slate-100 ">Important</p>
          <div>
            <TaskList list={impTasks} removeTask={impRemoveTask} slashTask={impSlashTask} />
          </div>

        </div>

        <div className="border-slate-400 border-dotted border-[1px] rounded-md min-h-16 w-1/3 overflow-hidden">
          <p className="h-12 bg-slate-400 text-slate-100 ">General</p>
          <div>
            <TaskList list={genTasks} removeTask={genRemoveTask} slashTask={genSlashTask} />
          </div>
        </div>
      </div>
    </div>
  )
}