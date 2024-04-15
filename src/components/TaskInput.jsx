import { useState } from "react"
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTask as addGenTask} from "../features/task/taskSlice";
import { addTask as addImpTask } from "../features/task/impTaskSlice";
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast'

export default function TaskInput() {

  const [taskname, setTaskname] = useState('');
  const [taskText, setTaskText] = useState('');
  const [taskPriority, setTaskPriority] = useState('GEN')
  const dispatch = useDispatch();

  const handleTask = () => {
    // taskname and taskText we have with default option 

    if(taskname == '' || taskname == ' '){
      toast('Taskname blank!', {className : 'bg-slate-300 text-slate-600'});
      return; 
    }

    const taskObj = {
      taskname,
      taskText,
      taskPriority,
      id : uuidv4(),
      done : false
    }

    if (taskPriority === 'GEN') {
      dispatch(addGenTask(taskObj))
    }
    else {
      dispatch(addImpTask(taskObj))
    }

    setTaskname('');
    setTaskText('');
    // setTaskPriority('GEN')
  }

  return (
    <div className="text-center min-w-fit ">
      <div className="grid grid-cols-2 grid-rows-3 p-2 gap-4 border-slate-500 border-dotted border-[1px] w-1/3 mx-auto rounded-lg
      shadow-md shadow-slate-500/50
      ">
        <div className="col-span-1 row-span-1">
          <input type="text" value={taskname} placeholder="task"
            className="rounded-sm h-8 p-1 w-full text-slate-900"
            onChange={(e) => (setTaskname(prev => e.target.value))}
          />
        </div>

        <div className="col-span-1 row-span-2">
          <textarea rows={2} name="taskText"
            className="rounded-xs resize-x p-1 text-[0.8rem] min-w-full min-h-full bg-slate-300 text-slate-800"
            placeholder="details"
            onChange={(e) => setTaskText(e.target.value)}
            value={taskText}
          />
        </div>

        <div className="col-span-1 row-span-1 flex justify-between items-center">
          <button className={`bg-slate-600 text-slate-300 p-1 w-14 ${taskPriority === 'IMP' ? 'shadow-md shadow-slate-900/90 !bg-slate-400 text-slate-800' : ''}`}
            onClick={() => setTaskPriority('IMP')}
          >
            Imp
          </button>
          <span className="text-[0.7rem]">OR</span>
          <button className={`bg-slate-600 text-slate-300 p-1 w-14 ${taskPriority === 'GEN' ? 'shadow-md shadow-slate-900/90 !bg-slate-400 text-slate-800' : ''}`}
            onClick={() => setTaskPriority('GEN')}
          >
            Gen
          </button>
        </div>

        <div className="col-span-2 w-full bg-slate-500 p-1">
          <button onClick={handleTask}
            className="rounded-[50%] p-1 border-[1px] border-slate-200 "
          >
            <FaPlus className="text-slate-300 hover:rotate-180 transition-all duration-700" />
          </button>
        </div>

      </div>
    </div>
  )
}