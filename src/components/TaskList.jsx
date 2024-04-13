import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

import { MdOutlineDoneOutline } from "react-icons/md";

export default function TaskList({ list, removeTask, slashTask }) {

  console.log(removeTask, slashTask)
  const dispatch = useDispatch();
  return (
    <div>
      {list?.length > 0 ?
        list.map((elem, index) => (
          <div key={index} className="min-h-20 flex flex-col justify-start items-center gap-2 border-b-[1px] border-slate-700 rounded-md p-2 shadow-md shadow-slate-800/40
            mb-4
          ">
            <div className="flex justify-between items-center w-full text-slate-200">
              <span
                className="decoration-slate-700"
                style={elem.done ? { textDecoration: 'line-through' } : {}}
              >
                {elem?.taskname}
              </span>
              <MdDelete className="hover:text-slate-800 transition-all duration-500"
                onClick={() => { dispatch(removeTask(elem.id)) }}
              />
            </div>
            <div className="text-[0.8rem] text-left text-wrap max-w-full ml-0">
              <span
                className="decoration-slate-700"
                style={elem.done ? { textDecoration: 'line-through' } : {}}
              >
                {elem?.taskText}
              </span>
            </div>

            <div className="w-full ">
              <div className={`w-1/4 mx-auto text-center hover:bg-slate-600 ${elem.done ? 'bg-slate-600' : ''}`}>
                <MdOutlineDoneOutline
                  className="text-2xl mx-auto rounded-sm hover:underline"
                  onClick={() => { dispatch(slashTask(elem.id)) }}
                />
              </div>
            </div>

          </div>
        )) :
        ''}
    </div>
  )
} 