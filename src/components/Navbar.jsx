import { TiTick } from "react-icons/ti";

export default function NavBar() {
  return (
    <div className="text-center bg-slate-300 ">
      <div className="relative mx-auto w-fit">
        <p className="text-lg font-thin flex justify-center items-center">
          <span>
            things
          </span>
          <span className="text-lg font-thin text-slate-100 -ml-[2px]">
            ToDo
          </span>
          <span>
            <TiTick />
          </span>
        </p>
        {/* <p className="absolute text-lg p-1 font-thin top-[0px] left-[45px] text-slate-100">
          ToDo
        </p> */}
      </div>
    </div>
  )
}