import './App.css'
import NavBar from './components/Navbar'
import TaskInput from './components/TaskInput'
import Tasks from './components/Tasks'


function App() {

  return (
    <>
      <div className='bg-slate-700 min-w-screen min-h-screen flex flex-col justify-start gap-1'>
        <NavBar />
        <TaskInput />
        <div className='w-[75%] flex justify-center items-center mx-auto gap-2 mt-2'>
          <hr className='w-2/3 text-center mt-5 mb-2 mx-auto border-slate-500'></hr>
          <h3 className="text-sm mt-2">Tasks</h3>
          <hr className='w-2/3 text-center mt-5 mb-2 mx-auto border-slate-500'></hr>
        </div>

        <Tasks />
      </div>
    </>
  )
}

export default App
