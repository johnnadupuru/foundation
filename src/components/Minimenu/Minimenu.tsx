import { NavLink } from "react-router-dom"

const Minimenu = ({isOpen}) => {
  return (
    <div className={`${isOpen?"-left-20 top-11":"left-20"} absolute w-[100vh] rounded-b-xl h-[300px] duration-1000 bg-orange-600 shadow-xl`}>
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
  )
}

export default Minimenu