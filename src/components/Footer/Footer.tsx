import {HiLocationMarker} from "react-icons/hi"
import {BiSolidPhoneCall,BiLogoWhatsappSquare,BiLogoInstagramAlt,BiLogoTwitter,BiLogoFacebookCircle} from "react-icons/bi"

const Footer = () => {
  return (
    <div className="bg-orange-600">
        <h1 className="text-white text-3xl font-bold text-center underline decoration-2">Follow Us</h1>
        <div className="bg-orange-600 p-2 flex lg:flex-row flex-col justify-around">
            <div className="flex lg:justify-center lg:items-center mb-5 lg:mb-0">
                <div className="flex">
                    <div className="bg-black p-1">
                        <h1 className="text-white text-5xl ">S</h1>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold underline decoration-4">SATYADEEP</h1>
                        <span className="text-blue-700 font-bold text-xl">FOUNDATION</span>
                    </div>
                </div>
            </div>
            <div className="mb-5 lg:mb-0">
                <h3 className="text-white text-xl font-semibold">Satyadeep Foundation</h3>
                <p className="text-white text-xl font-semibold">Address</p>
                <ul className="ml-3">
                    <li className="text-lg text-white"><HiLocationMarker/></li>
                    <li className="text-lg ml-2 text-white">London</li>
                    <li className="text-lg ml-2 text-white">Greater London</li>
                    <li className="text-lg ml-2 text-white">United Kingdom</li>
                </ul>
            </div>
            <div className="mb-5 lg:mb-0">
                <h3 className="text-white text-xl font-semibold">Contact Us</h3>
                <div className="flex">
                    <p className="text-white text-3xl font-semibold mr-1"><BiSolidPhoneCall/></p>
                    <p className="text-white text-3xl font-semibold mr-3"><BiLogoWhatsappSquare/></p>
                    <p className="text-white text-2xl font-semibold">+000 0000 0000</p>
                </div>
                <h1 className="text-white text-xl font-semibold mt-2">Follow Links</h1>
                <div className="flex">
                    <p className="text-white text-3xl hover:text-4xl font-semibold mr-2"><BiLogoFacebookCircle/></p>
                    <p className="text-white text-3xl hover:text-4xl font-semibold mr-2"><BiLogoTwitter/></p>
                    <p className="text-white text-3xl hover:text-4xl font-semibold mr-2"><BiLogoInstagramAlt/></p>
                </div>
            </div>
            <div className="mb-5 lg:mb-0">
                <h3 className="text-white text-xl font-semibold">Registration</h3>
                <div className="flex flex-col">
                    <input type="text" placeholder="Enter your name" className="bg-white mb-2 rounded-sm"/>
                    <input type="number" placeholder="Enter your phone number" className="bg-white mb-2 rounded-sm"/>
                </div>
                <div className="text-center">
                    <button className="bg-blue-600 text-white rounded-lg p-1 hover:p-2 duration-700">Register</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer