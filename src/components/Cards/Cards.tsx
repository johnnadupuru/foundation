import {useNavigate} from "react-router-dom"

const Cards = ({imageUrl,paragraph}) => {
  const navigate=useNavigate()
  return (
    <div className='shadow-xl bg-white h-fit md:h-[400px] md:w-[450px] mb-4 lg:mr-5 rounded-xl p-1 '>
        <img src={imageUrl} className='h-[80%] rounded-t-xl ' alt=''/>
        <div className=''>
            <p className='text-xl'>{paragraph}</p>
            <div className="flex justify-center">
              <button onClick={()=>navigate("/about")} className="bg-orange-800 text-white hover:bg-red-500 text-center mr-3 p-2 rounded-lg">Know More</button>
              <button onClick={()=>navigate("/payments")} className="bg-orange-800 text-white hover:bg-red-500 text-center p-2 rounded-lg">Donate Us</button>
            </div>
        </div>
    </div>
  )
}

export default Cards