import { NavLink } from "react-router-dom"
import {useState} from "react"
import {RxCross1} from "react-icons/rx"
import {AiOutlineMenu} from "react-icons/ai"


const Navbar = () => {
  const[isOpen,setOpen]=useState(false)

  return (
    <div className="fixed px-3 md:px-10 h-[50px] shadow-xl py-2 flex justify-between bg-white w-full">
      <div className="flex">
        <div className="bg-black h-[30px] w-[20px] p-[2px] text-center mr-1">
          <h1 className="text-white font-bold text-xl">S</h1>
        </div>
        <div className="h-[30px]">
          <h1 className="text-black font-bold text-xl md:text-2xl">SATYADEEP <span className="font-bold text-sm md:text-lg text-blue-700">FOUNDATION</span></h1>
        </div>
      </div>
      <div className="mr-10 hidden lg:block">
        <div className="flex justify-around">
          <div className="bg-orange-800 rounded-lg text-center p-1 mr-5">
            <NavLink to="/" className={`text-lg font-bold  text-white text-center`}>Home</NavLink>
          </div>
          <div className="bg-orange-800 rounded-lg text-center p-1 mr-5">
            <NavLink to="/about" className={`text-lg font-bold text-white`}>About Us</NavLink>
          </div>
          <div className="bg-orange-800 rounded-lg text-center p-1 mr-5">
            <NavLink to="/payments" className={`text-lg font-bold text-white`}>Payment</NavLink>
          </div>
        </div>
      </div>
      <div className="lg:hidden relative">
        <div>
          {isOpen?<div className="">
            <button onClick={()=>setOpen(prev=>!prev)} className="bg-orange-600 rounded-lg shadow-xl text-white text-4xl font-bold"><RxCross1/></button>
          </div>:<div className=""><button onClick={()=>setOpen(prev=>!prev)} className="bg-orange-600 rounded-lg text-white shadow-xl p-1 text-3xl font-bold"><AiOutlineMenu/></button></div>}
        </div>
        <div className={`${isOpen ? "-left-20 top-11" : "left-20"} absolute w-[100vh] rounded-b-xl h-[300px] duration-1000 bg-orange-600 shadow-xl`}>
            <ul>
                <li className="text-white text-2xl mb-2 p-5 hover:bg-orange-800">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="text-white text-2xl mb-2 p-5 hover:bg-orange-800">
                    <NavLink to="/about">About Us</NavLink>
                </li>
                <li className="text-white text-2xl mb-2 p-5 hover:bg-orange-800">
                    <NavLink to="/payments">Payment</NavLink>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar